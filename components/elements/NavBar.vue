<template>
  <nav class="navbar flex-row items-center semi-bold" :class="{'scroll': scrollPosition > 0}">
    <NuxtLink class="logo text-36 mr-auto cursor-pointer" to="/">
      Blog
    </NuxtLink>
    <ul class="menu-items flex-row text-18">
      <NuxtLink v-if="!userDetails" class="secondary-btn-light" to="/register">
        SignUp
      </NuxtLink>
      <NuxtLink v-if="!userDetails" class="primary-btn-light" to="/login">
        LogIn
      </NuxtLink>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
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
  height: rem(75);
  position: sticky;
  top: 0;
  left: 0;
  background: #383838;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
  color: #fff;
  padding: rem(15) rem(25);
  .menu-items {
    :not(:last-child) {
      margin-right: rem(10);
    }
  }
}
</style>
