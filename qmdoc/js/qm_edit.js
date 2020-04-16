var app = new Vue({
	el: '#app',
	data: {
		title: '品管文件发行',
	},
	methods: {
		goback: function () {
			window.location.href = './qm_list.html';
		},
		// 打开模态框
		openMyModal: function () {
			var myModal = document.querySelector("#myModal");
			myModal.style.display = 'block';
		},
	},
	created: function () {
		
	}
});

/* 模态框功能 */
window.onload = function () {
	var myModal = document.querySelector("#myModal");
	var closeSpan = document.querySelectorAll(".close")[0];
	
	function closeSpanClick () {
		myModal.style.display = 'none';
	}
	
	function windowClick (e) {
		if (e.target == myModal) {
			myModal.style.display = 'none';
		}
	}
	
	closeSpan.addEventListener("click", closeSpanClick);
	window.addEventListener("click", windowClick);
} 