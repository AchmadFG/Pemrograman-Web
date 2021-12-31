function login(e) {
    e.preventDefault()
    const nama = document.getElementById("username").value
    const pass = document.getElementById("pass").value
    if (nama == "ahmad2017" && pass == "integrity") {
        alert("Login Berhasil")
        location.href = "sukses.html"
    } else {
        alert("Login Tidak Berhasil")
        window.location.reload()
    }
}