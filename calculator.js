var valor;
var resultado;
function button(num) {
    valor = document.calc.visor.value += num; 

}
function reset() {
    document.calc.visor.value = "";
}

function calcule() {
resultado = eval(valor);
document.calc.visor.value = resultado.toLocaleString('pt-br');
}