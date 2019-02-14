"use strict";
CanvasRenderingContext2D.prototype.multilineText = function (type, text, x, y, maxWidth, verticalSpacing) {
    if (maxWidth === void 0) { maxWidth = Number.MAX_VALUE; }
    if (verticalSpacing === void 0) { verticalSpacing = 0; }
    //先将文本按'\n'换行符拆分
    var lines = text.split("\n").map(function (text) {
        return text.match(/([a-zA-Z'"]+|.)/g) || []; //提取单词，例从"中国,Hello World!"可提取出['中','国',',','Hello',' ','World','!']
    });
    var texts = []; //最终要绘制的多行文本
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var words = lines_1[_i];
        var sumWidth = 0;
        texts.push("");
        for (var _a = 0, words_1 = words; _a < words_1.length; _a++) {
            var word = words_1[_a];
            var mt = this.measureText(word);
            if (mt.width > maxWidth) { //该单词宽度超过最大宽度
                for (var _b = 0, word_1 = word; _b < word_1.length; _b++) { //对单词的每一个字符进行判断
                    var c = word_1[_b];
                    var mt_1 = this.measureText(c);
                    sumWidth += mt_1.width;
                    if (sumWidth < maxWidth) { //累加的宽度没有超过最大宽度
                        texts[texts.length - 1] += c;
                    }
                    else { //若累加宽度超过最大宽度，重新累加，当前字符另起新行
                        sumWidth = mt_1.width;
                        texts.push(c);
                    }
                }
                continue;
            }
            sumWidth += mt.width;
            if (sumWidth < maxWidth) { //累加的宽度没有超过最大宽度
                texts[texts.length - 1] += word;
            }
            else if (word != " ") { //若累加宽度超过最大宽度，重新累加，当前单词另起新行，注意：空格字符串不用另起新行，忽略掉
                sumWidth = mt.width;
                texts.push(word);
            }
        }
    }
    //获取当前字体像素，作为高度。例："23px Arial".match(/(\d+)px/), 结果：["23px","23"]
    var _c = this.font.match(/(\d+)px/), _ = _c[0], fontSize = _c[1];
    var h = parseInt(fontSize) + verticalSpacing;
    var drawText = "fill" == type ? this.fillText.bind(this) : this.strokeText.bind(this);
    for (var i = 0; i < texts.length; i++) {
        var text_1 = texts[i];
        drawText(text_1, x, y + h * i);
    }
};
CanvasRenderingContext2D.prototype.fillMultilineText = function (text, x, y, maxWidth, verticalSpacing) {
    if (maxWidth === void 0) { maxWidth = Number.MAX_VALUE; }
    if (verticalSpacing === void 0) { verticalSpacing = 0; }
    this.multilineText("fill", text, x, y, maxWidth, verticalSpacing);
};
CanvasRenderingContext2D.prototype.strokeMultilineText = function (text, x, y, maxWidth, verticalSpacing) {
    if (maxWidth === void 0) { maxWidth = Number.MAX_VALUE; }
    if (verticalSpacing === void 0) { verticalSpacing = 0; }
    this.multilineText("stroke", text, x, y, maxWidth, verticalSpacing);
};
