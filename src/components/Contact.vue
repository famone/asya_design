<template>
	<section id="contact">
		<div class="container">
			<div class="col-lg-6 reaady">
				<div>
					<h2 class="col-wh">ОСТАЛИСЬ ВОПРОСЫ ИЛИ ГОТОВЫ <span>НАЧАТЬ ПРОЕКТ</span>?</h2>
				<div class="socials">
					<a href=""><img src="../assets/img/sc1.svg" alt=""></a>
					<a href=""><img src="../assets/img/sc2.svg" alt=""></a>
					<a href=""><img src="../assets/img/sc3.svg" alt=""></a>
				</div>
				</div>
			</div>
			<div class="col-lg-6">
				<h2>Или отправьте <br><span>письмо на почту</span></h2>
				<form>
					<input type="text" placeholder="Ваше имя" v-model="name" :class="{errorInp : $v.name.$dirty && !$v.name.required}">
					<input type="text" placeholder="Ваше e-mail" v-model="email" :class="{errorInp : ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}">
					<input type="text" placeholder="Ваше телефон" v-mask="'+7 (###) ###-##-##'" v-model="tel" :class="{errorInp : ($v.tel.$dirty && !$v.tel.required) || ($v.tel.$dirty && !$v.tel.minLength)}" >
					<textarea placeholder="Сообщение" v-model="message"></textarea>
					<div class="responsik">
						<button class="submit" @click.prevent="submitForm()">Отправить </button>
						<p >{{mesResult}}</p>
					</div>
				</form>
				
			</div>
		</div>
	</section>
</template>


<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import axios from 'axios'

	export default{
		data(){
			return{
				name: '',
				email: '',
				tel: '',
				message: '',
				mesResult: '',
				status: ''
			}
		},
		methods: {
			submitForm(){
				if(this.$v.$invalid) {
					this.$v.$touch();
					return;
				}


				let emailBody = {
					your_name: this.name,
					your_email: this.email,
					your_phone: this.tel,
					textarea_545: this.message
				}


					var form2 = new FormData();

					for (var field in emailBody){
						form2.append(field, emailBody[field]);
					};

					axios
	            	.post('http://asyadesign.ru/wp-json/contact-form-7/v1/contact-forms/211678/feedback', form2)
	                .then((response) => {
	                	console.log(response)
	                    this.mesResult = response.data.message

	                    this.name = '';
	                    this.tel = '';
	                    this.email = '';
	                    this.message = '';
	                })
	                .catch((error) => {
	                   alert('Произошла ошибка')
	                });



			}

			

			
		},
		validations: {
			name: {
				required
			},
			email:{
				required,
				email
			},
			tel: {
				required,
				minLength: minLength(18)
			}
		}
	}
</script>

<style>
.errorInp{
	border-color: red;
}
.responsik{
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.responsik p{
	margin-left: 30px;
}
</style>