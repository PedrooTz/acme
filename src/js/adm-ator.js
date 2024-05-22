'use strict'

import { getAtores, deleteAtor } from "./funcoes.js"

const criarLinha = (ator) => {

    const container = document.createElement('div')
    container.className = "flex justify-between w-full gap-3"

    const id = document.createElement('div')
    id.className = "bg-white w-full h-10 rounded-md font-bold flex items-center justify-center"
    id.textContent = ator.id
    
    const nome = document.createElement('div')
    nome.className = "bg-white w-full h-10 rounded-md font-bold flex items-center justify-center"
    nome.textContent = ator.nome

    const dataNascimento = document.createElement('div')
    dataNascimento.className = "bg-white w-full h-10 rounded-md font-bold flex items-center justify-center"
    dataNascimento.textContent = ator.data_nascimento

    const sexo = document.createElement('div')
    sexo.className = "bg-white w-full h-10 rounded-md font-bold flex items-center justify-center"
    sexo.textContent = ator.sexo[0].nome
    
    const nacionalidade = document.createElement('div')
    nacionalidade.className = "bg-white w-full h-10 rounded-md font-bold flex items-center justify-center"
    if (ator.hasOwnProperty('nacionalidade')) {
        console.log(ator.nacionalidade)
        nacionalidade.textContent = ator.nacionalidade[0].nome
    }else{
        nacionalidade.textContent = ''
    }
    
    const buttonDelete = document.createElement('button');
    buttonDelete.className = "flex items-center justify-center";
    const iconeDelete = document.createElement('img');
    iconeDelete.className = "w-24";
    iconeDelete.src = "../../../img/lixo.png";
    iconeDelete.alt = "";
    buttonDelete.appendChild(iconeDelete)

    buttonDelete.addEventListener('click', async () => {
        await deleteAtor(ator.id) 
        window.location.reload()
    })
    
    container.replaceChildren(id, nome, dataNascimento, sexo, nacionalidade, buttonDelete)


    return container
}

async function mostrarLinha (){

    const container = document.getElementById('container-atores')
    const atores = await getAtores()

    container.replaceChildren('')

    atores.forEach( ator => {
    
        const linha = criarLinha (ator)
        container.appendChild (linha)
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