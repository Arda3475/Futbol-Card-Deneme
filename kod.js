const newPlayer = document.getElementById("titleYeni");

const textBox = document.getElementById("floatingTextarea");
const textPhotoBox = document.getElementById("fotoArea");
const img3 = document.getElementById("img3");

function buttonClicked() {
    newPlayer.innerHTML = textBox.value;

    textBox.value = "";
    textBox.placeholder = "yeni bir isim giriniz..."
}

function PhotoButtonClicked() {
    img3.src = textPhotoBox.value;
}