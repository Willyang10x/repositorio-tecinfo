var banners = 

    ["os melhores do brasil!" , "Qualidade e preço baixo!"];

var bannersAtual = 0;

function trocaBanner(){
    bannersAtual = (bannersAtual + 1) % 2;
    document.querySelector(`h2#mensagem`).textContent =
        banners[bannersAtual];
}

setInterval(trocaBanner, 2000);