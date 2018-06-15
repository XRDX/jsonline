/***************************************************************
 * 
 * rectangle(x, y, width, height, *color)
 * 
 * 在画布上画出一个长方形：
 * x,y     - 长方形左上角顶点位置
 * width   - 长方形的宽度
 * height  - 长方形的高度
 * color   - 长方形的颜色，可选参数，默认为 "orange"
 * 
 * 
 **************************************************************/
 
canvas.showAxis();

rectangle(50, 50, 100, 50);

rectangle(50, 150, 100, 50, 'red');

rectangle(50, 250, 100, 50, '#ffff00');

/***************************************************************
 * 
 * 如果想要画一个边框的长方形边框，在使用rectangle之前，使用fill方法
 * 
 **************************************************************/

fill(false); // 无填充

rectangle(200, 50, 100, 50);

rectangle(200, 150, 100, 50, 'red');

rectangle(200, 250, 100, 50, '#ffff00');