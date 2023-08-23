/* Controlando quais dados o perfil terá */
const btnIdade = document.getElementById('btn-idade')
const btnEmail = document.getElementById('btn-email')
const btnHistoria = document.getElementById('btn-historia')

var spanIdade =  document.getElementById('span-idade')
var spanEmail =  document.getElementById('span-email')
var spanHistoria =  document.getElementById('span-historia')

const verificaStatus = (status, btn) => {
    status ? adicionaElemento(btn) : removeElemento(btn)
}

btnIdade.addEventListener('change', () => {
    verificaStatus(btnIdade.checked, spanIdade)
})

btnEmail.addEventListener('change', () => {
    verificaStatus(btnEmail.checked, spanEmail)
})

btnHistoria.addEventListener('change', () => {
    verificaStatus(btnHistoria.checked, spanHistoria)
})

const adicionaElemento = (elemento) => {
    elemento.classList.remove('removido')

    console.log(elemento.checked, 'Adicionado')
}

const removeElemento = (elemento) => {
    elemento.classList.add('removido')
    
    console.log(elemento.checked, 'Removido')
}