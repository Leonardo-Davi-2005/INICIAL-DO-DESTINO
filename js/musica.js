document.addEventListener("DOMContentLoaded", () => {

    const musica = document.getElementById("musicaAmbiente");

    if (!musica) return;

    musica.volume = 0.15;

    // Verifica se já estava tocando
    const tocando = localStorage.getItem("musicaTocando");

    if (tocando === "true") {
        musica.play().catch(() => {});
    }

    // Tocar na primeira interação
    document.addEventListener("click", () => {
        musica.play().then(() => {
            localStorage.setItem("musicaTocando", "true");
        }).catch(() => {});
    }, { once: true });

});