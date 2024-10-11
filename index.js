class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome; // Nome do herói
        this.idade = idade; // Idade do herói
        this.tipo = tipo; // Tipo do herói
    }

    // Método que simula um ataque do herói
    atacar() {
        let ataque;

        if (this.tipo.toLowerCase() === 'mago') {
            ataque = 'usou magia';
        } else if (this.tipo.toLowerCase() === 'guerreiro') {
            ataque = 'usou espada';
        } else if (this.tipo.toLowerCase() === 'monge') {
            ataque = 'usou artes marciais';
        } else if (this.tipo.toLowerCase() === 'ninja') {
            ataque = 'usou shuriken';
        } else {
            ataque = 'não tem ataque definido';
        }

        return `O ${this.tipo} atacou usando ${ataque}.`;
    }
}

// Função para criar um herói e mostrar o ataque
function criarHeroi() {
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const tipo = document.getElementById("tipo").value;

    const heroi = new Heroi(nome, idade, tipo);
    const resultado = heroi.atacar();

    document.getElementById("resultado").innerText = resultado;
}