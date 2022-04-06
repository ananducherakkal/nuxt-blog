<template>
  <nav class="navbar flex-row items-center semi-bold" :class="{'scroll': scrollPosition > 0}">
    <NuxtLink class="logo text-20 mr-auto cursor-pointer uppercase" to="/">
      Blog
    </NuxtLink>
    <div class="menu-items flex-row items-center text-16">
      <NuxtLink v-if="!userDetails" to="/login">
        LogIn
      </NuxtLink>
      <NuxtLink v-if="!userDetails" class="signup-btn secondary-btn-light" to="/register">
        SignUp
      </NuxtLink>
      <UserMenu v-if="userDetails" />
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import UserMenu from '~/components/navbar/UserMenu'

export default {
  components: {
    UserMenu
  },
  data () {
    return {
      scrollPosition: 0
    }
  },
  computed: {
    ...mapGetters({
      userDetails: 'user/userDetails'
    })
  },
  beforeMount () {
    window.addEventListener('scroll', this.windowScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.windowScroll)
  },
  methods: {
    windowScroll () {
      this.scrollPosition = window.scrollY
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: rem(60);
  position: sticky;
  top: 0;
  left: 0;
  background: $navbar-color;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
  color: $navbar-text-color;
  padding: rem(5) rem(12);
  z-index: 20;
  .menu-items {
    height: 100%;
    :not(:last-child) {
      margin-right: rem(15);
    }
    .signup-btn {
      padding: rem(5) rem(10);
      line-height: 1.3;
      text-transform: none;
    }
  }
}
</style>
