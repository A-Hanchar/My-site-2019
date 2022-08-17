<section id="popup-callback-header" class="modal-window mfp-hide">
	<div class="container bg-modal-light-blue p-4">
		<div class="row">
			<div class="col-12">
				<button title="Close (Esc)" type="button" class="mfp-close float-right text-black">×</button>
			</div>	
			<div class="logo-in-modal-window col-lg-3 d-lg-block d-none m-auto">
				<img src="/img/logo-dark.png">
			</div>
			<div class="form-in-modal-window pr-5 col-lg-9 col-12">
				<h2 class="text-center text-black font-weight-bold">Давайте я Вам перезвоню!</h2>
					<form class="" action="">
						<div class="row">
							<div class="m-auto col-6">
								<input class="text-black" type="text" name="name" placeholder="Имя">
                            </div>
                            <div class="m-auto col-6">
								<input class="text-black" type="text" name="phone" placeholder="Телефон *">
								<div class="error-phone text-red"></div>
							</div>
						</div>
						<input type="hidden" name="form-title" value="Заявка с сайта!">
                        <textarea class="text-black" name="message" placeholder="Ваше сообщение"></textarea>
                        <div class="text-right">
							<button type="submit" name="submit">Отправить <i class="fas fa-arrow-right"></i></button>
						</div>
					</form>
			</div>
		</div>	
	</div>	
</section>

<button id="btn-popup-error" href="#popup-error" type="button" class="popup-with-form d-none"></button>
<section id="popup-error" class="modal-window mfp-hide">
	<div class="container bg-modal-light-blue p-4">
		<div class="row">
			<div class="col-12">
				<button title="Close (Esc)" type="button" class="mfp-close float-right text-black">×</button>
			</div>	
			<div class="logo-in-modal-window col-lg-3 d-lg-block d-none m-auto">
				<img src="/img/logo-dark.png">
			</div>
			<div class="form-in-modal-window pr-5 col-lg-9 col-12">
				<h2 class="text-center text-black font-weight-bold">Ошибка отправки!</h2>
				<p class="text-center">Попробуйте еще раз или наберите на телефон указанный на сайте.</p>
			</div>
		</div>	
	</div>	
</section>