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
    var content = document.getElementById("formcontent"); 

//------------------------------------------------------Card----------------------------------------------------------------------------
    var card = document.createElement("div");
    card.setAttribute("class", "card-body cardtst");


//------------------------------------------------------Form-------------------------------------------------------------------------------------
    var form = document.createElement("form"); 

    form.setAttribute('target', 'pclu');  
    form.setAttribute('class', 'formtst');
    card.appendChild(form); 
    
    var linebreak = document.createElement('br'); 
    form.appendChild(linebreak); 



//-----------------------------------------------------Assunto-----------------------------------------------------------------------------------

    var assunto = document.createElement('input'); // Create Input Field for Name inputelement.setAttribute("type", "email"); inputelement.setAttribute("name", "email"); 
    assunto.setAttribute("type", "text");
    assunto.setAttribute('id','assunto');
    assunto.setAttribute("placeholder", "Assunto");
    assunto.setAttribute("class", "form-control assuntotst");
    form.appendChild(assunto); 
    
    var linebreak = document.createElement('br'); 
    form.appendChild(linebreak); 

//-------------------------------------nome------------------------------------------------------------------------------
   
    var nome = document.createElement('input'); // Create Input Field for Name inputelement.setAttribute("type", "text"); inputelement.setAttribute("name", "name"); 
    nome.setAttribute("type", "text");
    nome.setAttribute('id','nome');
    nome.setAttribute("placeholder", "Nome");
    nome.setAttribute("class", "form-control nametst");
    form.appendChild(nome); 
    
    var linebreak = document.createElement('br'); 
    form.appendChild(linebreak);  


//-------------------------------------------------------------Duvida--------------------------------------------------------------------

    var duvida = document.createElement('input'); // Create Input Field for Name 
    duvida.setAttribute("type", "text");
    duvida.setAttribute('id','duvida');
    duvida.setAttribute("placeholder", "Dúvida");
    duvida.setAttribute("class", "form-control duvidatst");
    form.appendChild(duvida);  

    var linebreak = document.createElement('br'); 
    form.appendChild(linebreak); 

    //-------------------------------------------------------Botao---------------------------------------------------------------------
    
    var botao = document.createElement('input'); // Create Input Field for Name 
    botao.setAttribute("type", "button"); 
    botao.setAttribute("class", "testebotao");
    botao.setAttribute("placeholder", "anexar");
    botao.setAttribute("value", "anexar");

    botao.onclick = function(){
        botao.setAttribute("class", "ocultabotao");


                //------------------------------------------------mais info-----------------------------------------------------------------------
        var imgg = document.createElement('img');
        imgg.src = "../img/informacoes.png";
        imgg.setAttribute("class", "imgjs");
        form.appendChild(imgg); 

        //-----------------------------------------------Favoritar---------------------------------------------------------------------
        var img = document.createElement('img');
        img.src = "../img/favoritar.png";
        img.setAttribute("class", "imgjs2");
        form.appendChild(img); 

        var cont = document.createElement('a');
        cont.innerHTML = "0";
        cont.setAttribute("class",contclass);
        form.appendChild(cont); 

        var like = document.createElement('p');
        like.setAttribute("class","liketxt")
        like.innerHTML = "like";
        form.appendChild(like); 

        var fav=0;
        img.onclick = function(){
            
             fav = parseInt(fav) + parseInt(1);
             console.log(fav);
             cont.innerHTML = fav;

             if(fav>1){
                like.innerHTML = "likes";
             }else
             like.innerHTML = "like";
        }

       
        





    };

    //inputbutton.setAttribute("name", "submit");
    //inputbutton.setAttribute("value", "Submit"); 
    form.appendChild(botao);
    content.appendChild(card);
    }