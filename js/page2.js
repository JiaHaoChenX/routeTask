function copy() {
	var copyContent = document.getElementById("copyContent");
	// 选择对象
	copyContent.select();
	// 执行浏览器复制命令
	document.execCommand("Copy");
	alert("复制成功");
}