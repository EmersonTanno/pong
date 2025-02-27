//===================================Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro / 2;
let vxBolinha = 5;
let vyBolinha = 5;

//===================================Raquete
let xRacket = 10;
let yRacket = 150;
let racketSpeed = 5;
let larguraRacket = 10;
let alturaRacket = 100;

let xEnemyRacket = 580;
let yEnemyRacket = 150;
let enemyRaqueteSpeed = 5;


//===================================Pontuação
let meusPontos = 0;
let pontosInimigos = 0;

//===================================Canvas
function setup() {
    createCanvas(600, 400);
}


//===================================Update
function draw() {
    background(0);
    criarBolinha();
    vBolinha();
    bolinhaCollision();
    desenhaRaquete();
    moverRaquete();
    racketCollison();

    enemyRaquete();
    moveEnemyRaquete();
    enemyRaqueteCollision();


    placar();
}

//===================================Funções
function criarBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function vBolinha() {
    xBolinha += vxBolinha;
    yBolinha += vyBolinha;
}

function bolinhaCollision() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        vxBolinha *= -1;
    }

    if(xBolinha + raio > width){
        meusPontos++;
        reset();
    }

    if(xBolinha - raio < 0){
        pontosInimigos++;
        reset();
    }

    if (yBolinha + raio > height || yBolinha - raio < 0) {
        vyBolinha *= -1;
    }
}

function desenhaRaquete() {
    rect(xRacket, yRacket, larguraRacket, alturaRacket);
}

function moverRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRacket -= racketSpeed;
    }

    if (keyIsDown(DOWN_ARROW)) {
        yRacket += racketSpeed;
    }

    yRacket = constrain(yRacket, 0, height - alturaRacket);
}

function racketCollison(){
    if(xBolinha - raio < xRacket + larguraRacket && yBolinha > yRacket && yBolinha < yRacket + alturaRacket){
        vxBolinha *= -1;
        xBolinha = xRacket + larguraRacket + raio;
    }
}

function enemyRaquete(){
    rect(xEnemyRacket, yEnemyRacket, larguraRacket, alturaRacket);
}

function moveEnemyRaquete(){

    if(yBolinha > yEnemyRacket){
        yEnemyRacket += enemyRaqueteSpeed;
    } else {
        yEnemyRacket -= enemyRaqueteSpeed;
    }

    yEnemyRacket = constrain(yEnemyRacket, 0, height - alturaRacket);

}

function enemyRaqueteCollision() {
    if (xBolinha + raio > xEnemyRacket && yBolinha > yEnemyRacket && yBolinha < yEnemyRacket + alturaRacket) {
        vxBolinha *= -1;
        xBolinha = xEnemyRacket - raio; 
    }
}

function placar() {
    fill(255);
    textSize(24); 
    textAlign(CENTER); 
    text(meusPontos, width / 2 - 20, 26);
    text("-", width / 2, 26);
    text(pontosInimigos, width / 2 + 20, 26);
}

function reset(){
    xBolinha = 300;
    yBolinha = 200;
    xRacket = 10;
    yRacket = 150;
    xEnemyRacket = 580;
    yEnemyRacket = 150;
}