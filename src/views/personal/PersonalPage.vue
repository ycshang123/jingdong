<template>
  <h2>我的</h2>
  <router-link to="login">
    <h2>登录</h2>
  </router-link>
  <AppDocker :currentIndex="3" />
</template>

<script>
import AppDocker from '../../components/AppDocker.vue'
export default {
  name: 'PersonPage',
  components: {
    AppDocker
  }
}
</script>

<style scoped lang="scss">
</style>
