var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById("jogador-selecionado");
var vencedorSelecionado = document.getElementById("vencedor-selecionado");

mudarJogador('X');
function escolherQuadrado(Id){
    let quadrado = document.getElementById(Id);

    if(vencedor !== null){
        return;
    }
    if(quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X'){
        jogador = 'O';
    }else{
        jogador = 'X';
    }
    mudarJogador(jogador);
    checaVencedor();
}
function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}
function checaVencedor(){
    var q1 = document.getElementById("1");
    var q2 = document.getElementById("2");
    var q3 = document.getElementById("3");
    var q4 = document.getElementById("4");
    var q5 = document.getElementById("5");
    var q6 = document.getElementById("6");
    var q7 = document.getElementById("7");
    var q8 = document.getElementById("8");
    var q9 = document.getElementById("9");

    if(checaSequencia(q1, q2, q3)){
        mudaCorQuadrado(q1,q2,q3);
        mudaVencedor(q3); 
        return;       
    }
    if(checaSequencia(q4,q5,q6)){
        mudaCorQuadrado(q4,q5,q6);
        mudaVencedor(q6);
        return;
    }
    if(checaSequencia(q7,q8,q9)){
        mudaCorQuadrado(q7,q8,q9);
        mudaVencedor(q9);
        return;
    }
    if(checaSequencia(q2,q5,q8)){
        mudaCorQuadrado(q2,q5,q8);
        mudaVencedor(q8);
        return;
    }
    if(checaSequencia(q3,q6,q9)){
        mudaCorQuadrado(q3,q6,q9);
        mudaVencedor(q9);
        return;
    }
    if(checaSequencia(q1,q4,q7)){
        mudaCorQuadrado(q1,q4,q7);
        mudaVencedor(q7);
        return;
    }
    if(checaSequencia(q1,q5,q9)){
        mudaCorQuadrado(q1,q5,q9);
        mudaVencedor(q9);
        return;
    } 
    if(checaSequencia(q3,q5,q7)){
        mudaCorQuadrado(q3,q5,q7);
        mudaVencedor(q7);
        return;
    }   
}
function checaSequencia(quad1, quad2, quad3){
    var eigual = false;
    if(quad1.innerHTML !=='-' && quad1.innerHTML === quad2.innerHTML && quad2.innerHTML === quad3.innerHTML){
        eigual = true;
    }
    return eigual;
}
function mudaCorQuadrado(quad1, quad2, quad3){
    quad1.style.background = '#0f0';
    quad2.style.background = '#0f0';
    quad3.style.background = '#0f0';
}
function mudaVencedor(quad){
    vencedor = quad.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}
function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    for(let i=1; i<= 9; i++){
        let quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
        mudarJogador('X');
    }
}