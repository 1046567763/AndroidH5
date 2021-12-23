var jump_discover = document.getElementById('jump_discover');
var jump_first = document.getElementById('jump_first');
var jump_my = document.getElementById('jump_my');
var change = document.getElementById('change');
var logout = document.getElementById('logout');
var login1 = document.getElementById('login1');
var storage = window.localStorage;

// 页面跳转
jump_discover.addEventListener('tap', function() {
	location.replace("../discover/discover_yz.html");
});
jump_first.addEventListener('tap', function() {
	location.replace("../first/first.html");
});
jump_my.addEventListener('tap', function() {
	location.replace("../my/my.html");
});
change.addEventListener('tap',function(){
	mui.openWindow("change.html")
})

login1.addEventListener('tap', function() {
	mui.ajax({
		url: "http://47.96.227.241:443/person/judge_login/",
		headers: {
			token: localStorage.getItem("Cookie")
		},
		dataType: 'json',
		type: 'GET',
		contentType: "json",
		success: function(res) {
			if (res.result === "yes") {
				alert("你已经登录\n改不了头像");
				location.reload();
			} else {
				// mui.openWindow("../login/login.html");
				location.replace("../login/login.html");
			}
		}
	})
});

logout.addEventListener('tap', function() {
	mui.ajax({
		url: "http://47.96.227.241:443/settings/signout/",
		headers: {
			token: localStorage.getItem("Cookie")
		},
		dataType: 'json',
		type: 'GET',
		contentType: "json",
		success: function(data) {
			alert("退出成功");
			location.reload();
			storage.clear();
		}
	})
})
// 上拉下拉刷新组件
mui.init({
	swipeBack: true, //右滑关闭
	pullRefresh: {
		container: '#refreshContainer',
		down: {
			style: 'circle', //必选，下拉刷新样式，目前支持原生5+ ‘circle’ 样式
			color: '#2BD009', //可选，默认“#2BD009” 下拉刷新控件颜色
			height: '50px', //可选,默认50px.下拉刷新控件的高度,
			range: '100px', //可选 默认100px,控件可下拉拖拽的范围
			offset: '0px', //可选 默认0px,下拉刷新控件的起始位置
			auto: true, //可选,默认false.首次加载自动上拉刷新一次
			callback: pullfresh,
		},
	}
})

function pullfresh() {
	mui.ajax({
		url: "http://47.96.227.241:443/person/person/",
		headers: {
			token: localStorage.getItem("Cookie")
		},
		dataType: 'json',
		type: 'GET',
		contentType: "json",
		success: function(res) {
			console.log(res)
			localStorage.setItem("name", res.name);
			localStorage.setItem("mobile", res.mobile);
			localStorage.setItem("address", res.address);
			localStorage.setItem("allname", res.allName);
			localStorage.setItem("username", res.username);
			localStorage.setItem("city", res.city);
		},
	});
	document.getElementById("name").innerHTML = localStorage.getItem("name");
	document.getElementById("mobile").innerHTML = localStorage.getItem("mobile");
	document.getElementById("address").innerHTML = localStorage.getItem("address");
	document.getElementById("allname").innerHTML = localStorage.getItem("allname");
	document.getElementById("username").innerHTML = localStorage.getItem("username");
	document.getElementById("city").innerHTML = localStorage.getItem("city");
	mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
}
