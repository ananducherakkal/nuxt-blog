<template>
  <div v-if="error" class="input-error first-capitalize text-12">
    <slot />
  </div>
  <div v-else class="input-error" />
</template>

<script>
export default {
  props: {
    error: {
      require: false,
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped>
.input-error {
  color: red;
  margin: rem(5);
  min-height: rem(15);
}
</style>
