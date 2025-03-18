let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if(nomeAmigo !== "") {
        if(amigos.includes(nomeAmigo)) {
            alert('Amigo já adicionado!');
        } else {
            amigos.push(nomeAmigo);
            atualizarLista();
        }
        inputAmigo.value = '';
    } else {
        alert('Digite um nome válido!');
    }
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if(amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    let sorteado;
    const sorteios = [];

    amigos.forEach((amigo) => {
        do {
            sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        } while(sorteado === amigo || sorteios.includes(sorteado));

        sorteios.push(sorteado);
    });

    exibirResultado(sorteios);
}

function exibirResultado(sorteios) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for(let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${amigos[i]} tirou ${sorteios[i]}`;
        resultado.appendChild(li);
    }
}
