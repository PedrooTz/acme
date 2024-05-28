'use strict'

import { getFilmes, deleteFilme, postFilme } from "./funcoes.js"

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


async function novoFilme(){

const openModalButton = document.getElementById('openModal')
const closeModalButton = document.getElementById('closeModal')
const modal = document.getElementById('modal')


    openModalButton.addEventListener('click', () => {
        modal.classList.remove('hidden')
    })

    document.addEventListener('DOMContentLoaded', () => {
        const titulo = document.getElementById('tituloInput');
        const sinopse = document.getElementById('sinopseInput');
        const duracao = document.getElementById('duracaoInput');
        const dataLancamento = document.getElementById('dataLancamentoInput');
        const dataRelancamento = document.getElementById('dataRelancamentoInput');
        const poster = document.getElementById('fotoCapaInput');
        const valor = document.getElementById('valorInput');
        const cadastrar = document.getElementById('adicionarFilme');
    
        cadastrar.addEventListener('click', async (event) => {
            event.preventDefault(); // Impede o envio do formulário para recarregar a página
    
            const tituloInput = titulo.value;
            const sinopseInput = sinopse.value;
            const duracaoInput = duracao.value;
            const dataLancamentoInput = dataLancamento.value;
            const dataRelancamentoInput = dataRelancamento.value;
            const capaInput = poster.src;
            const valorInput = valor.value;
            const insert = {
                nome: tituloInput,
                sinopse: sinopseInput,
                duracao: duracaoInput,
                data_lancamento: dataLancamentoInput,
                data_relancamento: dataRelancamentoInput,
                valor_unitario: valorInput,
                foto_capa: capaInput,
            };
    
            try {
                
                const sucesso = await postFilme(insert);
                if (sucesso) {
                    alert('Filme adicionado com sucesso!');
                    console.log(insert);
                    window.location.href = '../pages/pages/admFilmes.html'; 
                } else {
                    Error('Erro ao adicionar filme');
                }
            } catch (error) {
                console.error('Erro ao adicionar filme:', error);
                alert('Erro ao adicionar filme. Verifique o console para mais detalhes.');
            }
        });
    
    });
    

    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden')
    })

}

novoFilme();
 