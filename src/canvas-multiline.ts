interface CanvasRenderingContext2D {
    /**
     * 多行文本，宽度超过width，会自动换行。支持解析 '\n' 
     * @param type fill文本或stroke文本
     * @param text 文本
     * @param x 文本域左上角x坐标
     * @param y 文本域左上角y坐标
     * @param maxWidth 最大宽度
     * @param verticalSpacing 竖直方向的间距
     */
    multilineText(type: "fill" | "stroke", text: string, x: number, y: number, maxWidth: number, verticalSpacing?: number): any

    /**
     * 多行文本，宽度超过width，会自动换行。支持解析 '\n' 
     * @param text 文本
     * @param x 文本域左上角x坐标
     * @param y 文本域左上角y坐标
     * @param maxWidth 最大宽度
     * @param verticalSpacing 竖直方向的间距
     */
    fillMultilineText(text: string, x: number, y: number, maxWidth: number, verticalSpacing?: number): any

    /**
     * 多行文本，宽度超过width，会自动换行。支持解析 '\n' 
     * @param text 文本
     * @param x 文本域左上角x坐标
     * @param y 文本域左上角y坐标
     * @param maxWidth 最大宽度
     * @param verticalSpacing 竖直方向的间距
     */
    strokeMultilineText(text: string, x: number, y: number, maxWidth: number, verticalSpacing?: number): any
}



CanvasRenderingContext2D.prototype.multilineText = function (type, text, x, y, maxWidth = Number.MAX_VALUE, verticalSpacing: number = 0) {
    //先将文本按'\n'换行符拆分
    let lines = text.split("\n").map(text => {
        return text.match(/([a-zA-Z'"]+|.)/g) || [];//提取单词，例从"中国,Hello World!"可提取出['中','国',',','Hello',' ','World','!']
    });
    let texts = [];//最终要绘制的多行文本
    for (let words of lines) {
        let sumWidth = 0;
        texts.push("");
        for (let word of words) {
            let mt = this.measureText(word);
            if (mt.width > maxWidth) {//该单词宽度超过最大宽度
                for (let c of word) { //对单词的每一个字符进行判断
                    let mt = this.measureText(c);
                    sumWidth += mt.width;
                    if (sumWidth < maxWidth) {//累加的宽度没有超过最大宽度
                        texts[texts.length - 1] += c;
                    } else {//若累加宽度超过最大宽度，重新累加，当前字符另起新行
                        sumWidth = mt.width;
                        texts.push(c);
                    }
                }
                continue;
            }
            sumWidth += mt.width;
            if (sumWidth < maxWidth) {//累加的宽度没有超过最大宽度
                texts[texts.length - 1] += word;
            } else if (word != " ") {//若累加宽度超过最大宽度，重新累加，当前单词另起新行，注意：空格字符串不用另起新行，忽略掉
                sumWidth = mt.width;
                texts.push(word);
            }
        }
    }

    //获取当前字体像素，作为高度。例："23px Arial".match(/(\d+)px/), 结果：["23px","23"]
    const [_, fontSize] = this.font.match(/(\d+)px/)!;
    const h = parseInt(fontSize) + verticalSpacing;
    const drawText = "fill" == type ? this.fillText.bind(this) : this.strokeText.bind(this);
    for (let i = 0; i < texts.length; i++) {
        let text = texts[i];
        drawText(text, x, y + h * i);
    }
}

CanvasRenderingContext2D.prototype.fillMultilineText = function (text, x, y, maxWidth = Number.MAX_VALUE, verticalSpacing: number = 0) {
    this.multilineText("fill", text, x, y, maxWidth, verticalSpacing);
}

CanvasRenderingContext2D.prototype.strokeMultilineText = function (text, x, y, maxWidth = Number.MAX_VALUE, verticalSpacing: number = 0) {
    this.multilineText("stroke", text, x, y, maxWidth, verticalSpacing);
}