<template>
  <div class="submit-btn flex-cl">
    <div v-if="loading" class="loading text-12">
      <div class="float-left mr-5">
        <LoadingCircleIcon class="loading-icon" />
      </div>
      Loading..
    </div>
    <button
      v-if="secondary"
      class="secondary-btn"
      :disabled="disabled || loading"
      tabindex="1"
      @click="$emit('click')"
    >
      <slot />
    </button>
    <button
      v-else
      type="submit"
      class="primary-btn"
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
  // margin-top: rem(10);
  .loading {
    margin: 0 0 rem(6) rem(8);
    line-height: rem(16);
    .loading-icon {
      width: rem(16);
      height: rem(16);
    }
  }
  :focus {
    outline: none;
  }
  &:not(:last-child) {
    margin-right: rem(10);
  }
}
</style>
