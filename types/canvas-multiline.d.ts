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
    multilineText(type: "fill" | "stroke", text: string, x: number, y: number, maxWidth: number, verticalSpacing?: number): any;
    /**
     * 多行文本，宽度超过width，会自动换行。支持解析 '\n'
     * @param text 文本
     * @param x 文本域左上角x坐标
     * @param y 文本域左上角y坐标
     * @param maxWidth 最大宽度
     * @param verticalSpacing 竖直方向的间距
     */
    fillMultilineText(text: string, x: number, y: number, maxWidth: number, verticalSpacing?: number): any;
    /**
     * 多行文本，宽度超过width，会自动换行。支持解析 '\n'
     * @param text 文本
     * @param x 文本域左上角x坐标
     * @param y 文本域左上角y坐标
     * @param maxWidth 最大宽度
     * @param verticalSpacing 竖直方向的间距
     */
    strokeMultilineText(text: string, x: number, y: number, maxWidth: number, verticalSpacing?: number): any;
}
