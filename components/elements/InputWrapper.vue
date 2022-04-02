<template>
  <div class="input-wrapper flex-cl" :class="{'nw-error': error, 'show-phone-code': phoneCode }">
    <div class="input-field-wrapper">
      <!-- <CountryCodeSelect v-if="phoneCode" class="phone-code" :class="{'disable': disablePhoneCode}" /> -->
      <slot />
    </div>
    <div v-if="error && errorText" class="input-error">
      {{ errorText | capitalize }}
    </div>
  </div>
</template>

<script>
// import CountryCodeSelect from '~/components/CountryCodeSelect'
export default {
  components: {
    // CountryCodeSelect
  },
  filters: {
    capitalize (str) {
      return str ? (str.charAt(0).toUpperCase() + str.slice(1)) : ''
    }
  },
  props: {
    error: {
      require: false,
      type: Boolean,
      default: () => false
    },
    errorText: {
      require: false,
      type: String,
      default: () => 'This field is required'
    },
    phoneCode: {
      require: false,
      type: Boolean,
      default: () => false
    },
    disablePhoneCode: {
      require: false,
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: rem(30);
  .input-field-wrapper {
    position: relative;
    width: 100%;
    // .phone-code {
    //   top: 50%;
    //   left: 0;
    //   transform: translateY(-50%);
    //   height: fit-content;
    //   margin: 0;
    //   &.disable {
    //     user-select: none;
    //   }
    // }
    // ::v-deep input, textarea, select {
    //   width: 100%;
    //   display: block;
    //   padding: rem(9);
    //   color: #696969;
    //   background-color: transparent;
    //   border: 0;
    //   border-bottom: 0.5px solid #70707057;
    //   outline: none;
    //   font-size: rem(14);
    //   &:focus:not(:disabled) {
    //     color: black;
    //     border-color: black;
    //   }
    //   &[type=number] {
    //     @extend .disable-number-arrow;
    //   }
    // }
  }
  &.nw-error .input-field-wrapper {
    ::v-deep input, textarea, select {
      // color: $error-color;
      border-color: red;
    }
  }
  &.show-phone-code .input-field-wrapper {
    ::v-deep input, textarea, select {
      padding-left: rem(80);
    }
  }
}
</style>
