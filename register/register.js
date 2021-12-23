(function($, doc) {
var register = doc.getElementById('register');
var username=doc.getElementById('username');
var paasword=doc.getElementById('password');
var paasword_confirm=doc.getElementById('password_confirm');

register.addEventListener('tap',function(){
	mui.ajax({
		url:"http://47.96.227.241:443/settings/register/",
		data: {
			username:username.value,
			password:paasword.value,
			password_confirm:paasword_confirm.value,
		},
		dataType:'json',
		type:'GET',
		contentType: "json",
		success: function(data) {
			if (data.result === "success") {
				mui.openWindow({url:"../login/login.html"})
			} else {
				alert("账号已被注册\n两次密码不一致");
			}
		},
		error: function() {
			alert("链接失败");
		},
	
	});
})
}(mui, document));