<!DOCTYPE html>
<html lang="ru">
<head>
	<title>Спасибо - с уважением Артём Гончар</title>
	<meta name="description" content="">	
	<?php
        include("sections/functions-for-site.php");
		include("sections/meta-tags.php");
		include("sections/favicon.php");
		include("sections/css-files.php");
    ?>	
</head>
<body>
	<?php
        include("sections/preloader.php");
    ?>
	<section class="page-thanks overflow-hidden vh-100">
		<div class="container h-100">
			<div class="position-relative d-table h-100 w-100 m-auto">
				<div class="row d-table-cell align-middle text-center">
					<div class="float-right d-md-none col-12">
						<img class="mw-100" src="img/thanks-page-orrange.png">
					</div>
					<div class="float-left col-md-6 col-12">
						<h1>Спасибо!</h1>
						<p>Я обязательно свяжусь с вами в ближайшее время.</p> 
						<p>Вы можете вернуться на <a class="font-weight-bold text-light-brown link-main-page btn" href="/">главную страницу</a> или же свезаться со мной в одной из следующих социальных сетей:</p>
						<div class="first-section-social-link social-enlargement">
							<a href="" target="_blank" class="text-center text-white bg-social-blue rounded-circle vkHref">
								<i class="fab fa-vk"></i>
							</a>
							<a href="" target="_blank" class="text-center text-white bg-social-light-blue rounded-circle telegramHref">
								<i class="fab fa-telegram-plane"></i>
							</a>
							<a href="" target="_blank" class="text-center text-white bg-social-violet rounded-circle viberChatHref">
								<i class="fab fa-viber"></i>
							</a>	
							<a href="" target="_blank" class="text-center text-white bg-social-ping rounded-circle instagramHref">
								<i class="fab fa-instagram"></i>
							</a>
							<a href="" target="_blank" class="text-center text-white bg-social-light-blue rounded-circle skypeChatHref">
								<i class="fab fa-skype"></i>
							</a>
						</div>	
					</div>
					<div class="float-right col-md-6 d-md-block d-none">
						<img class="mw-100" src="img/thanks-page-orrange.png">
					</div>
				</div>	
			</div>
		</div>	
	</section>	
	<?php
        include("sections/modal-windows.php");
		include("sections/js-files.php");
    ?>
</body>
</html>