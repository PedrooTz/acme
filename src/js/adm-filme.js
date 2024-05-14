'use strict'

import { getFilmes, deleteFilme } from "./funcoes.js"

    // const filmeId = localStorage.getItem('filmeId')
    // const listaFilme = await getFilmes()

    const id            = document.getElementById('id')
    const filmeTitulo   = document.getElementById('titulo')
    // const genero     = document.getElementById('genero')
    // const ator       = document.getElementById('ator')
    // const diretor    = document.getElementById('diretor')
    const classificacao = document.getElementById('classificacao')
    const duracao       = document.getElementById('duracao')
    const valor         = document.getElementById('valor')
    const iconeDelete   = document.getElementById('delete')
    iconeDelete.addEventListener('click', ()=>{
        deleteFilme(filme.id)
        window.location.reload()
    })
    const iconeEditar   = document.getElementById('update')

    // const listaFilme = await getFilmes()
    // const container = document.getElementById('container')

const criarLinha = (filme) => {

    id.textContent = filme.id
    filmeTitulo.textContent = filme.nome
    classificacao.textContent = filme.classificacao_id
    duracao.textContent = filme.duracao
    valor.textContent = filme.valor_unitario
   
}

async function mostrarLinha (){
    const container = document.getElementById('container')
    const filme = await getFilmes()

    console.log(filme)


    filme.forEach( filme => {
        const linha = criarLinha (filme)
        container.appendChild(linha)
    })
}

mostrarLinha()


// Função que faz a mesma coisa que a função mostrar linha.
    // listaFilme.forEach(filme => {

    //     console.log(filme)
    //     criarLinha(filme)
    // })

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

// adicionarFilmeButton.addEventListener('click', () => {
//     const titulo = document.getElementById('tituloInput').value
//     const sinopse = document.getElementById('sinopseInput').value
//     const duracao = document.getElementById('duracaoInput').value
//     const dataLancamento = document.getElementById('dataLancamentoInput').value
//     const dataRelancamento = document.getElementById('dataRelancamentoInput').value
//     const fotoCapa = document.getElementById('fotoCapaInput').files[0]
//     const valor = document.getElementById('valorInput').value

//     console.log(titulo, sinopse, duracao, dataLancamento, dataRelancamento, fotoCapa, valor)
//     modal.classList.add('hidden')
// })



