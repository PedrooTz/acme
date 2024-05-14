'use strict'

import { getGeneros } from "./funcoes.js"

const id          = document.getElementById('id')
const nomeGenero  = document.getElementById('nome')

const criarLinha = (genero) => {

    id.textContent = genero.id
    nomeGenero.textContent = genero.nome
   
}

async function mostrarLinha (){
    const container = document.getElementById('container')
    const genero = await getGeneros()

    console.log(genero)


    genero.forEach( genero => {
        const linha = criarLinha (genero)

    })
}

mostrarLinha()


const openModalButton = document.getElementById('openModal')
const closeModalButton = document.getElementById('closeModal')
        
const modal = document.getElementById('modal')
const adicionarGeneroButton = document.getElementById('adicionarGenero')

        openModalButton.addEventListener('click', () => {
            modal.classList.remove('hidden')
        })

        closeModalButton.addEventListener('click', () => {
            modal.classList.add('hidden')
        })

        adicionarGeneroButton.addEventListener('click', () => {
            const nomeGenero = document.getElementById('nomeInput').value
            
            console.log(nomeGenero)
            modal.classList.add('hidden')
        })