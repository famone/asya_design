<template>
	<router-link tag="div" :to="/projects/ + projItem.slug" class="col-lg-3 proj-item" :style="{'background-image': 'url(' + projItem.imgbg + ')'}"> 
		<div>
			<h3>{{projItem.area}}м²</h3>
			<p class="white-txt">{{projItem.title}}</p>
			<router-link tag="button" :to="/projects/ + projItem.slug" class="more-btn">Подробнее </router-link>
		</div>
	</router-link>
</template>


<script>
	export default{
		props: {
			projItem: {
				required: true,
				type: Object
			}
		}
	}
</script>