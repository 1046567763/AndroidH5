(function($, doc) {
var login = doc.getElementById('login');
var username=doc.getElementById('username');
var paasword=doc.getElementById('password');
var Cookie =null;

login.addEventListener('tap',function(){
	mui.ajax({
		url:"http://47.96.227.241:443/settings/signin/",
		data: {
			username:username.value,
			password:paasword.value
		},
		dataType:'json',
		type:'GET',
		contentType: "json",
		success: function(data) {
			if (data.result === "success") {
				Cookie=data.Cookie;
				localStorage.setItem("Cookie",Cookie);
				// mui.openWindow({url:"../first/first.html"})
				location.replace("../first/first.html");
			} else {
				alert("账号密码错误");
			}
		},
		error: function() {
			alert("链接失败");
		},
	
	});
})

}(mui, document));