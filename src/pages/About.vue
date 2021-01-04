<template>
	<div>
		<section id="main">
			<div class="container">
				<h1>Ася Кон</h1>

				<marquee-text  >
					<h1 class="running">Воплощение <span class="red">самых</span> смелых идей в 
						<span class="red">пространстве</span>.</h1>
				</marquee-text>
				<p class="subheader">ОБО МНЕ</p>		
			</div>
		</section>


		<section id="aboutimg"></section>

		<section id="unique">
		<div class="container">
			<div class="row">
				<div class="col-lg-5">
				<h2 class="ma-80"> Мой Девиз:
Дизайн, как религия, главное — верить в то, что делаешь! © </h2>
			</div>
			</div>
			<div class="row">
				<div class="col-lg-offset-2 col-lg-10 unique-box">
					<img src="../assets/img/asya.jpg" class="unique hidden-xs" style="opacity: .7;">
					<div class="col-lg-8">
						<p class="black-txt">Я дизайнер среды.
Образование:
Красный диплом по специальности «Дизайн среды», проходила курсы  в МГХПА им.Строганова, МГУДиТ. ​ Постоянно совершенствоваться мне помогают различные дизайнерские и архитектурные выставки, семинары по дизайну, архитектуре, искусству.
  Я  слежу за  событиями в мире дизайна и это дает мне  всегда быть  в курсе всех модных трендов.
<br><br>
О Себе и Дизайне:   Дизайн основывается на двух принципах: эстетика и эргономика. Эти два направления неразделимы, нарушение гармонии между ними сводит на нет все попытки сделать качественный дизайн.
Я считаю важным: максимально чувствовать желания заказчика, его потребности, при этом соблюдать тонкую грань между красотой и удобством, отражая индивидуальность человека в интерьере!
В своей работе я всегда стараюсь компенсировать не совсем удачные особенности объекта дизайна путем превращения его в арт-объект. </p>
					 	<button class="more-btn mbtn2">Проекты</button>
					</div> 
				</div>
			</div>

		</div>
	</section>


	<Contact />


	</div>
</template>


<script>
import Contact from '../components/Contact.vue'

	export default{
		components: {Contact}
	}
</script>