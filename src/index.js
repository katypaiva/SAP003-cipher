const clickOne = document.querySelector(".encode-btn");
const clickTwo = document.querySelector(".decode-btn");

clickOne.addEventListener("click", (event) => {
    event.preventDefault();
    const encodeValue= document.querySelector(".encode").value;
    const encodeKey = parseInt(document.querySelector(".key").value);
    const encodeResult = window.cipher.encode(encodeKey, encodeValue);
    document.querySelector('.first-mensenger').innerHTML = encodeResult;
});

clickTwo.addEventListener("click", (event) => {
    event.preventDefault();
    const decodeValue = document.querySelector(".decode").value;
    const decodeKey = parseInt(document.querySelector(".key-two").value);
    const decodeResult = window.cipher.decode(decodeValue, decodeKey);
    document.querySelector('.second-mensenger').innerHTML = decodeResult;
});
