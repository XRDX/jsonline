/******************************************************

Array

数组
数组是一组按顺序排列的集合，集合的每个值称为元素。JavaScript的数组可以包括任意数据类型。例如：

*******************************************************/


let a = [1, 2, 3.14, 'Hello', null, true]
console.log(a);

// 上述数组包含6个元素。数组用[]表示，元素之间用,分隔。

// 另一种创建数组的方法是通过Array()函数实现：

new Array(1, 2, 3); // 创建了数组[1, 2, 3]

// 然而，出于代码的可读性考虑，强烈建议直接使用[]。

// 数组的元素可以通过索引来访问。请注意，索引的起始值为0：

var arr = [1, 2, 3.14, 'Hello', null, true];
console.log(arr[0]); // 返回索引为0的元素，即1
console.log(arr[5]); // 返回索引为5的元素，即true
console.log(arr[6]); // 索引超出了范围，返回undefined