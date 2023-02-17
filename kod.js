const newPlayer = document.getElementById("titleYeni");

const textBox = document.getElementById("floatingTextarea");



function buttonClicked() {
    newPlayer.innerHTML = textBox.value;

    textBox.value = "";
    textBox.placeholder = "yeni bir isim giriniz..."
}
