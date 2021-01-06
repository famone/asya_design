<template>
	<header :class="{stickyHeader: stickyHeader}">
		<div class="container">
			<div class="shapka">
				<router-link tag="a" to="/">
					<img src="../../assets/img/logo.png" alt="" class="logo">
				</router-link>
				<ul class="menu hidden-xs hidden-sm">
					<router-link tag="li" :to="nav.link" v-for="nav in navigation">
						{{nav.text}}
					</router-link>
				</ul>
				<a href="tel:+79055060537" class="black-link hidden-xs hidden-sm">
					<img src="../../assets/img/whats.svg" alt="">+7 905 506-05-37
				</a>
				<div class="mob-btn hidden-md hidden-lg" :class="{acMenu: acMenu}" @click="acMenu = !acMenu">
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
		<div class="mobile-menu" v-if="acMenu">
			<ul  @click="acMenu = false">
				<router-link tag="li" :to="nav.link" v-for="nav in navigation">
						{{nav.text}}
					</router-link>
			</ul>
		</div>
	</header>
</template>

<script>
	export default{
		data(){
			return{
				acMenu: false,
				stickyHeader: false,
				navigation: [
						{link: '/uslugi', text: 'Улсуги'},
						{link: '/projects', text: 'Проекты'},
						{link: '/obo-mne', text: 'Обо Мне'},
						{link: '/contacti', text: 'Контакты'},
				]
			}
		},
		mounted(){
			let pageHeight = document.documentElement.scrollHeight;

			window.addEventListener('scroll', ()=>{
				let winScroll = document.documentElement.scrollTop;

				if(winScroll > 5){
					this.stickyHeader = true
				}else{
					this.stickyHeader = false
				}
			})
		}
	}
</script>