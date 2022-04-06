<template>
  <div class="user-menu">
    <img src="/images/user-placeholder.png" class="user-image img-cover cursor-pointer" @click="toggleMenu()">
    <div v-if="menuOpen" class="user-menu">
      <div class="menu-item">
        somthing
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu () {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.user-menu {
  position: relative;
  background-color: transparent;
  width: rem(30);
  height: rem(30);
  .user-image {
    border-radius: 50%;
  }
  .user-menu {
    position: absolute;
    top: 110%;
    right: rem(-10);
    width: rem(150);
    padding: rem(30);
    background-color: #fff;
    box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
    border-radius: rem(3);
  }
}
</style>
