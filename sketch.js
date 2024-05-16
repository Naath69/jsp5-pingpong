//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){

trilha = loadSound("trilha.wav");
ponto = loadSound("ponto.wav");
raquetada = loadSound("raquetada.wav");

}


//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let colidiu = false;

//Placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//variaveis do oponente 
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente;

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw(){
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimenteRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  incluiPlacar(); 
  marcaPonto();
  bolinhaNaoFicaPresa();
  
 
  
 
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x,y){
rect (x, y, raqueteComprimento, raqueteAltura)
}



function movimentaRaqueteOponente() {
    if (keyIsDown(87)) {
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)) {
        yRaqueteOponente += 10;

    }
}

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
   
  }
    }

  function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
      raquetada.play()
    }
  }

function  movimenteRaqueteOponente(){
   if (keyIsDown(87)) {
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)) {
        yRaqueteOponente += 10;
   
  }
    }
  

function incluiPlacar(){
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}


function marcaPonto() {
    if (xBolinha > 591) {
        meusPontos += 1;
      ponto.play()
    }
    if (xBolinha < 9) {
        pontosDoOponente += 1;
      ponto.play()
    }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
  

  
 