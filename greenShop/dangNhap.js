let tenDangNhap = document.getElementById("tdn");
let koHopLeTenDangNhap = document.getElementById("khltdn");
let nutDangNhap = document.getElementById("btnLogIn");
koHopLeTenDangNhap.style.display = "none";
nutDangNhap.addEventListener("click", function() {
	if (tenDangNhap.value == "") {
		// koHopLeTenDangNhap.style.opacity = 1;
		koHopLeTenDangNhap.style.display = "block";
	} else {
		koHopLeTenDangNhap.style.display = "none";
		// koHopLeTenDangNhap.style.opacity = 0;
	}
});

