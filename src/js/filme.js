import {getFilmes} from "./funcoes.js"

//Criar card da page inicial.

const criarCard = (filme) => {
    const card = document.createElement('div')
    card.className =  'flex items-center justify-center gap-2'

    card.innerHTML = `
        <a class="flex items-center justify-center flex-col" href="../pages/filme.html">
            <div class="w-40 h-56 flex items-center justify-center">
                <img class="w-[120px]" src="${filme.foto_capa}" alt="">
            </div>
        </a>
    `

    card.addEventListener('click', () => {
        localStorage.setItem('filmeId', filme.id)
    })
    return card
}

async function mostrarCard (){
    const cardContainer = document.getElementById('card-container')
    const filme = await getFilmes()

    console.log(filme)


    filme.forEach( filme => {
        const card = criarCard (filme)
        cardContainer.appendChild(card)
    })
}

mostrarCard()




