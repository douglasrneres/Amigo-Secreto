// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let nomeAmigo = document.getElementById('amigo').value;

    // Validar a entrada
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Atualizar o array de amigos
    amigos.push(nomeAmigo);

    // Limpar o campo de entrada
    document.getElementById('amigo').value = '';

    // Atualizar a lista de amigos na página
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    // Obter o elemento da lista
    let listaAmigos = document.getElementById('listaAmigos');

    // Limpar a lista existente
    listaAmigos.innerHTML = '';

    // Percorrer o array de amigos e criar elementos de lista
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];

        // Criar um novo elemento de lista
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo;

        // Adicionar o elemento de lista à lista na página
        listaAmigos.appendChild(itemLista);
    }
}

// Função para sortear os amigos
function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert('Adicione amigos à lista antes de sortear.');
        return;
    }

    // Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado
    document.getElementById('resultado').innerHTML = <p>O amigo sorteado é: ${amigoSorteado}</p>;
}
