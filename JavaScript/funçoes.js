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

function mudaImagemInicial() {
    var imagem = document.getElementById("imagemIlustrativa");
    var atual = imagem.src;
    if (atual.indexOf("html5.avif") !== -1) {
        imagem.src = "imagens/html5-web-applications.jpg";
    } else {
        imagem.src = "imagens/html5.avif";
    }
}

function mudaImagemConfig() {
    var imagem = document.getElementById("imagemIlustrativa");
    var atual = imagem.src;
    if (atual.indexOf("config-img.webp") !== -1) {
        imagem.src = "imagens/html5-web-applications.jpg";
    } else {
        imagem.src = "imagens/config-img.webp";
    }
}

function mudaImagemSuporte() {
    var imagem = document.getElementById("imagemIlustrativa");
    var atual = imagem.src;
    if (atual.indexOf("suporte-img.jpg") !== -1) {
        imagem.src = "imagens/html5-web-applications.jpg";
    } else {
        imagem.src = "imagens/suporte-img.jpg";
    }
}

function abrirJanelaPrivacidade() {
    document.getElementById("modalPrivacidade").style.display = "block";
}

function fecharJanelaPrivacidade() {
    document.getElementById("modalPrivacidade").style.display = "none";
}