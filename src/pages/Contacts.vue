<template>
	<div>
		<section id="main">
			<div class="container">
				<h1>КОНТАКТЫ</h1>
						<p class="subheader"><a href="tel:+79055060537">+7 905 506-05-37</a></p>
						<p class="subheader"><a href="mailto:asya-design@mail.ru">asya-design@mail.ru</a></p>	
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