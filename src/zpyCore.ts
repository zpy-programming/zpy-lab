import {ZPY_URL} from "./config";
import {keywords} from "./keywords";
import axios from 'axios'

class ZpyCompile {
    private readonly keywords: any;

    constructor() {
        this.keywords = keywords
        console.log(this.keywords)
    }

    compile(code: string, type = "zpy") {

        if (type !== "zpy" && type !== "py") {
            throw new Error("Compile code should be one of zpy, py")
        }

        for (let keyword of keywords) {
            for (let word in keyword.words) {
                let regexp

                if (this.browser() === 'Safari') regexp = keyword.safariReg
                else regexp = keyword.regexp

                if (type === "zpy") { // @ts-ignore
                    code = code.replace(this.dispose(word, regexp), keyword.words[word])
                }
                else if (type === "py") { // @ts-ignore
                    code = code.replace(this.dispose(keyword.words[word], regexp), word)
                }
            }
        }
        return code
    }

    dispose(key: string, regexp: string) {
        let expression = String(eval(regexp))
        return eval(expression)
    }

    browser() {
        const explorer = window.navigator.userAgent
        //判断是否为IE浏览器
        if (explorer.indexOf("MSIE") >= 0) {
            return 'ie';
        }
        //判断是否为Firefox浏览器
        else if (explorer.indexOf("Firefox") >= 0) {
            return 'Firefox';
        }
        //判断是否为Chrome浏览器
        else if (explorer.indexOf("Chrome") >= 0) {
            return 'Chrome';
        }
        //判断是否为Opera浏览器
        else if (explorer.indexOf("Opera") >= 0) {
            return 'Opera';
        }
        //判断是否为Safari浏览器
        else if (explorer.indexOf("Safari") >= 0) {
            return 'Safari';
        } else {
            return 'None'
        }
    }

    async exec(code: any) {
        let res = await axios({
            method: 'post',
            url: ZPY_URL,
            data: {
                'code': code,
            },
        })
        return res.data
    }
}

const zpyCompiler = new ZpyCompile()
export {zpyCompiler}