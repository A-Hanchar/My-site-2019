var $=jQuery.noConflict();
var mobileDevice = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4));

/* preloader ?????? ?????????? */	
jQuery(window).load(function(){
	$("#preloader").fadeOut("slow");
});	

/* E-mail ?? ?????????????? ?????? ?????????? */
$(document).ready(function(){
	$('.phoneLife').html('+375 (25) 607-17-87');
	$('.phoneLife').attr('href', 'tel:+375256071787');
	
	$('.domenMail').html('info@artemgonchar.com');
	$('.domenMail').attr('href', 'mailto:info@artemgonchar.com');
	
	$('.myMail').html('tema.gon4ar@mail.ru');
	$('.myMail').attr('href', 'mailto:tema.gon4ar@mail.ru');
	
	$('.vkHref').attr('href', 'https://vk.com/tema.gon4ar');
	
	$('.instagramHref').attr('href', 'https://www.instagram.com/tema_igorevich/');
	
	$('.telegramHref').attr('href', 'https://t.me/ArteGon');
	
	$('.viberChatHref').attr('href', 'viber://chat?number=375256071787');
	
	$('.skypeName').html('alternativa500');
	$('.skypeChatHref').attr('href', 'skype:alternativa500?chat');
	$('.skypeInfoHref').attr('href', 'skype:alternativa500?userinfo');
}); 	
	
// ?????????????? ?????????????????? ???? ????????????
$(document).ready(function(){
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
		if($(this).attr('href')){
			e.preventDefault();
			var heightNav = $('header').height();
			var t = 1000;
			var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
			$('html,body').stop().animate({ 
				scrollTop: $(d).offset().top - heightNav
				},t);
		}
    });
});

/* ?????????????????? ???????????? ( ???????????????? ???????????? ?? ?????????????????? ?????? ???????????????????? )*/
$(function() {
	var scrolled;
	window.onscroll = function() {
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if(scrolled > 50){
			$('header').addClass('background-header');
			$(window).innerWidth() > 767 ? $('.header-contacts button.header-callback').show(1000) : false;
		}else{ 
			$('header').removeClass('background-header');
			$(window).innerWidth() > 767 ? $('.header-contacts button.header-callback').hide(1000) : false;
		}
	}
});	

/* ?????????? ???????????????? ???????? */
$(function() { 
	var btnMenu = $('button.btn-nav-list');
	
	btnMenu.on('click', function(){
		$('.navigation-hidden').animate({
			top: 0
		},500)
	});
	
	if($(window).innerWidth() > 991){
		$('a.btn-close').on('click', function(){
			$('.navigation-hidden').animate({
				top: '-100%'
			},500)		
		})	
	}else{
		$('a.btn-close').on('click', function(){
			$('.navigation-hidden').animate({
				top: '-2000px'
			},500)		
		})
	}
	
	$('.navigation-hidden ul li.item-for-href').on('click', function(){
		if($(window).innerWidth() <= 991){
			$('.navigation-hidden').animate({
				top: '-2000px'
			},1000)	
		}	
	})
	
	$(document).mouseup(function (e){ // ?????????????? ?????????? ???? ??????-??????????????????
		if (!$('.navigation-hidden ul').is(e.target) // ???????? ???????? ?????? ???? ???? ???????????? ??????????
		    && $('.navigation-hidden ul').has(e.target).length === 0) { // ?? ???? ???? ?????? ???????????????? ??????????????????		
				if($(window).innerWidth() > 991){
					$('.navigation-hidden').animate({
						top: '-100%'
					},500) // ???????????????? ??????
				}else{
					$('.navigation-hidden').animate({
						top: '-2000px'
					},500) // ???????????????? ??????
				}
		}
	});
});


// ???????????? ????????????
function up() {  
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
	if(top > 0) {  
		window.scrollBy(0,((top + 100) / - 10 ));  
		t = setTimeout('up()',20);  
	}else clearTimeout(t);  
	return false;  
}


//?????????????????? ?????????????????? ???????????? ???????? ?????? ??????????????
$(document).ready(function () {
 
    function Scroll_block(){
		var heightHeader = $('header').height();	
        var scroll_top = $(document).scrollTop() + heightHeader;	
        $("nav.navbar ul li.item-for-href a").each(function(){
            var hash = $(this).attr("href");
            var target = $(hash);
            if (target.offset().top <= scroll_top && target.offset().top + target.outerHeight() > scroll_top) {
                $("nav.navbar ul li.item-for-href a.active").removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).parent().removeClass("active");
            };
        });
    }

    $(document).on("scroll", Scroll_block);
 
});

// popup
$(function(){	    
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		focus: '#name'
	});
	
	$('.modal-form a.modal-form-close').click(function(){
		$('section#form-popup').remove();
	});
});
