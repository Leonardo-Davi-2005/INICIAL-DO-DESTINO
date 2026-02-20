// Pegando dados da URL
const params = new URLSearchParams(window.location.search);

const nome = params.get("nome") || "";
const ano = parseInt(params.get("ano")) || 0;
const gosto = params.get("gosto") || "";

// Fórmula do destino 😈
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const indice = (nome.length + ano + gosto.length) % 26;
const inicial = letras[indice];

// Mostrando letra
document.getElementById("letra").innerText = inicial;

// Gerando explicação personalizada
const explicacoes = [
    "Essa inicial indica uma pessoa intensa e cheia de energia.",
    "O destino aponta para alguém carinhoso e extremamente leal.",
    "Sua alma gêmea terá espírito aventureiro e mente criativa.",
    "Essa letra vibra com alguém misterioso e apaixonante.",
    "Uma conexão forte e emocional está ligada a essa inicial.",
    "Seu destino envolve alguém que gosta de desafios e emoção.",
    "Essa energia revela alguém protetor e determinado.",
    "O universo indica uma pessoa romântica e sonhadora."
];

const texto = explicacoes[indice % explicacoes.length];

document.getElementById("explicacao").innerHTML =
    `<strong>${nome}</strong>, sua energia combinada com o ano <strong>${ano}</strong>
    e aquilo que você gosta revela que sua alma gêmea tem a inicial <strong>${inicial}</strong>.<br><br>
    ${texto} 💖`;


const letraElemento = document.getElementById("letra");

letraElemento.innerText = inicial;

// 🔊 Tocar som da animação
const som = document.getElementById("somAnimacao");
som.volume = 0.4;
som.currentTime = 0;
som.play().catch(() => {});