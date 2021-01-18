<template>
	<div>
		<section id="main">
			<img src="https://asyadesign.ru/wp-content/uploads/2019/03/i48.jpg" class="main_start_img wow fadeInRight">
			<div class="container wow fadeInUp">
				<h1>ASYA DESIGN</h1>

				<h1 class="smaller"> Воплощение <br>
					<span class="red">
						<vue-typer
			  :text='[ "самых смелых идей"]'
			  :repeat='Infinity'
			  :shuffle='true'
			  initial-action='erasing'
			  :pre-type-delay='70'
			  :type-delay='70'
			  :pre-erase-delay='2000'
			  :erase-delay='30'
			  erase-style='backspace'
			  :erase-on-complete='false'
			  caret-animation='blink'
			>
				
			</vue-typer> <br>
		</span>
		в пространстве
				</h1>

				<!-- <marquee-text  >
					<h1 class="running">Воплощение <span class="red">самых</span> смелых идей в 
						<span class="red">пространстве</span>.</h1>
				</marquee-text> -->
				<p class="subheader">ИНТЕРЬЕРНОЕ ДИЗАЙН-БЮРО</p>		
			</div>
		</section>


		<section id="projects">
			<div class="container">
				<p class="bigger-txt wow fadeInRight">ПРОЕКТЫ</p>
			</div>
			<div class="row proj-row" v-if="projects">
				<projItem v-for="item in projects" :projItem="item"/>
				
			</div>
			<section id="loader" v-else>
			<img src="../assets/img/loader.svg" alt="">
			</section>
		</section>

		<Unique />
		<Icons />
		<Contact />

	</div>
</template>

<script>
import projItem from '../components/ui/projItem.vue'
import Unique from '../components/Unique.vue'
import Icons from '../components/Icons.vue'
import Contact from '../components/Contact.vue'
import {mapGetters} from 'vuex'

	export default{
		components: {projItem, Unique, Icons, Contact},
		data(){
			return{
				hoverPause: false
			}
		},
		computed: {
			...mapGetters({ projects: "proj/getProjects"}),
		}
	}
</script>