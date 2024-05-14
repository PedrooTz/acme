//Filmes
export async function getFilmes() {

    const url = `http://localhost:8080/v2/acmefilmes/filmes` 
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes    
}

export async function getFilme(id) {
    const url = `http://localhost:8080/v2/acmefilmes/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filme[0]
}

export async function deleteFilme(id) {
    const url = `http://localhost:8080/v2/acmefilmes/filme/${id}`
    const options={
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}

//Gêneros

export async function getGeneros() {

    const url = `http://localhost:8080/v2/acmefilmes/generos` 
    const response = await fetch(url)
    const data = await response.json()
    return data.generos
}

export async function getGenero(id) {
    const url = `http://localhost:8080/v2/acmefilmes/genero/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.genero[0]
}

export async function deleteGenero(id) {
    const url = `http://localhost:8080/v2/acmefilmes/genero/${id}`
    const options={
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}

//Atores

export async function getAtores() {

    const url = `http://localhost:8080/v2/acmefilmes/atores` 
    const response = await fetch(url)
    const data = await response.json()
    return data.atores
}

export async function getAtor(id) {
    const url = `http://localhost:8080/v2/acmefilmes/ator/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.ator[0]
}

export async function deleteAtor(id) {
    const url = `http://localhost:8080/v2/acmefilmes/ator/${id}`
    const options={
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}

//Diretores

export async function getDiretores() {

    const url = `http://localhost:8080/v2/acmefilmes/diretores` 
    const response = await fetch(url)
    const data = await response.json()
    return data.diretores
}

export async function getDiretor(id) {
    const url = `http://localhost:8080/v2/acmefilmes/diretor/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.diretor[0]
}

export async function deleteDiretor(id) {
    const url = `http://localhost:8080/v2/acmefilmes/diretor/${id}`
    const options={
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}