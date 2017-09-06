function login() {
   window.location.href="https://cas.51play.com/login.do?template=passportLogin&service=" + location;
}
function logout() {
   window.location.href="https://cas.51play.com/logout.do?service=" + location;
}

$(function() {
	var userInfopath = "https://cas.51play.com/info.do?time=1351023405042";
	$.getJSON(userInfopath + "&jsoncallback=?", function(v) {
		if (v.state == "ok") {
			$("#userDiv").html(v.userId);
			$("#topLoginId").html($("#userOnline").html());
		}
	});
})