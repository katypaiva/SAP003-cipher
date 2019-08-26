function clickOne(event){
    event.preventDefault();
    let encore= document.getElementById("codificar").value;
    let encoreKey = parseInt(document.querySelector(".key").value);
    let teste = window.cipher.encode(encoreKey, encore);

    document.getElementById('firstMensenger').innerHTML = teste;
}

function clickTwo(event){
    event.preventDefault();
    let encore2= document.getElementById("decodificar").value;
    let encoreKey2 = parseInt(document.querySelector(".keyTwo").value);
    let teste2 = window.cipher.decode(encore2, encoreKey2);

    document.getElementById('secondMensenger').innerHTML = teste2;
}

// estudar forçkhbh
//estudar manipulação de string
