'use strict'

import {produtos} from "./produtos.js"

function definirAvaliacao(avaliacao) {
    let fullStars = avaliacao
    let emptyStars = 5 - avaliacao
    let stars = ''

    for (fullStars; fullStars > 0; fullStars--)
        stars += '★'

    for (emptyStars; emptyStars > 0; emptyStars--)
        stars += '☆'

    return stars
}



function criarCard(produto) {
    const card = document.createElement('div')
    card.className = 'card'

    const foto = document.createElement('img')
    foto.src = `./img/${produto.imagem}`

    const nome = document.createElement('h3')
    nome.textContent = produto.nome

    const descricao = document.createElement('p')
    descricao.textContent = produto.descricao

    const preco = document.createElement('h4')
    preco.textContent = produto.preco

    const categoria = document.createElement('h5')
    categoria.textContent = produto.categoria

    const avaliacao = document.createElement('h6')
    avaliacao.textContent = definirAvaliacao(produto.classificacao)


    card.append(foto, nome, descricao, preco, categoria, avaliacao)



    return card


}

const cards = produtos.map(criarCard)

document.getElementById('container').replaceChildren(...cards)
