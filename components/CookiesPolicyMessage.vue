<template>
    <div>
        <section v-show="messageCookiePolicy">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 col-md-4">
						<div class="box-cookies">
							<h5 class="pt-2">Política de cookies</h5>
							<p>Navegando en este sitio web, acepta el uso de cookies que nos permiten ofrecerle una mejor experiencia de usuario.</p>
							<button type="button" class="btn btn-brand" @click="setCookiePolicy">Aceptar</button>
							<nuxt-link to="/politica-de-cookies" class="btn btn-light">Leer más</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
</template>

<script>
    import Cookies from 'js-cookie'
    
    export default {
        data() {
			return {
				messageCookiePolicy: true
			}
		},
        created() {
			this.getCookiePolicy()
		},
		methods: {
			setCookiePolicy() {
				const cookiePolicy = 'cookiePolicyHasBeenAccepted'
				Cookies.set('cookie_policy', cookiePolicy, { expires: 60, path: '' })
				this.messageCookiePolicy = false
			},
			getCookiePolicy() {
				if(Cookies.get('cookie_policy')) {
					this.messageCookiePolicy = false
				} else {
					this.messageCookiePolicy = true
				}
			}
		},
    }
</script>

<style scoped>
.box-cookies {
	z-index: 1000;
	position: fixed;
	bottom: 10px;
	left: 20px;
	right: 20px;
	background-color: #333;
	opacity: 0.8;
	filter: alpha(opacity=20);
	padding: 10px 20px 10px 20px;
	color: #fff;
	border-radius: 0.5rem;
	box-shadow: 10px 10px 15px rgba(73, 78, 92, 0.1);
}
</style>