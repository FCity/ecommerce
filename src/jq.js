import $ from 'jquery'

const jq = $(function(){
    $('#btn-cart-show').on('click', function(){
        $('#cart').animate({ width: 'toggle'}, 'slow')
        $('body').addClass('body-lock')
        $('#gallery').addClass('cart-open')
    })

    $('#btn-cart-hide').on('click', function(){
        $('#cart').animate({ width: 'toggle'}, 'slow')
        $('body').removeClass('body-lock')
        $('#gallery').removeClass('cart-open')
    })

    $('#alert').on('click', function(){
        $(this).fadeOut('slow', 'swing')
    })
})

export default jq