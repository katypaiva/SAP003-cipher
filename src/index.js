const clickOne = document.querySelector(".encode-btn");
const clickTwo = document.querySelector(".decode-btn");

clickOne.addEventListener("click", (event) => {
    event.preventDefault();
    let encodeValue= document.querySelector(".encode").value;
    let encodeKey = parseInt(document.querySelector(".key").value);
    let encodeResult = window.cipher.encode(encodeKey, encodeValue);
    document.querySelector('.first-mensenger').innerHTML = encodeResult;
});

clickTwo.addEventListener("click", (event) => {
    event.preventDefault();
    let decodeValue = document.querySelector(".decode").value;
    let decodeKey = parseInt(document.querySelector(".key-two").value);
    let decodeResult = window.cipher.decode(decodeValue, decodeKey);
    document.querySelector('.second-mensenger').innerHTML = decodeResult;
});
