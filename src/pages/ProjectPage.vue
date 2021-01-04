<template>
		<div>
			<section id="main">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<p class="subheader">{{getProj.title}}</p>	
					</div>	
				</div>
				<div class="row">
					<div class="col-lg-5">
						<table>
						    <tr>
						        <td><p class="grey">ПЛОЩАДЬ</p></td>
						        <td><p class="black">{{getProj.area}} м²</p></td>
						    </tr>
						    <tr>
						        <td><p class="grey">ЛОКАЦИЯ</p></td>
						        <td><p class="black">{{getProj.adress}}</p></td>
						    </tr>
						    <tr>
						        <td><p class="grey">СРОК <strong>•</strong> СДАЧА</p></td>
						        <td><p class="black">{{getProj.time}}</p></td>
						    </tr>
						    <tr>
						        <td><p class="grey">БЮДЖЕТ</p></td>
						        <td><p class="black"><strong>{{getProj.budget}} ₽</strong></p></td>
						    </tr>
						</table>
					</div>
				</div>
			</div>
		</section>



		<p class="bigger-txt">ПРОЕКТ</p>
		<section id="aboutimg">
		</section>


		<section id="text">
			<div class="container">
				<div class="col-lg-6 col-lg-offset-3">
					<p class="black-txt" v-html="getProj.about"></p>
				</div>
			</div>
		</section>


		<section id="text">
			<div class="container">
				<div class="col-lg-6 col-lg-offset-3">
					<img :src="getProj.plan" class="plan">
				</div>
			</div>
		</section>


		<section id="room" v-for="roomItem in getProj.rooms">
			<div class="container">
				<div class="row">
					<div class="col-lg-4">
						<h2>{{roomItem.title}}</h2>
					</div>
					<div class="col-lg-8">
					<p class="black-txt">{{roomItem.about}}</p>
					</div>
				</div>
				<div class="row img-row">
					<div class="col-lg-12">
						<img :src="roomItem.imgs[0]" class="w-100">
					</div>
					<div class="col-lg-6">
						<img :src="roomItem.imgs[1]" class="w-100">
					</div>
					<div class="col-lg-6">
						<img :src="roomItem.imgs[2]" class="w-100">
					</div>
				</div>
			</div>
		</section>

		</div>
</template>

<script>
import { mapState } from 'vuex'
	
	export default{
		data(){
			return{
				prItem: {}
			}
		},
		computed: {
			...mapState('proj', ['projects']),
			getProj(){
				this.prItem = this.projects[0]
				return this.prItem
			}
		}
	}

</script>

