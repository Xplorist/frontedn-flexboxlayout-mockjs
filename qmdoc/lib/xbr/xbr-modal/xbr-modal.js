/* 只是作为页面中的js的模板示例，此设计不适合作为js插件，不具有通用性，需要以后进一步进行插件化 */
window.onload = function () {
	var myModal = document.querySelector("#myModal");
	var myBtn = document.querySelector("#myBtn");
	var closeSpan = document.querySelectorAll(".close")[0];
	//var closeSpan = closeSpans[0];
	
	function myBtnClick () {
		myModal.style.display = 'block';
	}
	
	function closeSpanClick () {
		myModal.style.display = 'none';
	}
	
	function windowClick (e) {
		if (e.target == myModal) {
			myModal.style.display = 'none';
		}
	}
	
	myBtn.addEventListener("click", myBtnClick);
	closeSpan.addEventListener("click", closeSpanClick);
	window.addEventListener("click", windowClick);
}