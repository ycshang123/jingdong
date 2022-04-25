<template>
  <div>
    <h2>我的</h2>
    <AppDocker :currentIndex="3" />
  </div>
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
