
let levelEscolhido = null;

const configuracaoDeLevel = {
  facil: {
    quantidadeDeCarros: 4,
    valocidadeCarros: [1.3,3,2,3,1.5,2.8]
  },
  dificil: {
    quantidadeDeCarros: 6,
    valocidadeCarros: [5.3,7,6,8,6.5,5.8]
  }
}

function levelSelector(){
  document.querySelector("#nivel").addEventListener("change", function (e){
    levelEscolhido = e.target.value
  })
}

function pegarVelocidadeCarros() {
  if(!levelEscolhido){
    return configuracaoDeLevel.facil.valocidadeCarros;
  }
  return configuracaoDeLevel[levelEscolhido].valocidadeCarros;
}

function pegarQuantidadeDeCarros() {
  if(!levelEscolhido){
    return configuracaoDeLevel.facil.quantidadeDeCarros;
  }
  return configuracaoDeLevel[levelEscolhido].quantidadeDeCarros;
}