<template>
	<div>

		<section id="main">
			<div class="container">
				<h1>ASYA DESIGN</h1>

				<marquee-text  >
					<h1 class="running">Воплощение <span class="red">самых</span> смелых идей в 
						<span class="red">пространстве</span>.</h1>
				</marquee-text>
				<p class="subheader">ПРОЕКТЫ</p>		
			</div>
		</section>


		<section id="projects">
			<div class="row proj-row">
				<projItem v-for="item in 8" />
			</div>
		</section>

		<Contact />


	</div>
</template>

<script>
import projItem from '../components/ui/projItem.vue'
import Contact from '../components/Contact.vue'

	export default{
		components: {projItem, Contact}
	}
</script>