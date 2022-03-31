<template>
  <div class="default-layout">
    <nav class="navbar flex-row items-center">
      <div class="logo bold text-42 mr-auto">
        Blog
      </div>
      <ul class="menu-items flex-row text-24">
        <li>
          <a>
            LogIn
          </a>
        </li>
        <li>
          <a>
            SignUp
          </a>
        </li>
      </ul>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="scss">
@import url('~/assets/scss/main.scss');
</style>
<style lang="scss" scoped>
.default-layout {
  width: 100%;
  min-height: 100vh;
  .navbar {
    width: 100%;
    height: rem(110);
    position: fixed;
    top: 0;
    left: 0;
    background: #efefef;
    color: #fff;
    padding: rem(15) rem(25);
    .menu-items {
      :not(:last-child) {
        margin-right: rem(10);
      }
    }
  }
}
</style>
