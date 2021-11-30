var conteudo = document.getElementById('conteudo');
var botao = document.getElementById('mostrarmais');

botao.onclick = function(){
    if(conteudo.className == "open"){
        conteudo.className = "";
        botao.innerHTML = "Mostrar Mais";
    }
    else{
        conteudo.className = "open";
        botao.innerHTML = "Mostrar Menos";
    }
};