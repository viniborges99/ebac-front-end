//jQuery( function($){
$(document). ready(function(){
    $('.owl-carousel').owlCarousel();
    let titulos = $('h4')
    let itens = $('.featured-item')
    let destaques = $('#featured')

    $('.featured-item a').addClass('btn btn-dark stretch-link');
    $('.featured-item:first h4').append('<span class="badge bg-secondary"> Novo </span>')
    $('.featured-item h4').dblclick(function(){
        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });
    });

    $('.featured-item a').on('blur', function(event){
        event.preventDefault();
        console.log('produto esgotado');

    })
    /*callback
    são ações que começam ao termino de outra.
    */
    $('.featured-item:nth(1)').hide(2000, function(){
        //esta linha de cima e o callback, ele ira ocultar o primeiro elemento ao terminar de ocultar ele vai receber um alert que e a linha de ha baixo.
        console.log($(this).find('h4').text() + 'esgotado')
    })
    .show(2000, function(){
        console.log($(this).find('h4').text() + 'em estoque ')
    })

    /*animaçoes*/
    const duracao = 1000
    $('.featured-item:nth(0)')
    .hide(duracao)
    .show(duracao)
    .fadeOut(duracao)
    .fadeIn(duracao)
    .toggle(duracao)
    .toggle(duracao)

    $('#form-submit').on('click', function(e){
        e.preventDefault()

        if($('#email').val() != ""){
            $('#email').animate({
                opacity: "toggle",
                top: "-50"
            }, 500, function(){
                console.log($(this).val())
            })
        }


        if($('#email').val().length < 1){
            $('#email').animate({
                'border': '2px solid red'
            })

        }
    })

    //ouvinte de eventos .nav-modal-open

    $('.nav-modal-open').on('click', function(e){
        e.preventDefault();

        let elem=$(this).attr('rel')

        $('.modal-body').html($('#'+elem).html())
        $('.modal-header h5.modal-title').html($(this).text())

        let myModal = new bootstrap.Modal($('#modelId'))

        myModal.show()
    })

    function validate(elem){
        if( elem.val() == ""){
            console.log('os campos de estão vazios')

            elem.parent().find('.text-muted').show()

            elem.addClass('invalid')
            return false
        } else{
            elem.parent().find('.text-muted').hide()

            elem.removeClass('invalid')
        }
    }
    

    $('body').on('submit','.modal-body .form', function(e){

        e.preventDefault()

        const inputName = $("#nome")
        const inputEmail = $("#email")

        validate(inputName)
        validate(inputEmail)

        if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
            return false
        } else{
           $(this).submit() 
        }
        
    })
   

    $('body').on('blur', '#nome', function(){
        validate($(this))
    })

    $('body').on('blur', '#email', function(){
        validate($(this))
    })

    $('body').on("focus", '#date', function(){
        $(this).datepicker();
    })

    $('body').on('blur', '#date', function(){
        validate($(this))
        $('#date').mask('00/00/0000');
    })
    $('body').on('blur', '#time', function(){
        validate($(this))
        $('#time').mask('00:00');
    })
    $('body').on('blur', '#cep', function(){
        validate($(this))
        $('#cep').mask('00000-000');
    })
    $('body').on('blur', '#phone', function(){
        validate($(this))
        $('#phone').mask('0000-0000');
    })
    $('body').on('blur', '#cpf', function(){
        validate($(this))
        $('#cpf').mask('000.000.000-00');
        
    })
    function checarEmail(){
        if( document.forms[0].email.value=="" 
           || document.forms[0].email.value.indexOf('@')==-1 
             || document.forms[0].email.value.indexOf('.')==-1 )
            {
              alert( "Por favor, informe um E-MAIL válido!" );
              return false;
            }
    }


    $(function(){
    //Executa a requisição quando o campo username perder o foco
    $('#cpf').blur(function()
    {
        var cpf = $('#cpf').val().replace(/[^0-9]/g, '').toString();

        if( cpf.length == 11 )
        {
            var v = [];

            //Calcula o primeiro dígito de verificação.
            v[0] = 1 * cpf[0] + 2 * cpf[1] + 3 * cpf[2];
            v[0] += 4 * cpf[3] + 5 * cpf[4] + 6 * cpf[5];
            v[0] += 7 * cpf[6] + 8 * cpf[7] + 9 * cpf[8];
            v[0] = v[0] % 11;
            v[0] = v[0] % 10;

            //Calcula o segundo dígito de verificação.
            v[1] = 1 * cpf[1] + 2 * cpf[2] + 3 * cpf[3];
            v[1] += 4 * cpf[4] + 5 * cpf[5] + 6 * cpf[6];
            v[1] += 7 * cpf[7] + 8 * cpf[8] + 9 * v[0];
            v[1] = v[1] % 11;
            v[1] = v[1] % 10;

            //Retorna Verdadeiro se os dígitos de verificação são os esperados.
            if ( (v[0] != cpf[9]) || (v[1] != cpf[10]) )
            {
                alert('CPF inválido: ' + cpf);

                $('#cpf').val('');
                $('#cpf').focus();
            }
        }
        else
        {
            alert('CPF inválido:' + cpf);

            $('#cpf').val('');
            $('#cpf').focus();
        }
    });
});
    
})
