<template>
	<div>

		<section id="main">
			<div class="container">
				<h1>ASYA DESIGN</h1>

				<!-- <marquee-text  >
					<h1 class="running">Воплощение <span class="red">самых</span> смелых идей в 
						<span class="red">пространстве</span>.</h1>
				</marquee-text> -->
				<p class="subheader">ПРОЕКТЫ</p>		
			</div>
		</section>




		<section id="projects" v-if="projects">
			<div class="row proj-row">
				<projItem v-for="item in projects" :projItem="item"/>
			</div>
		</section>

		<section id="loader" v-else>
			<img src="../assets/img/loader.svg" alt="">
		</section>

		<Contact />


	</div>
</template>

<script>
import projItem from '../components/ui/projItem.vue'
import Contact from '../components/Contact.vue'
import {mapGetters} from 'vuex'

	export default{
		components: {projItem, Contact},
		computed: {
			...mapGetters({ projects: "proj/getProjects"}),
		}
	}
	
</script>