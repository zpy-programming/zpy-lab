import { ZPY_URL } from '../config'
import { RESERVED, BUILT_IN } from './keywords'
import axios from 'axios'

class Core {
    private readonly keywords: any

    constructor() {
        this.keywords = Object.assign({}, RESERVED, BUILT_IN)
    }

    compile(code: string) {
        // TODO Compiler
        return code
    }

    async exec(code: any) {
        let res = await axios({
            method: 'post',
            url: ZPY_URL,
            data: {
                code: code,
            },
        })
        return res.data
    }
}

const core = new Core()
export { core }
