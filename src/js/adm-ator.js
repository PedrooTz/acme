'use strict'

import { getAtores } from "./funcoes.js"

const id             = document.getElementById('id')
const nomeAtor       = document.getElementById('nome')
const dataNascimento = document.getElementById('data-nascimento')
const sexo           = document.getElementById('sexo')
const nacionalidade  = document.getElementById('nacionalidade')

const criarLinha = (ator) => {

    id.textContent = ator.id
    nomeAtor.textContent = ator.nome
    dataNascimento.textContent = ator.data_nascimento
    sexo.textContent = ator.sexo_id
    nacionalidade.textContent = ator.nacionalidade
   
}

async function mostrarLinha (){
    const container = document.getElementById('container')
    const ator = await getAtores()

    console.log(ator)


    ator.forEach( ator => {
        const linha = criarLinha (ator)
        container.appendChild(linha)
    })
}

mostrarLinha()

const openModalButton = document.getElementById('openModal')
const closeModalButton = document.getElementById('closeModal')
const modal = document.getElementById('modal')
const adicionarDiretorButton = document.getElementById('adicionarDiretor')

openModalButton.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden')
})

adicionarDiretorButton.addEventListener('click', () => {
    const nome = document.getElementById('nomeInput').value
    const dataNascimento = document.getElementById('dataNascimentoInput').value
    const dataFalecimento = document.getElementById('dataFalecimentoInput').value
    const foto = document.getElementById('fotoInput').files[0] 
    const biografia = document.getElementById('biografiaInput').value
    const sexo = document.getElementById('sexoInput').value
            const nacionalidade = document.getElementById('nacionalidadeInput').value

    console.log(nome, dataNascimento, dataFalecimento, foto, biografia, sexo, nacionalidade)
    modal.classList.add('hidden')
})