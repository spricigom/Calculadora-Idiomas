let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

let btSoma = document.querySelector("#btSoma");
btSoma.addEventListener("click", function(){
    somar(Number(valor1.value),Number(valor2.value));
})
function somar(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma;
}

let btSubtracao = document.querySelector("#btSubtracao");
btSubtracao.addEventListener("click", function(){
    subtrair(Number(valor1.value),Number(valor2.value));
})
function subtrair(a, b) {
    let subtracao = a - b;
    resultado.innerHTML = subtracao;
}

let btMultiplicacao = document.querySelector("#btMultiplicacao");
btMultiplicacao.addEventListener("click", function(){
    multiplicar(Number(valor1.value),Number(valor2.value));
})
function multiplicar(a, b) {
    let multiplica = a * b;
    resultado.innerHTML = multiplica;
}

let btDivisao = document.querySelector("#btDivisao ");
btDivisao .addEventListener("click", function(){
    dividir(Number(valor1.value),Number(valor2.value));
})
function dividir(a, b) {
    let divide = a / b;
    resultado.innerHTML = divide;
}

let title = document.querySelector("#title");

let selectedLanguage = document.querySelector("#idioma");
selectedLanguage.addEventListener("change", function(){
    if(this.value == "br"){
        btSoma.value = "Soma";
        btSubtracao.value = "Subtração";
        btMultiplicacao.value = "Multiplicação";
        btDivisao.value = "Divisão";
        title.textContent = "Calculadora"
    }
    else if (this.value == "en"){
        btSoma.value = "Sum";
        btSubtracao.value = "Subtraction";
        btMultiplicacao.value = "Multiplication";
        btDivisao.value = "Division";
        title.textContent = "Calculator"
    }
    else if (this.value == "es"){
        btSoma.value = "Suma";
        btSubtracao.value = "Sustracción";
        btMultiplicacao.value = "Multiplicación";
        btDivisao.value = "División";
        title.textContent = "Calculadora"
    }
})