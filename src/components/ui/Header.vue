<template>
	<header :class="{stickyHeader: stickyHeader}">
		<div class="container">
			<div class="shapka">
				<router-link tag="a" to="/">
					<img src="../../assets/img/logo.png" alt="" class="logo">
				</router-link>
				<!-- <ul class="menu hidden-xs hidden-sm">
					<router-link tag="li" :to="nav.link" v-for="nav in navigation">
						{{nav.text}}
					</router-link>
				</ul> -->
				<a href="tel:+79055060537" class="black-link hidden-xs hidden-sm">
					+7 905 506-05-37
				</a>
				<a href="mailto:asya-design@mail.ru" class="black-link hidden-xs hidden-sm">
					asya-design@mail.ru
				</a>
				<div class="socials2 hidden-xs hidden-sm">
					<a href=""><img src="../../assets/img/sc11.svg" alt=""></a>
					<a href=""><img src="../../assets/img/sc22.svg" alt=""></a>
					<a href=""><img src="../../assets/img/sc33.svg" alt=""></a>
				</div>
				<div class="mob-btn" :class="{acMenu: acMenu}" @click="acMenu = !acMenu">
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
		<div class="mobile-menu text-center" :class="{mobSlide: acMenu}">
			<div>
				<ul  @click="acMenu = false" class="text-center">
				<router-link tag="li" :to="nav.link" v-for="nav in navigation">
						{{nav.text}}
					</router-link>
			</ul>
			<br>
			<a href="tel:+79055060537" class="black-link" style="color: #fff;">
					+7 905 506-05-37
				</a>
				<br><br>
				<a href="mailto:asya-design@mail.ru" class="black-link" style="color: #fff;">asya-design@mail.ru</a>
			</div>
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
						{link: '/uslugi', text: 'Виды работ'},
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