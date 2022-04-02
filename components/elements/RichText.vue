<template>
  <client-only>
    <VueEditor v-model="localValue" class="rich-text-editor input" :placeholder="placeholder" @input="$emit('input', localValue)" />
  </client-only>
</template>

<script>
export default {
  props: {
    value: {
      require: false,
      type: String,
      default: () => ''
    },
    placeholder: {
      require: false,
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      localValue: this.value
    }
  },
  watch: {
    value (value) {
      this.localValue = value
    }
  }
}
</script>

<style lang="scss" scoped>
.rich-text-editor.input {
  padding: 0;
  ::v-deep .ql-toolbar {
    border: none;
    border-bottom: 1px solid #676767;
  }
  ::v-deep .ql-container {
    border: none;
  }
}
</style>
