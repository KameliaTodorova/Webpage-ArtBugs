$(window).load(function(){	
	$('#menu-toggle').click(function(e){
		e.preventDefault();	
		var mWidth = $('#main-menu').width();		
		if( $('html').hasClass('menu-opened') ){				
			$('#main-menu').animate({right: -mWidth},function(){
				$('html').removeClass('menu-opened');
			});
		}else{
			$('html').addClass('menu-opened');
			$('#main-menu').animate({right: 0},function(){
				//
			}); 
		}		
	});
}); 