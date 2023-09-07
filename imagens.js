//codigo das imagem e sons

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro0;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarros;

//sons
let somDaTrilha;
let somDoPonto;
let somDaColisão;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro0 = loadImage("imagens/carro-1.png");
  imagemCarro1 = loadImage("imagens/carro-2.png");
  imagemCarro2 = loadImage("imagens/carro-3.png");
  imagemCarro3 = loadImage("imagens/carro-1.png");
  imagemCarro4 = loadImage("imagens/carro-2.png");
  imagemCarro5 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro0,imagemCarro1,imagemCarro2,imagemCarro3,imagemCarro4,imagemCarro5]
}
//carregamento dos sons
 somDaTrilha = loadSound("sons/trilha.mp3");
 somDoPonto = loadSound("sons/pontos.wav");
 somDaColisão = loadSound("sons/colidiu.mp3");
  