var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(Event){
    var alvoEvento = Event.target;
    
    var paiDoAlvo = alvoEvento.parentNode;

    paiDoAlvo.remove();
})


