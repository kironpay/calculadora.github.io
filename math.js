// math.js
function mostrarResultado(resultado) {
    document.getElementById('resultado').value = resultado;
}

function suma() {
    let parametro1 = parseFloat(document.getElementById('parametro1').value);
    let parametro2 = parseFloat(document.getElementById('parametro2').value);
    mostrarResultado(parametro1 + parametro2);
}

function resta() {
    let parametro1 = parseFloat(document.getElementById('parametro1').value);
    let parametro2 = parseFloat(document.getElementById('parametro2').value);
    mostrarResultado(parametro1 - parametro2);
}

function multiplicacion() {
    let parametro1 = parseFloat(document.getElementById('parametro1').value);
    let parametro2 = parseFloat(document.getElementById('parametro2').value);
    mostrarResultado(parametro1 * parametro2);
}

function division() {
    let parametro1 = parseFloat(document.getElementById('parametro1').value);
    let parametro2 = parseFloat(document.getElementById('parametro2').value);
    mostrarResultado(parametro2 != 0 ? parametro1 / parametro2 : 'Error');
}

function potencia() {
    let parametro1 = parseFloat(document.getElementById('parametro1').value);
    let parametro2 = parseFloat(document.getElementById('parametro2').value);
    mostrarResultado(Math.pow(parametro1, parametro2));
}

function raiz() {
    let parametro1 = parseFloat(document.getElementById('parametro1').value);
    mostrarResultado(Math.sqrt(parametro1));
}

function valorAbsoluto() {
    let parametro1 = parseFloat(document.getElementById('parametro1').value);
    let parametro2 = parseFloat(document.getElementById('parametro2').value);
    mostrarResultado(Math.abs(Math.max(parametro1,parametro2)));
}

function redonpiso() {
    let resultado = parseFloat(document.getElementById('resultado').value);
    mostrarResultado(Math.floor(resultado));
}

function redonround() {
    let resultado = parseFloat(document.getElementById('resultado').value);
    mostrarResultado(Math.round(resultado));
}

function redonceil() {
    let resultado = parseFloat(document.getElementById('resultado').value);
    mostrarResultado(Math.ceil(resultado));
}

function random() {
    let parametro1 = parseFloat(document.getElementById('parametro1').value);
    let parametro2 = parseFloat(document.getElementById('parametro2').value);
    mostrarResultado(Math.round(Math.random() * (parametro2 - parametro1) + parametro1));
}
