function expandir() {
    var disp = document.getElementById("divacc");
    var botao = document.getElementById("vermais");
    var botao2 = document.getElementById("vermais2");
    var textoinicial = document.getElementById("removtext");

    if (disp.style.display === "none") {
        disp.style.display = "inline";
        botao.style.display = "none";
        botao2.style.display = "inline";
        textoinicial.style.display = "none";
    } else {
        disp.style.display = "none";
        botao.style.display = "inline";
        botao2.style.display = "none";
        textoinicial.style.display = "inline";
    }
}


function createForm() {
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
    assunto.setAttribute("type", "textarea");
    assunto.setAttribute('id', 'assunto');
    assunto.setAttribute("placeholder", "Assunto");
    assunto.setAttribute("class", "form-control assuntotst");
    form.appendChild(assunto);

    var linebreak = document.createElement('br');
    form.appendChild(linebreak);

    //-------------------------------------nome------------------------------------------------------------------------------

    var nome = document.createElement('input'); // Create Input Field for Name inputelement.setAttribute("type", "text"); inputelement.setAttribute("name", "name"); 
    nome.setAttribute("type", "text");
    nome.setAttribute('id', 'nome');
    nome.setAttribute("placeholder", "Nome");
    nome.setAttribute("class", "form-control nametst");
    form.appendChild(nome);

    var linebreak = document.createElement('br');
    form.appendChild(linebreak);


    //-------------------------------------------------------------Duvida--------------------------------------------------------------------

    var duvida = document.createElement('input');
    duvida.setAttribute("type", "text");
    duvida.setAttribute('id', 'duvida');
    duvida.setAttribute("placeholder", "Dúvida");
    duvida.setAttribute("class", "form-control duvidatst");
    form.appendChild(duvida);

    var linebreak = document.createElement('br');
    form.appendChild(linebreak);

    //-------------------------------------------------------Botao---------------------------------------------------------------------

    var botao = document.createElement('input');
    botao.setAttribute("type", "button");
    botao.setAttribute("class", "anexbotao");
    botao.setAttribute("placeholder", "anexar");
    botao.setAttribute("value", "Anexar");

    botao.onclick = function () {
        form.setAttribute('class', 'formtstocult');

        document.getElementById('titlediscussion').innerHTML = "Seu tópico foi enviado com sucesso! :D";
        document.getElementById('discussion').innerHTML = "Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!";
        document.getElementById('imgdiscussion').setAttribute("class", "imgdisc");
        document.getElementById('texttpic').innerHTML = "criar novo tópico";
        document.getElementById('buttontopic').setAttribute("class", "buttoncreat2");
        document.getElementById('imgplus').setAttribute("class", "imgplusocult");
        document.getElementById('trabplus').setAttribute("class", "trabplus");


        document.getElementById('assunto').readonly = true;
        document.getElementById('nome').readonly = true;
        document.getElementById('duvida').readonly = true;

        var check = document.createElement('img');
        check.src = "../img/cert.png";
        check.setAttribute("class", "check");
        card.appendChild(check);

        var aviso = document.createElement('h2');
        aviso.setAttribute("class", "aviso");
        aviso.innerHTML = "Aguardando feedback dos autores";
        card.appendChild(aviso);
        //------------------------------------------------------Botao Voltar---------------------------------------------------------------------
        var voltar = document.createElement('input');
        voltar.setAttribute("type", "button");
        voltar.setAttribute("class", "backclass");
        voltar.setAttribute("placeholder", "Voltar");
        voltar.setAttribute("value", "Editar tópico");

        voltar.onclick = function () {
            form.setAttribute('class', 'formtst');

            document.getElementById('titlediscussion').innerHTML = "Compartilhe suas ideias ou dúvidas com os autores!";
            document.getElementById('discussion').innerHTML = "Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!";
            document.getElementById('imgdiscussion').setAttribute("class", "configicon");
            document.getElementById('texttpic').innerHTML = "criar tópico";
            document.getElementById('buttontopic').setAttribute("class", "buttoncreat");
            document.getElementById('imgplus').setAttribute("class", "imgplus");
            document.getElementById('trabplus').setAttribute("class", "trabplus trabocult");

            document.getElementById('assunto').readonly = false;
            document.getElementById('nome').readonly = false;
            document.getElementById('duvida').readonly = false;

            check.remove();
            aviso.remove();
            voltar.remove();
            responder.remove();
        }
        card.appendChild(voltar);
        //---------------------------------------------------Botao Responder---------------------------------------------------------------------
        var responder = document.createElement('input');
        responder.setAttribute("type", "button");
        responder.setAttribute("class", "respclass");
        responder.setAttribute("placeholder", "Responder");
        responder.setAttribute("value", "Responder");

        responder.onclick = function () {

            document.getElementById('titlediscussion').innerHTML = "Compartilhe suas ideias ou dúvidas com os autores!";
            document.getElementById('discussion').innerHTML = "Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!";
            document.getElementById('imgdiscussion').setAttribute("class", "configicon");
            document.getElementById('texttpic').innerHTML = "criar tópico";
            document.getElementById('buttontopic').setAttribute("class", "buttoncreat");
            document.getElementById('imgplus').setAttribute("class", "imgplus");
            document.getElementById('trabplus').setAttribute("class", "trabplus trabocult");

            form.setAttribute('class', 'formtst');

            document.getElementById('assunto').readonly = false;
            document.getElementById('nome').readonly = false;
            document.getElementById('duvida').readonly = false;

            check.remove();
            aviso.remove();
            voltar.remove();
            responder.remove();

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

            var like = document.createElement('p');
            like.setAttribute("class", "liketxt");
            like.innerHTML = "Like";
            form.appendChild(like);

            var cont = document.createElement('a');
            cont.setAttribute("class", "contclass");
            cont.innerHTML = "0";
            form.appendChild(cont);

            var fav = 0;
            img.onclick = function () {

                fav = parseInt(fav) + parseInt(1);
                console.log(fav);
                cont.innerHTML = fav;

                if (fav > 1) {
                    like.innerHTML = "Likes";
                } else
                    like.innerHTML = "Like";

            }


            //------------------------------------------------------Form-------------------------------------------------------------------------------------
            var formrsp = document.createElement("form");

            formrsp.setAttribute('class', 'formrsp');
            formrsp.setAttribute('id', 'formrsp');
            card.appendChild(formrsp);

            var linebreak = document.createElement('br');
            formrsp.appendChild(linebreak);

            //------------------------------------------------------nome responsavel-------------------------------------------------------------

            var nomersp = document.createElement('input'); // Create Input Field for Name inputelement.setAttribute("type", "text"); inputelement.setAttribute("name", "name"); 
            nomersp.setAttribute("type", "text");
            nomersp.setAttribute('id', 'nomeact');
            nomersp.setAttribute("placeholder", "Nome");
            nomersp.setAttribute("class", "form-control nametst2");
            formrsp.appendChild(nomersp);

            //--------------------------------------------------------resposta----------------------------------------------------------------
            var answer = document.createElement('input');
            answer.setAttribute("type", "text");
            answer.setAttribute('id', 'answer');
            answer.setAttribute("placeholder", "Resposta");
            answer.setAttribute("class", "form-control asnwer");
            formrsp.appendChild(answer);
            //--------------------------------------------------------imagem check orage----------------------------------------------------------------------------------------------------------
            var imgorg = document.createElement('img');
            imgorg.src = "../img/checkorange.png";
            imgorg.id = "imgorg";
            imgorg.setAttribute("class", "checkorg");
            formrsp.appendChild(imgorg);

            //---------------------------------------------------------------contar Respostas--------------------------------------------------------------
            var imgsend = document.createElement('img');
            imgsend.src = "../img/Send.png";
            imgsend.id = "imgsend";
            imgsend.setAttribute("class", "sendorg");
            formrsp.appendChild(imgsend);

            var nresp = document.createElement('p');
            nresp.setAttribute("class", "rsptxt");
            nresp.innerHTML = "Resposta";
            form.appendChild(nresp);

            nresp.onclick = function () {
                document.getElementById('formrsp').setAttribute("class", "formrsp");
            }

            var contresp = document.createElement('a');
            contresp.setAttribute("class", "contclass");
            contresp.innerHTML = "0";
            form.appendChild(contresp);

            var rsp = 0;
            imgsend.onclick = function () {

                rsp = parseInt(rsp) + parseInt(1);
                console.log(rsp);
                contresp.innerHTML = rsp;

                if (rsp > 1) {
                    nresp.innerHTML = "Respostas";
                } else
                    nresp.innerHTML = "Resposta";

                document.getElementById('imgorg').disabled = true;
                document.getElementById('nomeact').readonly = true;
                document.getElementById('answer').readonly = true;

                document.getElementById('imgsend').setAttribute("class", "ocult");
                document.getElementById('formrsp').setAttribute("class", "ocult");


            }

            //-------------------------------------------------------autor--------------------------------------------------------------
            var autor = document.createElement('p');
            autor.setAttribute("class", "autortxt");
            autor.innerHTML = "Autor";
            formrsp.appendChild(autor);

        }



        card.appendChild(responder);

    }


    //inputbutton.setAttribute("name", "submit");
    //inputbutton.setAttribute("value", "Submit"); 
    form.appendChild(botao);
    content.appendChild(card);
}