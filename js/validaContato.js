
    function validaContato() {

            var nome = formulario.nome.value;
            var email = formulario.email.value;
            var assunto = formulario.assunto.value;
            var mensagem = formulario.mensagem.value;

            if (nome == "") {
        alert("Nome não informado");
                formulario.nome.focus();
                return false;
            }
            if (email == "" || email.indexOf('@') == -1 ) {
        alert("E-mail não informado ou incorreto");
                formulario.email.focus();
                return false;
            }
            if (assunto == "") {
        alert("Precisa informar o assunto");
                formulario.assunto.focus();
                return false;
            }
            if (mensagem == "") {
        alert("mensagem não informado");
                formulario.mensagem.focus();
                return false;
            }
            alert("Formulário enviado!");
            window.location.reload();
        }
