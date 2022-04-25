<template>
  <div class="wrapper">
    <static-part />
  </div>
  <AppDocker :currentIndex="0" />
</template>

<script>
import StaticPart from './StaticPart.vue'
import AppDocker from '../../components/AppDocker.vue'
export default {
  name: 'HomePage',
  components: { StaticPart, AppDocker }
}
</script>

<style scoped lang="scss">
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem 0.1rem 0.18em;
}
</style>
