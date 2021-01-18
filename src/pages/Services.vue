<template>
	
	<div>
		<section id="main">
			<div class="container">
				<h1>Интерьеры вне времени</h1>

				<marquee-text  >
					<h1 class="running">Когда я <span class="red">создаю интерьер</span>, думаю о том, как он может меняться
и быть <span class="red">актуальным  надолго</span>.</h1>
				</marquee-text>
				<p class="subheader">ВИДЫ РАБОТ</p>		
			</div>
		</section>

		<Icons />


		<section id="vars">
			<div class="container">
				<div class="col-lg-12">
					<h2>ВАРИАНТЫ ПРОЕКТОВ</h2>
				</div>

				<div class="col-lg-4" v-for="(varik, index) in vars">
					<div class="var-proj" :class="{actVar: varik.active}">
						<div class="plus-btn" @click="activateVarik(index)"></div>
						<img :src="varik.img" alt="">
						<h4>{{varik.title}}</h4>
						<div class="var-body">
							<ul>
								<li v-for="item in varik.terms"><p class="small-white">{{item}}</p></li>
							</ul>
							<button class="more-btn" v-scroll-to="'#contact'">Обсудить проект</button>
						</div>
					</div>
				</div>
			</div>
		</section>


		<Contact />

	</div>

</template>

<script>
import Icons from '../components/Icons.vue'
import Contact from '../components/Contact.vue'

export default{
	components: {Icons, Contact},
	methods: {
		activateVarik(index){
			this.vars[index].active = !this.vars[index].active
		}
	},
	data(){
		return{
			vars: [
				{
					img: require('../assets/img/tr1.svg'),
					title: 'Полный',
					active: true,
					terms: [
						'Обмерный план помещения.',
						'Техническое задание на основе листа пожеланий заказчика.',
						'План расстановки мебели, сантехники и оборудования с функциональным зонированием помещений.',
						'План привязки сантехники.',
						'Экспликация помещений.',
						'План монтажа/демонтажа перегородок и проемов.',
						'План напольных покрытий.',
						'План потолков.',
						'План освещения с группами включения.',
					]
				},
				{
					img: require('../assets/img/tr2.svg'),
					title: 'Концепт',
					active: false,
					terms: [
						'Обмерный план помещения.',
						'Техническое задание на основе листа пожеланий заказчика.',
						'План расстановки мебели, сантехники и оборудования с функциональным зонированием помещений.',
						'План привязки сантехники.',
						'Экспликация помещений.',
						'План монтажа/демонтажа перегородок и проемов.',
						'План напольных покрытий.',
						'План потолков.',
						'План освещения с группами включения.',
					]
				},
				{
					img: require('../assets/img/tr3.svg'),
					title: 'Все включено',
					active: false,
					terms: [
						'Обмерный план помещения.',
						'Техническое задание на основе листа пожеланий заказчика.',
						'План расстановки мебели, сантехники и оборудования с функциональным зонированием помещений.',
						'План привязки сантехники.',
						'Экспликация помещений.',
						'План монтажа/демонтажа перегородок и проемов.',
						'План напольных покрытий.',
						'План потолков.',
						'План освещения с группами включения.',
					]
				}
			]
		}
	}
}
</script>