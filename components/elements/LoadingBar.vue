<template>
  <div v-if="showLoader" class="loading-bar flex-col justify-center items-center">
    <div class="spinner" />
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      require: false,
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      showLoader: this.loading
    }
  },
  watch: {
    loading (value) {
      this.showLoader = value
    }
  },
  methods: {
    start () {
      this.showLoader = true
    },
    finish () {
      this.showLoader = false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-bar {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  background-color: #fff;
}
.spinner {
  width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: $navbar-color;

  border-radius: 100%;
  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
  animation: sk-scaleout 1.0s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% { -webkit-transform: scale(0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
}
</style>
