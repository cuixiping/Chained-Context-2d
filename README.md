# Chained-Context-2d
Canvas Context 2d接口的链式调用封装，极简JS，405字节。

功能：

- 链式调用所有的原生方法
- 链式调用所有的原生属性 (原生属性进行链式调用时，如果带参数将进行属性设置，不带参数则返回该属性值。)

完整示例：

```html
<canvas id="canvas1" width="320" height="240"></canvas>
<script src="ctx.min.js"></script>
<script>
function initCanvas(){
	var ctx = Ctx("#canvas1");
	ctx.beginPath().moveTo(10,10).lineTo(90,90).strokeStyle("#f00").stroke();
	ctx.beginPath().moveTo(90,10).lineTo(10,90).strokeStyle("#00f").stroke();
	console.log(ctx.strokeStyle()); //读取strokeStyle属性值 "#0000ff"
}
window.onload = initCanvas;
</script>
```
