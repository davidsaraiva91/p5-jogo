//codigo do carro

//lista dos carro
let xCarros = [600,600,600,600,600,600];
let yCarros = [96,150,45,210,260,320];
let comprimentoCarro = 50;
let alturaCarro = 40;

// lista movimena carros

function mostraCarros(){
  for (let i = 0; i < pegarQuantidadeDeCarros(); i = i + 1 ){
   image(imagemCarros[i], xCarros[i],yCarros[i], comprimentoCarro, alturaCarro);
 }
}

function movimentaCarros(){
  let velocidadeCarros = pegarVelocidadeCarros();
  for ( let i = 0;i< pegarQuantidadeDeCarros(); i = i + 1){
    xCarros[i]-= velocidadeCarros[i];
  }
} 

function voltaParaInicio(){
  for ( let i = 0; i< imagemCarros.length; i = i + 1){
    if ( passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
} 
function passouTodaTela(xCarros){
  return xCarros < - 50;
}
