//监听值的变化
var obj = {
	name: '张三'
}
obj = new Proxy({}, {
	//依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。
	get: function(target, key, receiver) {
		console.log("改变了：" + key);
	},
	//目标对象、属性名、属性值和Proxy 实例本身，其中最后一个参数可选。
	set: function(target, key, value, receiver) {
		console.log(target);
		alert("改变了" + key + "的值：" + value);
		console.log("改变了" + key + "的值：" + value);
	}
});

function updateName() {
	obj.name = document.getElementById("name").value
}