// codigo do ator

//ator
let yAtor = 370;
let xAtor = 100;
let comprimentoAtor = 30;
let alturaAtor = 30;   
let colisão = false;
let meusPontos = 0


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);
}
//movimenta ator
function movimentaAtor(){
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
   if (keyIsDown(DOWN_ARROW)){
      if (podeSeMover()){
    yAtor += 3;}
  }
}
//colisão do ator
//colidirRectCircle(x1, y1, largura1, altura1, cx, cy, diâmetro)
function verificaColisão(){
   for (let i = 0; i < imagemCarros.length; i = i + 1 )
   {colisão = collideRectCircle(xCarros[i],yCarros[i],
      comprimentoCarro,alturaCarro,xAtor,yAtor, 15);
   if (colisão){
     voltaAtorParaInicio();
      if(pontosMaiorQueZero()){
       meusPontos -= 1;
   }
  }
 } 
}
function  voltaAtorParaInicio(){
  yAtor = 366;
}

//placar do jogo
function IncluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255,240,60))
  text(meusPontos,width / 5, 27 );
  
}
//pontos do jogo
function marcaPontos(){
  if (yAtor < 15 ){
    meusPontos += 1;
     voltaAtorParaInicio()
  }  
}
function pontosMaiorQueZero(){
  return meusPontos > 0 ;
}
function podeSeMover(){
  return yAtor < 370;
}
 