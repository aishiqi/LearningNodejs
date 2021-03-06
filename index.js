const sleep = require("sleep-promise")


console.log("Object");
if (true == false)
{
	let obj = {};
	obj.myKey = "MyValue";
	obj.myKey2 = "MyValue2";
	obj["myKey3"] = "MyValue3";

	console.log("Iterate object");
	for (let key in obj)
	{
		console.log(key, obj[key]);
	}

	for (let entry of Object.entries(obj))
	{
		console.log(entry[0], entry[1]);
	}

	for (let [key, value] of Object.entries(obj))
	{
		console.log(key, value);
	}
}



console.log("Array");
{
	/*
	// https://www.javascripture.com/Array

	concat()	连接两个或更多的数组，并返回结果。
	copyWithin().	从数组的指定位置拷贝元素到数组的另一个指定位置中。
	entries().	返回数组的可迭代对象。
	every()	检测数组元素的每个元素是否都符合条件。
	fill().	使用一个固定值来填充数组。
	filter()	检测数组元素，并返回符合条件所有元素的数组。
	find().	返回符合传入测试（函数）条件的数组元素。
	findIndex().	返回符合传入测试（函数）条件的数组元素索引。
	forEach().	数组每个元素都执行一次回调函数。
	from().	通过给定的对象中创建一个数组。
	indexOf()	搜索数组中的元素，并返回它所在的位置。
	join()	把数组的所有元素放入一个字符串。
	lastIndexOf()	返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
	map()	通过指定函数处理数组的每个元素，并返回处理后的数组。
	pop()	删除数组的最后一个元素并返回删除的元素。
	push()	向数组的末尾添加一个或更多元素，并返回新的长度。
	reverse()	反转数组的元素顺序。
	shift()	删除数组的第一个元素。
	slice()	选取数组的的一部分，并返回一个新数组。
	some()	检测数组元素中是否有元素符合指定条件。
	sort()	对数组的元素进行排序。
	splice()	从数组中添加或删除元素。
	toString()	把数组转换为字符串，并返回结果。
	unshift()	向数组的开头添加一个或更多元素，并返回新的长度。
	valueOf()	返回数组对象的原始值。

	*/
	let a = [1, 2, 3]
	let b = [4, 5, 6]
	let c = [7, 8, 9]

	let concated = a.concat(b, c)
	console.log(concated) //[1, 2, 3, 4, 5, 6, 7, 8, 9]
	console.log(a)//[1, 2, 3]



}


// String
{
	/*
	charAt()	返回在指定位置的字符。
	charCodeAt()	返回在指定的位置的字符的 Unicode 编码。
	concat()	连接两个或更多字符串，并返回新的字符串。
	fromCharCode()	将 Unicode 编码转为字符。
	indexOf()	返回某个指定的字符串值在字符串中首次出现的位置。
	lastIndexOf()	从后向前搜索字符串。
	match()	查找找到一个或多个正则表达式的匹配。
	replace()	在字符串中查找匹配的子串， 并替换与正则表达式匹配的子串。
	search()	查找与正则表达式相匹配的值。
	slice()	提取字符串的片断，并在新的字符串中返回被提取的部分。
	split()	把字符串分割为字符串数组。
	substr()	从起始索引号提取字符串中指定数目的字符。
	substring()	提取字符串中两个指定的索引号之间的字符。
	toLowerCase()	把字符串转换为小写。
	toUpperCase()	把字符串转换为大写。
	trim()	去除字符串两边的空白
	valueOf()	返回某个字符串对象的原始值。
	*/
}