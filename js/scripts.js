
// Scroll animado hasta el id del enlace
$('a.ira[href^="#"]').click(function(e){
	e.preventDefault();
	$("#header_nav li.activo").removeClass('activo');
	$(this).parent().addClass('activo');
	var target = this.hash;
	var $target = $(target);
	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 900, 'swing', function () {
		//window.location.hash = target;
	});
});