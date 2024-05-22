'use strict'

import { getFilmes, deleteFilme } from "./funcoes.js"

const criarLinha = (filme) => {

    const container = document.createElement('div')
    container.className = "flex justify-between w-full gap-3"

    const id = document.createElement('div')
    id.className = "bg-white w-full h-10 rounded-md font-bold flex items-center justify-center"
    id.textContent = filme.id
    
    const nome = document.createElement('div')
    nome.className = "bg-white w-full h-10 rounded-md font-bold flex items-center justify-center"
    nome.textContent = filme.nome

    const classificacao = document.createElement('div')
    classificacao.className = "bg-white w-full h-10 rounded-md font-bold flex items-center justify-center"
    classificacao.textContent = filme.classificacao_id

    const duracao = document.createElement('div')
    duracao.className = "bg-white w-full h-10 rounded-md font-bold flex items-center justify-center"
    duracao.textContent = filme.duracao

    const valor = document.createElement('div')
    valor.className = "bg-white w-full h-10 rounded-md font-bold flex items-center justify-center"
    valor.textContent = filme.valor_unitario

    const buttonDelete = document.createElement('button');
    buttonDelete.className = "flex items-center justify-center";
    const iconeDelete = document.createElement('img');
    iconeDelete.className = "w-24";
    iconeDelete.src = "../../../img/lixo.png";
    iconeDelete.alt = "";
    buttonDelete.appendChild(iconeDelete)

    buttonDelete.addEventListener('click', async () => {
        await deleteFilme(filme.id) 
        window.location.reload()
    })

    container.replaceChildren(id, nome, classificacao, duracao, valor, buttonDelete)

    return container
}

async function mostrarLinha (){
    const container = document.getElementById('container-filmes')
    const filmes = await getFilmes()

    console.log(filmes)

    container.replaceChildren('')

    filmes.forEach( filme => {
        console.log(filme)
        const linha = criarLinha (filme)
        container.appendChild (linha)
    })
}

mostrarLinha()

mostrarLinha()




const openModalButton = document.getElementById('openModal')
const closeModalButton = document.getElementById('closeModal')
const modal = document.getElementById('modal')
const adicionarFilmeButton = document.getElementById('adicionarFilme')

    openModalButton.addEventListener('click', () => {
        modal.classList.remove('hidden')
    })

    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden')
    })