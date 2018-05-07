<template>
  <div>
    <div class="Login-left w-hidden-medium w-hidden-small w-hidden-tiny"></div>
    <div class="Login-Right">
      <div class="Login-LogoTop w-hidden-main"></div>
      <div class="Login-Box">
        <form method="POST" action="http://login-fake-api-bc.herokuapp.com/api/login/">
          <div class="Login-Fields">
            <h1>{{title}}</h1>
            <h2>{{subtitleLogin}}</h2>
            <input name="token" required>
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
            <button type="submit" class="button-yellow">Ingresar</button>
          </div>
          <div class="clearThird">
          </div>
        </form>
      </div>
      <div class="Login-Contrasena">
        <a href="#">Obtenga su contraseña</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      title: 'Inicio de sesión',
      subtitleLogin: 'Número de identificación',
      subtitlePass: 'Contraseña'
    }
  },
  methods: { }
}
</script>
