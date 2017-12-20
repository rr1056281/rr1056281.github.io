$('#procure').click(function(){
	$('.como-funciona-links-detalhes').removeClass("active");
	$('#img-como-funciona').attr('src', 'images/place/index/how_it_works_section/Procure.jpg');
	$('#titulo-como-funciona h4').text('PROCURE');
	$('#titulo-como-funciona h3').text('Onde você quer ir?');
	$('#texto-como h4').text('Diga pra gente e indicaremos o melhor lugar para estacionar.');
	$(this).addClass("active");
});
$('#reserve').click(function(){
	$('.como-funciona-links-detalhes').removeClass("active");
	$('#img-como-funciona').attr('src', 'images/place/index/how_it_works_section/Reserve.jpg');
	$('#titulo-como-funciona h4').text('RESERVE');
	$('#titulo-como-funciona h3').text('Escolheu a vaga perfeita?');
	$('#texto-como h4').text('Agora é só preencher os dados. Não se esqueça de conferir o e-mail com o voucher do serviço!');
	$(this).addClass("active");
});
$('#estacione').click(function(){
	$('.como-funciona-links-detalhes').removeClass("active");
	$('#img-como-funciona').attr('src', 'images/place/index/how_it_works_section/Estacione.jpg');
	$('#titulo-como-funciona h4').text('ESTACIONE');
	$('#titulo-como-funciona h3').text('Apresente o comprovante no estacionamento no dia da utilização e pronto.');
	$('#texto-como h4').text('Apresente o comprovante no estacionamento no dia da utilização e pronto. Com o Lince você não precisa se preocupar com nada quando for estacionar. ');
	$(this).addClass("active");
});
$(document).ready(function(){
	hideSearchBar();
	$('#conteudo-pagina').scroll(function(){
		if ($('#conteudo-pagina').scrollTop()>400) {
			showSearchBar();
		}else{
			$('#local-google-header').blur();
			hideSearchBar();
		}
	});
});
$('#lince01').hover(function(){
	$('#texto-lince h3').text('Simples');
	$('#texto-lince h4').text('Encontre a vaga mais próxima em apenas dois cliques.');
	$('.div-hover').removeClass('active');
	$(this).addClass('active');
});
$('#lince02').hover(function(){
	$('#texto-lince h3').text('Olá, você sabe quem nós somos?');
	$('#texto-lince h4').html('O Lince chegou para descomplicar sua vida. Com a gente é <i>"no stress"</i>: com dois cliques você acha e reserva uma vaga de estacionamento, sem pagar nada a mais por isso. <br>Simples, não?<br>E nossa rede de parceiros não para de crescer! Tudo feito para você!');
	$('.div-hover').removeClass('active');
	$(this).addClass('active');
});
$('#lince03').hover(function(){
	$('#texto-lince h3').text('Economiza tempo');
	$('#texto-lince h4').text('Não perca tempo procurando uma vaga.');
	$('.div-hover').removeClass('active');
	$(this).addClass('active');
});
$('#lince04').hover(function(){
	$('#texto-lince h3').text('Fácil de pagar');
	$('#texto-lince h4').text('Nem precisa de dinheiro, pague direto pelo celular.');
	$('.div-hover').removeClass('active');
	$(this).addClass('active');
});
$('#lince05').hover(function(){
	$('#texto-lince h3').text('Descomplica');
	$('#texto-lince h4').text('Menos estresse e mais facilidade ao estacionar.');
	$('.div-hover').removeClass('active');
	$(this).addClass('active');
});
var options = {
    componentRestrictions: {country: 'br'}
};

//Auto completa o text box de pesquisa
var input = document.getElementById('local-google');
autocomplete = new google.maps.places.Autocomplete(input, options);

autocomplete.addListener('place_changed', function(){
    searchLocal("local-google", autocomplete);
});

//Evento que pesquisa ao clicar no botão link-pesquisa
$("#link-pesquisa").click(function(){
    searchLocal("local-google", autocomplete);
});

//Evento que pesquisa ao dar enter no autocomplete na tela inicial
google.maps.event.addDomListener(input, 'keyup', function(e) {
    if (e.keyCode == 13) { 
        searchLocal("local-google", autocomplete);
    }
});
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('#local-google').click(function() {
        $('body').scrollTop($(this).offset().top);
    });
}
var content = [
    '<div class="text-center">',
    'Por favor, verifique o seu email e nome.',
    '</div>',
  ].join('');

$('#form-newsletter').popover({ 
	content: content, 
	html: 'true',
	placement: "top",
	trigger: "manual"
});
$('#form-newsletter').click(function(){
	$('#form-newsletter').popover('hide');
});
$( "#form-newsletter" ).validate({
	submitHandler: function(form) {
		$.ajax({
	        cache: false,
	        type: 'get',
	        dataType: 'json',
	        url: "/email/subscribe/newsletter",
	        data: { 
				email:  	$("#newsletter-email").val(),
				name: 		$("#newsletter-name").val(),
	        },
	        success: function (data) {
	    		if (data==false) {
	    			$( "#form-newsletter" ).popover('toggle');
	    		}else{
	    			$( "#form-newsletter" ).addClass("hidden");
	    			$( "#sucesso-newsletter" ).removeClass("hidden");
	    		}
	        },
	        error: function (data) {
	        	console.log(data);
	        }
		})
	}
});
//# sourceMappingURL=index.js.map
