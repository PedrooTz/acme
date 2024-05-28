'use strict'

import { getFilmes, deleteFilme, postFilme, putFilme } from "./funcoes.js"

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
    classificacao.textContent = filme.tbl_classificacao_id

    const duracao = document.createElement('div')
    duracao.className = "bg-white w-full h-10 rounded-md font-bold flex items-center justify-center"
    duracao.textContent = filme.duracao

    const valor = document.createElement('div')
    valor.className = "bg-white w-full h-10 rounded-md font-bold flex items-center justify-center"
    valor.textContent = filme.valor_unitario

    const buttonUpdate = document.createElement('button')
    buttonUpdate.className = "flex items-center justify-center"
    const iconeUpdate = document.createElement('img')
    iconeUpdate.className = "w-24"
    iconeUpdate.src = "../../../img/editar.png"
    iconeUpdate.alt = ""
    buttonUpdate.appendChild(iconeUpdate)

    buttonUpdate.addEventListener('click', async () => {
        await abrirModalEdicao(filme.id)
    })

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




    container.replaceChildren(buttonUpdate ,id, nome, classificacao, duracao, valor, buttonDelete)

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


    openModalButton.addEventListener('click', () => {
        modal.classList.remove('hidden')
    })

       /***********************************************/ 
        // INSERIR FILME
        /***********************************************/
    document.getElementById('adicionarFilme').addEventListener('click', async () => {
        const nome = document.getElementById('tituloInput')
        const sinopse = document.getElementById('sinopseInput')
        const duracao = document.getElementById('duracaoInput')
        const lancamento = document.getElementById('dataLancamentoInput')
        const relancamento = document.getElementById('dataRelancamentoInput')
        const foto = document.getElementById('fotoCapaInput')
        const valor = document.getElementById('valorInput')
        const classificacao = document.getElementById('classificacaoInput')
        const genero = document.getElementById('generoInput')
        const ator = document.getElementById('atorInput')
        const addFilme = document.getElementById('adicionarFilme')

    
        addFilme.addEventListener('click', async (event) => {
            event.preventDefault(); // Impede o envio do formulário para recarregar a página
    
            const tituloInput = nome.value;
            const sinopseInput = sinopse.value;
            const duracaoInput = duracao.value;
            const dataLancamentoInput = lancamento.value;
            const dataRelancamentoInput = relancamento.value;
            const fotoInput = foto.value;
            const valorInput = valor.value;
            const classificacaoInput = classificacao.value;
            const generoInput = genero.value;
            const atorInput = ator.value;
            const insert = {
                nome: tituloInput,
                sinopse: sinopseInput,
                duracao: duracaoInput,
                data_lancamento: dataLancamentoInput,
                data_relancamento: dataRelancamentoInput,
                foto_capa: fotoInput,
                valor_unitario: valorInput,
                tbl_classificacao_id: classificacaoInput,
                tbl_genero_id: generoInput,
                tbl_ator_filme_id: atorInput

            };

    
        try {
            const sucesso = await postFilme(insert)
            if (sucesso) {
                console.error('Filme adicionado com sucesso!')
                document.getElementById('modal').classList.add('hidden')
                mostrarLinha()
            } else {
                console.error('Falha ao adicionar o Filme. Por favor, tente novamente.')
            }
        } catch (error) {
            console.error('Erro ao adicionar Filme:', error)
        }
    })
    

    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden')
    })

    })

      
 /*******************************************************************************************************/ 
 /*******************************************************************************************************/ 
 /*******************************************************************************************************/ 


 const openModalEditarButton = document.getElementById('atualizarFilme')
 const closeModalEditarButton = document.getElementById('cancelarEdicao')
 const modalEditar = document.getElementById('modalEditar')



        /***********************************************/ 
        // ATUALIZAR FILME
        /***********************************************/ 
        function abrirModalEdicao(filme) {
            const nome = document.getElementById('tituloInput2')
            const sinopse = document.getElementById('sinopseInput2')
            const duracao = document.getElementById('duracaoInput2')
            const lancamento = document.getElementById('dataLancamentoInput2')
            const relancamento = document.getElementById('dataRelancamentoInput2')
            const foto = document.getElementById('fotoCapaInput2')
            const valor = document.getElementById('valorInput2')
            const classificacao = document.getElementById('classificacaoInput2')
            const genero = document.getElementById('generoInput2')
            const ator = document.getElementById('atorInput2')
            const addFilme = document.getElementById('atualizarFilme')

            modalEditar.classList.remove('hidden')
    
        
            addFilme.addEventListener('click', async (event) => {
                event.preventDefault(); // Impede o envio do formulário para recarregar a página
        
                const tituloInput = nome.value;
                const sinopseInput = sinopse.value;
                const duracaoInput = duracao.value;
                const dataLancamentoInput = lancamento.value;
                const dataRelancamentoInput = relancamento.value;
                const fotoInput = foto.value;
                const valorInput = valor.value;
                const classificacaoInput = classificacao.value;
                const generoInput = genero.value;
                const atorInput = ator.value;
                const insert = {
                    nome: tituloInput,
                    sinopse: sinopseInput,
                    duracao: duracaoInput,
                    data_lancamento: dataLancamentoInput,
                    data_relancamento: dataRelancamentoInput,
                    foto_capa: fotoInput,
                    valor_unitario: valorInput,
                    tbl_classificacao_id: classificacaoInput,
                    tbl_genero_id: generoInput,
                    tbl_ator_filme_id: atorInput
    
                };
                
                try {
                    const sucesso = await putFilme(filme, insert)
                    if (sucesso) {
                        console.log('Filme atualizado com sucesso!!')
                        modalEditar.classList.add('hidden');
                        mostrarLinha()
                    } else {
                        console.error('Falha ao atualizar o Filme!!')
                    }
                } catch (error) {
                    console.error('Erro ao atualizar Filme:', error)
                }
            })
        }

        openModalEditarButton.addEventListener('click', () => {
            modalEditar.classList.remove('hidden')
        })
        
        closeModalEditarButton.addEventListener('click', () => {
            modalEditar.classList.add('hidden')
        })

        
     
    