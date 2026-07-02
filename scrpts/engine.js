// biblioteca dos emojis
const emojis = [
    "🇧🇷",
    "🇧🇷",
    "🇫🇷",
    "🇫🇷",
    "🇨🇮",
    "🇨🇮",
    "🇵🇹",
    "🇵🇹",
    "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "🇪🇸",
    "🇪🇸",
    "🇳🇴",
    "🇳🇴"
];

// salvar o card que selecionou
let abrirCards = [];

// esta função irá embaralhar os cards
let embaralharEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

//for para criar os cards dinamicamente
for (let i = 0; i < emojis.length; i++) {
    let caixa = document.createElement("div");
    caixa.className = "item";
    caixa.innerHTML = embaralharEmojis[i];
    document.querySelector(".game").appendChild(caixa);
}