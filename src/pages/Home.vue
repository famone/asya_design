<template>
	<div>
		<section id="main">
			<img src="https://asyadesign.ru/wp-content/uploads/2019/02/architect-firm-05.jpg" class="main_start_img">
			<div class="container">
				<h1>ASYA DESIGN</h1>

				<marquee-text  >
					<h1 class="running">Воплощение <span class="red">самых</span> смелых идей в 
						<span class="red">пространстве</span>.</h1>
				</marquee-text>
				<p class="subheader">ИНТЕРЬЕРНОЕ ДИЗАЙН-БЮРО</p>		
			</div>
		</section>


		<section id="projects">
			<div class="container">
				<p class="bigger-txt">ЛУЧШИЕ</p>
				<p class="big-txt ">ПРОЕКТЫ</p>
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