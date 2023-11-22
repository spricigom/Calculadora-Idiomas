// "Chamando"
let linguaPortuguesa = document.createElement("script");
linguaPortuguesa.src = "./idiomas/portugues.js";
document.head.appendChild(linguaPortuguesa);

let linguaEspanhola = document.createElement("script");
linguaEspanhola.src = "./idiomas/espanol.js";
document.head.appendChild(linguaEspanhola);

let linguaInglesa = document.createElement("script");
linguaInglesa.src = "./idiomas/ingles.js";
document.head.appendChild(linguaInglesa);

let linguaFrancesa = document.createElement("script");
linguaFrancesa.src = "./idiomas/frances.js";
document.head.appendChild(linguaFrancesa);

let selectedIdioma = document.querySelector("#idioma");
selectedIdioma.addEventListener("change", function(){
    translate(this.value);
})

function translate(idioma){
    let traducao =
    (idioma == "br")? portugues() 
    : (idioma == "es")? espanhol()
    : (idioma == "en")? ingles()
    : (idioma == "fr")? frances()
    : null;
    setLanguage (traducao);
}

function setLanguage(novoIdioma){
    let btSoma = document.querySelector("#btSoma");
    btSoma.value = novoIdioma.soma;
    let btSubtracao = document.querySelector("#btSubtracao");
    btSubtracao.value = novoIdioma.subtracao;
    let btMultiplicacao = document.querySelector("#btMultiplicacao");
    btMultiplicacao.value = novoIdioma.multiplicacao;
    let btDivisao = document.querySelector("#btDivisao"); 
    btDivisao.value = novoIdioma.divisao;
    let title = document.querySelector("#title");
    title.textContent = novoIdioma.titulo;
}