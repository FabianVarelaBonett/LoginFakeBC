<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <form class="center" method="POST" action="http://login-fake-api-bc.herokuapp.com/api/login/">
      <div class="row">
        <div class="form-group col-md-12">
          <label for="exampleInputEmail1">Enter token</label>
          <input type="text" class="form-control" name="token" placeholder="Enter token" required>
          <br />
          <button type="submit" class="btn btn-primary">Send</button>
        </div>
      </div>
    </form>
    <br />
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login Bancolombia with response in screen'
    }
  },
  methods: { }
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
