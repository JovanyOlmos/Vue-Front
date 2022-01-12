<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <router-link class="link" :to="{name: 'products'}">Lista</router-link>
      <router-link class="link" :to="{name: 'add-product'}">Nuevo</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.link {
  margin: 2rem;
}
</style>
