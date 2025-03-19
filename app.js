let amigos = [];

function adicionarAmigo() {
    
    let nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeAmigo);
    document.getElementById('amigo').value = '';
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    }
    
}


function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert('Adicione amigos à lista antes de sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `<p>O amigo sorteado é: ${amigoSorteado}</p>`;
}