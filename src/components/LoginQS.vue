<template>
  <div>
    <div class="Login-left w-hidden-medium w-hidden-small w-hidden-tiny"></div>
    <div class="Login-Right">
      <div class="Login-LogoTop w-hidden-main"></div>
      <div class="Login-Box">
        <div class="Login-Fields">
          <h1>{{title}}</h1>
          <h2>{{subtitleLogin}}</h2>
          <input v-model="input.token" required>
          <div class="clearTwice"></div>
          <h2>{{subtitlePass}}</h2>
          <input type="password" class="password">
        </div>
        <div class="clearThird">
        </div>
        <div class="Login-Teclado w-hidden-medium w-hidden-small w-hidden-tiny">
        </div>
        <div class="clearFourth">
        </div>
        <div class="Login-Ingresar">
          <button v-on:click="sendToken()" class="button-yellow">Ingresar</button>
        </div>
        <div class="clearThird">
        </div>
      </div>
      <div class="Login-Contrasena">
        <a href="#">Obtenga su contraseña</a>
      </div>
    </div>
  </div>
</template>

<script>
import LoginService from '@/services/LoginService'
export default {
  name: 'Login',
  data () {
    return {
      title: 'Inicio de sesión',
      subtitleLogin: 'Número de identificación',
      subtitlePass: 'Contraseña',
      login: [],
      input: {
        token: ''
      }
    }
  },
  methods: {
    async sendToken () {
      const response = await LoginService.fetchLogin(this.input.token)
      this.login = response.data
      this.$router.push({ name: 'LoginQS', query: { token: this.login.token } })
    }
  }
}
</script>
