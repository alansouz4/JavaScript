// function botao direciona pra um link
function redirecionar(){
    // em outra página
    window.open("https://github.com/alansouz4/JavaScript");

    // na mesma página
    window.location.href = "https://github.com/alansouz4/JavaScript";
}



// passe o mouse para mostrar a ação
function trocar(elemento){
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    // alert("Trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse";
}

// volta a ação
function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";

}

// pagina carregada
function load(){
    alert("Página Carregada!")
}

function funcaoChange(elemento){
    alert(elemento.value)
}

// function botao
function clicou(){
    document.getElementById("dispara").innerHTML = "Olá"
}



// function
/* 
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão", "Japão", "Brasil"))


function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else {
        validar = false;
    }
    return validar;
};

var idade = prompt("Qual sua idade: ");
alert(validaIdade(idade))
*/



// date
/* 
var d = new Date()
//mes
alert(d.getMonth()+1);
// minutos
alert(d.getMinutes());
// dia
alert(d.getDay());
// horas
alert(d.getHours());
*/

// laço for:
/* for(let count = 0; count <= 5; count++){
    console.log(count)

}
*/



// laço while:
/* 
var count = 0;

while(count <= 5){
    alert(count)
    count++
};
*/



// object:
/* 
var frutas = [{nome:"maçã", cor:"vermelho"}, {nome:"abacate", cor:"verde"}]
console.log(frutas[0])
console.log(frutas[1].cor)
console.log(frutas[0].cor)

var fruta = {nome:"abacaxi", cor:"amarelo"};
console.log(fruta.nome);
alert(fruta.cor)
*/




// array:
/*
 var lista = ["Uva", "Maçã", "Laranja"];
 alert(lista[2]);
 lista.push("Melancia")
 lista.pop()
 console.log(lista[1]);
 console.log(lista.toString());
 console.log(lista.join(" "));
*/