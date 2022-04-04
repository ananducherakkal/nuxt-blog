<template>
  <div class="submit-btn flex-cl">
    <div v-if="loading" class="loading">
      <span class="icon-s margin-s">
        <LoadingCircleIcon />
      </span> Loading..
    </div>
    <button
      type="submit"
      :class="secondary ? 'secondary-btn' : 'primary-btn'"
      :disabled="disabled || loading"
      tabindex="1"
      @click="$emit('click')"
    >
      <slot />
    </button>
  </div>
</template>

<script>
import LoadingCircleIcon from '~/components/svg/LoadingCircleIcon'
export default {
  components: {
    LoadingCircleIcon
  },
  props: {
    loading: {
      require: false,
      type: Boolean,
      default: () => false
    },
    disabled: {
      require: false,
      type: Boolean,
      default: () => false
    },
    secondary: {
      require: false,
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped>
.submit-btn {
  margin-top: rem(10);
  .loading {
    margin-bottom: rem(8);
  }
  :focus {
    outline: none;
  }
  &:not(:last-child) {
    margin-right: rem(10);
  }
}
</style>
