function dangKy(){
    let ten = document.getElementById("hoten");
    let pword = document.getElementById("matkhau");
    localStorage.setItem("hoten", ten.value);
    localStorage.setItem("matkhau", pword.value);
    window.open("../html/dangnhap.html");
}