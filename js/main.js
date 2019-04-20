$(document).ready(function() {
	$("input[name='phone']").mask(" +7 (999) 999-99-99");

	$('.otvets .see_full').click(function(){
		var otvet = $(this).siblings('.otvet');
		$(this).html($(this).html() == 'Показать ответ <i class="icon-down-open"></i>' ? 'Скрыть ответ <i class="icon-up-open"></i>' : 'Показать ответ <i class="icon-down-open"></i>').toggleClass('active');
		otvet.slideToggle();
	});

	$('.see_all').click(function(){
		if (!$(this).hasClass('active')){
			$('.otvets .otvet').slideDown();
			$('.otvets .see_full').addClass('active').html('Скрыть ответ <i class="icon-up-open"></i>');
		} else {
			$('.otvets .otvet').slideUp();
			$('.otvets .see_full').removeClass('active').html('Показать ответ <i class="icon-down-open"></i>');
		};
		$(this).html($(this).html() == 'Показать все ответы <i class="icon-down-open"></i>' ? 'Скрыть все ответы <i class="icon-up-open"></i>' : 'Показать все ответы <i class="icon-down-open"></i>').toggleClass('active');
	});

	$('.callback_btn').click(function(){
		var data = $(this).data('theme');
		$('#callback form input[name="theme"]').val(data);
	});

	$('a[href^="#"].scroll_link').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
		event.preventDefault();
		$('html, body').stop().animate({
			scrollTop: target.offset().top
		}, 1000);
		}
	});
	$('.mobile_menu_toggle').click(function(){
		$('.mobile_menu').slideToggle();
	});
});
