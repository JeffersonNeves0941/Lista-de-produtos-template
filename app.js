'use strict'

import produtos from "./produtos.json" with {type: "json"}

function classificarProduto(numero) {
    let estrelaCheia = numero
    let estralaVazia = 5 - numero

    for(igual = 5;)
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
    
    const classificacao = document.createElement('h6')
    classificacao.textContent =  


    card.append(foto, nome, descricao, preco, categoria)



    return card


}

const cards = produtos.map(criarCard)

document.getElementById('container').replaceChildren(...cards)
