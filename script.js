/* Controlando quais dados o perfil terá */
const btnIdade = document.getElementById('btn-idade')
const btnEmail = document.getElementById('btn-email')

const spanIdade =  document.getElementById('span-idade')
const spanEmail =  document.getElementById('span-email')

const imagem = document.getElementById('imagem')
const nome = document.getElementById('nome')
const idade = document.getElementById('idade')
const email = document.getElementById('email')

const verificaStatus = (status, btn) => {
    status ? adicionaElemento(btn) : removeElemento(btn)
}

btnIdade.addEventListener('change', () => {
    verificaStatus(btnIdade.checked, spanIdade)
})

btnEmail.addEventListener('change', () => {
    verificaStatus(btnEmail.checked, spanEmail)
})

const adicionaElemento = (elemento) => {
    elemento.classList.remove('removido')
}

const removeElemento = (elemento) => {
    elemento.classList.add('removido')
}

/* Extraindo os dados de um usuário aleátório da API */
async function getData() {
    const idUser = Math.floor(Math.random() * 12) + 1
    const response = await fetch('https://reqres.in/api/users/' + idUser)
    const data = await response.json()
    const user = data.data

    return user
}

const btnGerar = document.getElementById('btn-gerar')

btnGerar.addEventListener('click', () => {
    alteraDados()
})

async function alteraDados() {
    const user = await getData()

    imagem.src = user.avatar
    nome.textContent = user.first_name + ' ' + user.last_name
    idade.textContent = user.id != 4 ? (Math.floor(Math.random() * (30 - 20)) + 20) + ' anos' : 58 + ' anos'
    email.textContent = user.email.replace(/@.+$/, '@gmail.com')
}