const hs = document.getElementById("hasil")
function imagePicker() {
    if (hewan.value == "d") {
        return hs.src = "img/domba.png"
    } else if (hewan.value == "f") {
        return hs.src = "img/Flamingo.png"
    } else if (hewan.value == "k") {
        return hs.src = "img/kuda.png"
    } else if (hewan.value == "h") {
        return hs.src = "img/harimau.png"
    } else {
        return hs.src = "img/jerapah.png"
    }
}
function imageConfirmation() {
    alert(hs.src)
}