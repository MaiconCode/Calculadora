let entrada = document.getElementById('entrada')
let calculo = null

// Adicionar a Tecla
function adicionarTecla(tecla) {

    if(entrada.innerText == '0') {
        entrada.innerHTML = ''
    }
    
    entrada.innerHTML += tecla
}

// Calcular
function calcular() {
    calculo = eval(entrada.innerText)
    entrada.innerHTML = calculo
    console.log(calculo)
}

//Limpar
function limpar() {
    entrada.innerHTML = '0'
}

//Pontenciazar
function pontenciar() {
    entrada.innerHTML = eval(entrada.innerText) * eval(entrada.innerText)
}