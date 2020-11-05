/*Apresentação Modal*/
setTimeout(ApresentarModal, 5000);
function ApresentarModal(){
    
    var modal = document.querySelector(".modal");
    
    if(modal != null)
    {
        document.querySelector(".modal").style.display = "block";
        
        document.querySelector(".modal a").addEventListener("click", function(){
        document.querySelector(".modal").style.display = "none"; }); 
    } 
    // ! negação
    // sexo == "f" = verdadeiro - true - 1;
    //             = falso - false - 0;
}
/*Validação Modal (Pagina Inicial)*/
if(document.forms["modal_form"] != undefined){
    alert("Entrou na validação modal");
    var form = document.forms["modal_form"];
    
    form.addEventListener("submit", validarFormModal);
    form.email.addEventListener("keypress", function(){
        alert("Entrou na validaçao email");
        form.email.className = ""; document.querySelector("span.nao_valido").style.display = "none";
    });
}

function validarFormModal(evt){
    var form = document.forms["modal_form"];
    
    var inputEmail=form.email;
    var valorEmail=form.email.value;
    var posicaoArroba =valorEmail.indexOf("@");
    
    if(!ValidarEmail(valorEmail))
    {
       // alert("Email Inválido.");
        inputEmail.className ="nao_valido"; document.querySelector("span.nao_valido").style.display = "block";
        evt.preventDefault();//não deixa enviar o formulario.
    }
}
/*Validação Fale Conosco*/
if(document.forms["form_contato"] != undefined)
{
    var form = document.forms["form_contato"];

    form.addEventListener("submit", function(evt){
        var formValido = true;

        if(naoVazio(form.Nome_Completo.value)){
            form.Nome_Completo.className ="nao_valido";
            formValido = false;
        }
        if(naoVazio(form.Telefone.value)){
            form.Telefone.className ="nao_valido";
            formValido = false;
        }
        if(naoVazio(form.Mensagem.value)){
            form.Mensagem.className ="nao_valido";
            formValido = false;
        }

        if(!ValidarEmail(form.Email.value)){
            alert("email");
            form.Email.className ="nao_valido";
            formValido = false;
        }

        alert(formValido);
        if(!formValido){
            evt.preventDefault();
           }
        });


    var inputs = document.querySelectorAll("form[name=form_contato] input[type=text]");
    //alert(inputs.length);

    for(var i=0;i<inputs.lenght; i++){
        inputs[i].addEventListener("keypress", function()
        {
            className = "";
        });
    }

    var textarea = document.querySelector("form[name=form_contato] textarea");
    textarea.addEventListener("keyup", function()
        {
            className = "";
            document.querySelector(".texto").innerHTML = "Caractere(s)"+this.value.length;
        });
    
}
/*Funções*/
    function ValidarEmail(valorEmail)
    {
        if( valorEmail != "" &&  valorEmail.indexOf("@") > 3 && valorEmail.lastIndexOf(".") > posicaoArroba)
        {  
           return true; 
        }else{
            return false;
        }
    }
    
    function naoVazio(texto)
    {
        if(texto.trim().length > 0)
        {//trim remove os espaços em branco
          return true; 
        }else{
            return false;
        }
    }