import OutputWorker from "./output.worker.ts"
import * as Comlink from "comlink"
import {zpyCompiler} from "./zpyCore";
import {time} from "./utils/time";
import {OUTPUT_TIME} from "./config";

type CancelablePromise<T> = Promise<T> & {
  cancel: () => any
}

export const compiler = (...param: readonly [string, string]) => {
  const outputWorker = new OutputWorker()

  const output = Comlink.wrap<{
    output: (data: string) => Promise<any[]>
  }>(outputWorker).output

  const cleanup = () => {
    outputWorker.terminate()
    output[Comlink.releaseProxy]()
  }

  const run = async () => {
    // const code = await compile(param[1])
    // const result = await output(code)
    const source = "#!zpy\n" + param[1]
    console.log("===== SOURCE =====\n" + source)
    const pyCode = zpyCompiler.compile(source)
    // const now = OUTPUT_TIME ? `[${time.getCurrentTime()}]:\n` : ''
    const result = await zpyCompiler.exec(pyCode)
    console.log("===== OUTPUT =====\n" + result)
    // @ts-ignore
    const outputString: string = result
    cleanup()
    return {
      outputString
    }
  }

  const result = run()
  // provide the cancel function for react-query
  ;(result as any).cancel = cleanup
  return result
}
