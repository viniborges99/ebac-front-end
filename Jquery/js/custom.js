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

})
