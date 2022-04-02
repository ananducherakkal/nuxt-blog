<template>
  <div class="default-layout">
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
import NavBar from '~/components/elements/NavBar'
export default {
  name: 'DefaultLayout',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import url('~/assets/scss/main.scss');
</style>
<style lang="scss" scoped>
.default-layout {
  width: 100%;
  min-height: 100vh;
}
</style>
