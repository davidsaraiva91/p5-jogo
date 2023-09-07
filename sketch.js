

function setup(){
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarros();
  movimentaCarros();
  movimentaAtor();
  voltaParaInicio();
  verificaColisão();
  IncluiPontos();
  marcaPontos();
  levelSelector();
}


