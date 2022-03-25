const tokenize = (code: string, keywords: Object) => {
    const lengthMap = keywordsLengthMap(keywords)
    const result = running(code, lengthMap)
}

const keywordsLengthMap = (keywords: Object) => {
    const lengthMap: Map<number, string[]> = new Map()
    Object.keys(keywords).forEach(keyword => {
        if (lengthMap.has(keyword.length)) {
            // if lengthMap has the same length, push the keyword into the array
            // @ts-ignore
            lengthMap.get(keyword.length).push(keyword)
        } else {
            // if lengthMap doesn't have the same length, create a new array and push the keyword into the array
            lengthMap.set(keyword.length, [keyword])
        }
    })
    return lengthMap
}

const running = (code: string, lengthMap: Map<number, string[]>) => {
    const lengthList = lengthMapList(lengthMap)
    let result = code
    for (let mainIndex = 0; mainIndex < code.length; mainIndex++) {
        for (let mainOffset = 0; mainOffset < lengthList.length; mainOffset++) {
            const length = lengthList[mainOffset]
            const keywords = lengthMap.get(length)
            // @ts-ignore
            for (let keyIndex = 0; keyIndex < keywords.length; keyIndex++) {
                // @ts-ignore
                const keyword = keywords[keyIndex]
                if (keyword === code.slice(mainIndex, length)) {
                    console.log(keyword)
                    // TODO replace result
                    mainIndex += length - 1
                    break
                }
            }
        }
    }
    return result
}

const lengthMapList = (lengthMap: Map<number, string[]>) => {
    const lengthList: number[] = []
    // @ts-ignore
    for (let item of lengthMap.keys()) {
        lengthList.push(item)
    }
    return lengthList
}

export default tokenize