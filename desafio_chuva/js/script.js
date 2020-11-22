function expandir(){
    var disp = document.getElementById("divacc");
    var botao = document.getElementById("vermais");
    var botao2 = document.getElementById("vermais2");
    var textoinicial = document.getElementById("removtext");

    if(disp.style.display === "none"){
        disp.style.display="inline";
        botao.style.display="none";
        botao2.style.display="inline";
        textoinicial.style.display="none";
    }else{
        disp.style.display="none";
        botao.style.display="inline";
        botao2.style.display="none";
        textoinicial.style.display="inline";
    }
}

function createForm(){
    var formulario = document.createElement("FORM");
    var assunto = document.createElement("INPUT");
    var nome = document.createElement("INPUT");
    var pergunta = document.createElement("INPUT");

    formulario.appendChild(assunto);
    var attassunto = document.createAttribute("type");
    attassunto.value = "text";
    assunto.setAttributeNode(attassunto);

    window.addEventListener("load",inicia);
    function inicia(){
        document.formular.appendChild(formulario);
    }
}