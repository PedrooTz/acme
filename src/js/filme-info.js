'use strict'

import {getFilme} from "./funcoes.js"

const filmeId = localStorage.getItem('filmeId')

const filmeImg      = document.getElementById('filme-img')
const filmeNome     = document.getElementById('filme-nome')
const filmeInfo     = document.getElementById('filme-info')
const filmeSinopse  = document.getElementById('filme-sinopse')
const filmeValor    = document.getElementById('filme-valor')

const montarCard = (filme) => {
    filmeImg.src = filme.foto_capa
    filmeNome.textContent = filme.nome

    let filmeInfoTexto = `${filme.data_lancamento.split('-')[0]} | ${filme.duracao}`
    // console.log(filme);
    if(filme.genero){
        filmeInfo.textContent = `${filmeInfoTexto} | ${filme.genero[0].nome}`
    }else{
        filmeInfo.textContent = filmeInfoTexto
    }

    filmeSinopse.textContent = filme.sinopse
    filmeValor.textContent = filme.valor_unitario
}

window.addEventListener('load', async() => {
    const filme = await getFilme(filmeId)
    montarCard(filme)
})
