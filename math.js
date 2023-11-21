//Puxando valores e resultados
let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");
//Soma
let btSoma = document.querySelector("#btSoma");
btSoma.addEventListener("click", function(){
    somar(Number(valor1.value),Number(valor2.value));
})
function somar(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma;
}
//Subtração
let btSubtracao = document.querySelector("#btSubtracao");
btSubtracao.addEventListener("click", function(){
    subtrair(Number(valor1.value),Number(valor2.value));
})
function subtrair(a, b) {
    let subtracao = a - b;
    resultado.innerHTML = subtracao;
}
//Multiplicação
let btMultiplicacao = document.querySelector("#btMultiplicacao");
btMultiplicacao.addEventListener("click", function(){
    multiplicar(Number(valor1.value),Number(valor2.value));
})
function multiplicar(a, b) {
    let multiplica = a * b;
    resultado.innerHTML = multiplica;
}
//Divisão
let btDivisao = document.querySelector("#btDivisao ");
btDivisao .addEventListener("click", function(){
    dividir(Number(valor1.value),Number(valor2.value));
})
function dividir(a, b) {
    let divide = a / b;
    resultado.innerHTML = divide;
}