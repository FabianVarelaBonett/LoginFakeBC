<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <form class="center">
      <div class="row">
        <div class="form-group col-md-12">
          <label for="exampleInputEmail1">Enter token</label>
          <input type="text" class="form-control" v-model="input.token" placeholder="Enter token" required>
          <br />
          <button v-on:click="sendToken()" class="btn btn-primary">Send</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LoginService from '@/services/LoginService'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login Bancolombia with response in Query String',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
