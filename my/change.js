(function($, doc) {
var login = doc.getElementById('login');
var name=doc.getElementById('name');
var mobile=doc.getElementById('mobile');
var address=doc.getElementById('address');
var allname=doc.getElementById('allname');

login.addEventListener('tap',function(){
	mui.ajax({
		url:"http://47.96.227.241:443/person/person_change/",
		headers: {
			token: localStorage.getItem("Cookie")
		},
		data: {
			name:name.value,
			mobile:mobile.value,
			address:address.value,
			allName:allname.value,
		},
		dataType:'json',
		type:'GET',
		contentType: "json",
		success: function(data) {
			alert("修改成功");
			// location.reload("my.html");
			mui.openWindow("my.html")
		},
	});
})
}(mui, document));