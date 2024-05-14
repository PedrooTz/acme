'use strict'

import { getDiretores } from "./funcoes.js"

const id             = document.getElementById('id')
const nomeDiretor       = document.getElementById('nome')
const dataNascimento = document.getElementById('data-nascimento')
const sexo           = document.getElementById('sexo')
const nacionalidade  = document.getElementById('nacionalidade')

const criarLinha = (diretor) => {

    id.textContent = diretor.id
    nomeDiretor.textContent = diretor.nome
    dataNascimento.textContent = diretor.data_nascimento
    sexo.textContent = diretor.sexo_id
    nacionalidade.textContent = diretor.nacionalidade
   
}

async function mostrarLinha (){
    const container = document.getElementById('container')
    const diretor = await getDiretores()



    diretor.forEach( diretor => {
        const linha = criarLinha (diretor)
        container.appendChild(linha)
    })
}

mostrarLinha()

const openModalButton = document.getElementById('openModal')
const closeModalButton = document.getElementById('closeModal')
const modal = document.getElementById('modal')
const adicionarAtorButton = document.getElementById('adicionarAtor')

openModalButton.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden')
})

adicionarAtorButton.addEventListener('click', () => {
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