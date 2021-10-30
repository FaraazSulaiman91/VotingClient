<template>
  <div>
    <h1>Welcome to the custom voter</h1>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  created()
  {
    this.$router.push('session');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
