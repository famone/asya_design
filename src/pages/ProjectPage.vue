<template>
		<div>


			<section id="main">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<p class="subheader">{{getSingleProj(itemSlug).title}}</p>	
					</div>	
				</div>
				<div class="row">
					<div class="col-lg-5">
						<table>
						    <tr>
						        <td><p class="grey">ПЛОЩАДЬ</p></td>
						        <td><p class="black">{{getSingleProj(itemSlug).area}} м²</p></td>
						    </tr>
						    <tr>
						        <td><p class="grey">ЛОКАЦИЯ</p></td>
						        <td><p class="black">{{getSingleProj(itemSlug).adress}}</p></td>
						    </tr>
						    <tr>
						        <td><p class="grey">СРОК <strong>•</strong> СДАЧА</p></td>
						        <td><p class="black">{{getSingleProj(itemSlug).time}}</p></td>
						    </tr>
						    <tr>
						        <td><p class="grey">БЮДЖЕТ</p></td>
						        <td><p class="black"><strong>{{getSingleProj(itemSlug).budget}} ₽</strong></p></td>
						    </tr>
						</table>
					</div>
				</div>
			</div>
		</section>




		<p class="bigger-txt">ПРОЕКТ</p>
		<section id="aboutimg" :style="{'background-image': 'url(' + getSingleProj(itemSlug).imgbg + ')'}">
		</section>


		<section id="text">
			<div class="container">
				<div class="col-lg-6 col-lg-offset-3">
					<p class="black-txt" v-html="getSingleProj(itemSlug).about"></p>
				</div>
			</div>
		</section>


		<section id="text">
			<div class="container">
				<div class="col-lg-6 col-lg-offset-3">
					<img :src="getSingleProj(itemSlug).plan" class="plan">
				</div>
			</div>
		</section>


		<section id="room" v-for="roomItem in getSingleProj(itemSlug).rooms">
			<div class="container">
				<div class="row">
					<div class="col-lg-4">
						<h2>{{roomItem.nazvanie}}</h2>
					</div>
					<div class="col-lg-8">
					<p class="black-txt">{{roomItem.opisanie}}</p>
					</div>
				</div>
				<div class="row img-row">
					<div class="col-lg-12" 
						 v-for="(roomImg, index) in roomItem.gallereya"
						 :class="{halfPage : index !== 0}">
						<img :src="roomImg" class="w-100">
					</div>
				</div>
				<!-- <div class="row img-row">
					<div class="col-lg-12">
						<img :src="roomItem.gallereya[0]" class="w-100">
					</div>
					<div class="col-lg-6">
						<img :src="roomItem.gallereya[1]" class="w-100">
					</div>
					<div class="col-lg-6">
						<img :src="roomItem.gallereya[2]" class="w-100">
					</div>
				</div> -->
			</div>
		</section> 

		</div>
</template>

<script>
import { mapGetters } from 'vuex'
	
	export default{
		data(){
			return{
				prItem: {},
			}
		},
		created(){
			this.itemSlug = this.$route.params.id
		},
		computed: {
			...mapGetters('proj', ['getSingleProj']),
		}
	}

</script>

