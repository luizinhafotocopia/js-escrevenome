//variáveis da bolinhahtml, body {
    margin: 0;
    padding: 0;
  }
  canvas {
    display: block;
  }
  
  let xBolinha = 100;
  let yBolinha = 200;
  let diametro = 22;
  let raio = diametro / 2;
  
  //velocidade da bolinha
  let velocidadeXBolinha = 6;
  let velocidadeYBolinha = 6;
  
  //variáveis da raquete
  let xRaquete = 5;
  let yRaquete = 150;  
  
  //variaveis do oponente
  let xRaqueteOponente;
  let yRaqueteOponente; 
  
  
  let raqueteComprimento = 10;
  let raqueteAltura = 90;
  
  let colidiu = false;
  
  function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    // verificaColisaoRaquete();
    colisaoMinhaRaqueteBiblioteca();
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  }
  }
   
  function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
  }
  
  function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  }
  
  function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
      velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
      velocidadeYBolinha *= -1;
    }
  }
  
  function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
  }
  
  
  
  }
  
  function movimentaMinhaRaquete() {
    if(keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
    }
  }
  
  function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
      velocidadeXBolinha *= -1;
    }
  }
  
  function colisaoMinhaRaqueteBiblioteca() {
    colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if(colidiu) {
      velocidadeXBolinha *= -1;
    }
  }
  