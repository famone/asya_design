<template>
	<section id="icons">
		<div class="container">
			<div class="col-lg-12">
				<h2 class="col-wh">Особенности <span>работы</span></h2>
			</div>
			<div class="col-lg-3" v-for="item in unique"> 
				<div class="icon-box">
					<img :src="item.img" alt="">
					<h4>{{item.name}}</h4>
					<p class="white-txt" v-html="item.text"></p>
				</div>
			</div>
		</div>
	</section>
</template>




<script>
import {mapGetters} from 'vuex'
	
	export default{
		computed: {
			...mapGetters({ unique: "proj/getUnique"}),
		}
	}

</script>