function alterarIcone(tipo) {
    if (tipo == 1) {
        arquivo = "imagens/CSS-Logo.png";
    }
    if (tipo == 2) {
        arquivo = "imagens/icone-html5.png";
    }
    if (tipo == 3) {
        arquivo = "imagens/home-PNG.png";
    }
    if (tipo == 4) {
        arquivo = "imagens/engrenagem.png";
    }
    if (tipo == 5) {
        arquivo = "imagens/suporte.png";
    }
    document.getElementById("icone").src = arquivo;
}
function mudaImagem() {
    var imagem = document.getElementById("imagemIlustrativa");
    var atual = imagem.src;
    if (atual.indexOf("html5.avif") !== -1) {
        imagem.src = "imagens/html5-web-applications.jpg";
    } else {
        imagem.src = "imagens/html5.avif";
    }
}