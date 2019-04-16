<template>
  <div class="home">
    <div class="get-started">
      <router-link to="/agents">Get started</router-link> Find your agent today!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
.get-started {
  padding-top: 20px;
  font-size: 25px;
}
</style>
