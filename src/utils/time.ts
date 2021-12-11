class Time {
    transformTimestamp(timestamp: string | number | Date) {
        //将“2021-07-06T06:23:57.000+00:00” ，转换为2021-07-06 14:23:57
        let a = new Date(timestamp).getTime()
        const date = new Date(a)
        const Y = date.getFullYear() + '-'
        const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
        const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
        const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
        const s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
        const dayString = Y + M + D
        const timeString = h + m + s
        const dateString = dayString + '  ' + timeString
        // console.log('dateString', dateString) // > dateString 2021-07-06 14:23:57
        return {dayString, timeString, dateString}
    }

    getCurrentTime() {
        let date = new Date();//当前时间
        let year = date.getFullYear()
        let month = this.zeroFill(date.getMonth() + 1);//月
        let day = this.zeroFill(date.getDate());//日
        let hour = this.zeroFill(date.getHours());//时
        let minute = this.zeroFill(date.getMinutes());//分
        let second = this.zeroFill(date.getSeconds());//秒

        //当前时间
        return year + "-" + month + "-" + day
            + " " + hour + ":" + minute + ":" + second;
    }

    zeroFill(i: string | number) {
        // 补零
        if (i >= 0 && i <= 9) {
            return "0" + i;
        } else {
            return i;
        }
    }
}

const time = new Time()

export {time}