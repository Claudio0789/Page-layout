// Dropdown:

$(document).ready(function(){
    $('.img-bol1').click(function(){
        $('.img-geral1').hide().css('display', 'none');
        $('.img-geral1.active').show('slow').css('display', 'flex');
        $('.card.card1').css('height', 'auto');
    })
})
$('.img-bol11').click(function(){
    $('.img-geral1').show('slow').css('display', 'flex');
    $('.img-geral1.active').hide().css('display', 'none');
    $('.card.card1').css('height', '274pt');
})

$(document).ready(function(){
    $('.img-bol2').click(function(){
        $('.img-geral2').hide().css('display', 'none');
        $('.img-geral2.active').show('slow').css('display', 'flex');
        $('.card.card2').css('height', 'auto');
    })
})
$('.img-bol22').click(function(){
    $('.img-geral2').show('slow').css('display', 'flex');
    $('.img-geral2.active').hide().css('display', 'none');
    $('.card.card2').css('height', '274pt');
})

$(document).ready(function(){
    $('.img-bol3').click(function(){
        $('.img-geral3').hide().css('display', 'none');
        $('.img-geral3.active').show('slow').css('display', 'flex');
        $('.card.card3').css('height', 'auto');
    })
})
$('.img-bol33').click(function(){
    $('.img-geral3').show('slow').css('display', 'flex');
    $('.img-geral3.active').hide().css('display', 'none');
    $('.card.card3').css('height', '274pt');
})

// Círculo interativo:

$(document).ready(function(){
    $('.up2').click(function(){
        $('.branco').hide().css('display', 'none');
        $('.vermelho').hide().css('display', 'none');
        $('.cinza').hide().css('display', 'none');
        $('.amarelo').show('slow').css('display', 'flex');
        $('.up2').hide().css('display', 'none');
        $('.up22').show('slow').css('display', 'flex');
        $('.left22').hide().css('display', 'none');
        $('.left2').show('slow').css('display', 'flex');
        $('.right22').hide().css('display', 'none');
        $('.right2').show('slow').css('display', 'flex');
    })
})
$('.up22').click(function(){
    $('.amarelo').hide().css('display', 'none');
    $('.vermelho').hide().css('display', 'none');
    $('.cinza').hide().css('display', 'none');
    $('.branco').show('slow').css('display', 'flex');
    $('.up22').hide().css('display', 'none');
    $('.up2').show('slow').css('display', 'flex');
})

$(document).ready(function(){
    $('.left2').click(function(){
        $('.branco').hide().css('display', 'none');
        $('.amarelo').hide().css('display', 'none');
        $('.cinza').hide().css('display', 'none');
        $('.vermelho').show('slow').css('display', 'flex');
        $('.up22').hide().css('display', 'none');
        $('.up2').show('slow').css('display', 'flex');
        $('.left2').hide().css('display', 'none');
        $('.left22').show('slow').css('display', 'flex');
        $('.right22').hide().css('display', 'none');
        $('.right2').show('slow').css('display', 'flex');
    })
})
$('.left22').click(function(){
    $('.vermelho').hide().css('display', 'none');
    $('.amarelo').hide().css('display', 'none');
    $('.cinza').hide().css('display', 'none');
    $('.branco').show('slow').css('display', 'flex');
    $('.left22').hide().css('display', 'none');
    $('.left2').show('slow').css('display', 'flex');
})

$(document).ready(function(){
    $('.right2').click(function(){
        $('.branco').hide().css('display', 'none');
        $('.amarelo').hide().css('display', 'none');
        $('.vermelho').hide().css('display', 'none');
        $('.cinza').show('slow').css('display', 'flex');
        $('.up22').hide().css('display', 'none');
        $('.up2').show('slow').css('display', 'flex');
        $('.left22').hide().css('display', 'none');
        $('.left2').show('slow').css('display', 'flex');
        $('.right2').hide().css('display', 'none');
        $('.right22').show('slow').css('display', 'flex');
    })
})
$('.right22').click(function(){
    $('.branco').show('slow').css('display', 'flex');
    $('.vermelho').hide().css('display', 'none');
    $('.amarelo').hide().css('display', 'none');
    $('.cinza').hide().css('display', 'none');
    $('.right22').hide().css('display', 'none');
    $('.right2').show('slow').css('display', 'flex');
})