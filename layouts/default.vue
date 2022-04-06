<template>
  <div class="default-layout">
    <NavBar />
    <div class="main-content">
      <SideNavBar />
      <Nuxt />
    </div>
    <LoadingBar :loading="loading" />
  </div>
</template>

<script>
import LoadingBar from '~/components/elements/LoadingBar'
import NavBar from '~/components/elements/NavBar'
import SideNavBar from '~/components/navbar/SideNavBar'
export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    SideNavBar,
    LoadingBar
  },
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    this.loading = false
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
  .main-content {
    display: flex;
    flex-direction: column;
    padding-left: rem(73);
    background-color: $background-color;
  }
}
</style>
