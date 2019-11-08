window.cipher = {
    encode: encode,
    decode: decode
};

function encode(offset, str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const stringAscii = str.charCodeAt(i);
        if (stringAscii >= 65 && stringAscii <= 90) {
            result += String.fromCharCode(((stringAscii - 65) + (offset % 26+26)) % 26 + 65);
        } else if (stringAscii >= 97 && stringAscii <= 122) {
            result += String.fromCharCode(((stringAscii - 97) + (offset % 26+26)) % 26 + 97);
        } else{
            result += str[i];
        }
    }
    return result;
}

function decode(str, offset) {
    let resultTwo = "";
    for (let i = 0; i < str.length; i++) {
        const stringAscii = str.charCodeAt(i);
        if (stringAscii >= 65 && stringAscii <= 90) {
         resultTwo += String.fromCharCode(((stringAscii - 90) - (offset % 26+26)) % 26 + 90);
        } else if (stringAscii >= 97 && stringAscii <= 122) {
            resultTwo += String.fromCharCode(((stringAscii - 122) - (offset % 26+26)) % 26 + 122);
        } else {
            resultTwo += str[i];
        }
    }
    return resultTwo;
}

