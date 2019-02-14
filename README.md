> 说明：canvas-multiline支持绘制文本时，按指定的最大宽度自动换行，并能解析文本中的"\n"换行符。同时，canvas-multiline支持对英文单词的宽度进行解析。

# 使用
* 浏览器端
```html
<!DOCTYPE html>
<html>
<head>
    ...
</head>
<body>
    ...
    <script src="../dist/canvas-multiline.min.js"></script>
</body>
</html>
```

* npm 模块开发，请先执行命令：npm install -S canvas-multiline
```javascript
import 'canvas-multiline'
...
```

# 🌰例子

* 1.普通的英文短句
```javascript
let ctx = canvas.getContext("2d");
ctx.font = "18px Arial";
ctx.textBaseline = "top";
let text = `Her voice was so sweet as it broke the hypnotic trance we were all caught in, "Mom, let's run through the rain." she said.`
ctx.strokeRect(0, 0, 160, 500)
ctx.fillMultilineText(text, 0, 0, 160);
```
<img src="https://raw.githubusercontent.com/destiny-wenlun/canvas-multiline/master/img/demo1.png" />

* 2.存在"\n"换行符的英文短句
```javascript
let ctx = canvas.getContext("2d");
ctx.font = "18px Arial";
ctx.textBaseline = "top";
//文本中存在"\n"换行符
let text = `Her \nvoice \nwas so sweet as it broke the hypnotic trance we were all caught in, "Mom, let's run through the rain." she said.`
ctx.strokeRect(0, 0, 160, 500)
ctx.fillMultilineText(text, 0, 0, 160);
```
<img src="https://raw.githubusercontent.com/destiny-wenlun/canvas-multiline/master/img/demo2.png" />

* 3.中文短句
```javascript
let ctx = canvas.getContext("2d");
ctx.font = "18px Arial";
ctx.textBaseline = "top";
//中文
let text = `生命没有意义，我来到这个世界上，只为了再一次聆听那曾被判决的声音，也许对你们来说，没有任何的意义，但对我来说，就是生命中最大的意义。`
ctx.strokeRect(0, 0, 160, 500)
ctx.fillMultilineText(text, 0, 0, 160);
```
<img src="https://raw.githubusercontent.com/destiny-wenlun/canvas-multiline/master/img/demo3.png" />

# 方法&参数
## 1. multilineText(type, text, x, y, maxWidth, verticalSpacing)
>说明：此方法通过指定type填充或描边文本。

|参数|说明|默认值|
|-|-|-|
|type|可选值:'fill' \| 'stroke'，fill填充文本,stroke描边文本|-|
|text|要绘制的文本|-|
|x|文本区域左上角x坐标|-|
|y|文本区域左上角y坐标|-|
|maxWidth|文本区域的最大宽度，若文本超过最大宽度，会自动换行|-|
|verticalSpacingh|文字竖直方向的间距|0|

## 2. fillMultilineText(text, x, y, maxWidth, verticalSpacing)
> 说明：此方法填充一个指定最大宽度的文本

|参数|说明|默认值|
|-|-|-|
|text|要绘制的文本|-|
|x|文本区域左上角x坐标|-|
|y|文本区域左上角y坐标|-|
|maxWidth|文本区域的最大宽度，若文本超过最大宽度，会自动换行|-|
|verticalSpacingh|文字竖直方向的间距|0|

## 3. strokeMultilineText(text, x, y, maxWidth, verticalSpacing)
> 说明：此方法描边一个指定最大宽度的文本

|参数|说明|默认值|
|-|-|-|
|text|要绘制的文本|-|
|x|文本区域左上角x坐标|-|
|y|文本区域左上角y坐标|-|
|maxWidth|文本区域的最大宽度，若文本超过最大宽度，会自动换行|-|
|verticalSpacingh|文字竖直方向的间距|0|
