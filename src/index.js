const clickOne = document.getElementById("btn-codificar");
const clickTwo = document.getElementById("btn-decodificar");

clickOne.addEventListener("click", (event) => {
    event.preventDefault();
    let encodeValue= document.getElementById("codificar").value;
    let encodeKey = parseInt(document.querySelector(".key").value);
    let encodeResult = window.cipher.encode(encodeKey, encodeValue);

    document.getElementById('firstMensenger').innerHTML = encodeResult;
});

clickTwo.addEventListener("click", (event) => {
    event.preventDefault();
    let decodeValue = document.getElementById("decodificar").value;
    let decodeKey = parseInt(document.querySelector(".keyTwo").value);
    let decodeResult = window.cipher.decode(decodeValue, decodeKey);

    document.getElementById('secondMensenger').innerHTML = decodeResult;
});
