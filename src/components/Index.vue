<template>
    <div class="hello">
        <h2>{{title}}</h2>
        <p>{{msg}}</p>
        <div class="btn-group">
            <router-link class="btn btn-primary" to="/Login">Login with REST response</router-link>
            <router-link class="btn btn-primary" to="/LoginQS">Login with query string</router-link>
            <router-link class="btn btn-primary" to="/LoginRes">Login with response in Web</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      title: 'Select logins',
      msg: 'Choice a logion option'
    }
  },
  methods: { }
}
</script>

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
  color: #FFFFFF;
}
</style>
