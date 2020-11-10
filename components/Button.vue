<template>
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script>
export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: '',
      validator: function(value) {
        return (
          ['', 'primary', 'link', 'info', 'success', 'warning', 'danger'].indexOf(value) !== -1
        );
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator: function(value) {
        return ['small', 'normal', 'medium', 'large'].indexOf(value) !== -1;
      }
    },
    light: {
      type: Boolean,
      default: false
    },
    fullwidth: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    inverted: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      return {
        button: true,
        [`is-${this.type}`]: this.type !== '',
        [`is-${this.size}`]: this.size !== 'normal',
        'is-light': this.light,
        'is-fullwidth': this.fullwidth,
        'is-outlined': this.outlined,
        'is-inverted': this.inverted,
        'is-rounded': this.rounded
      };
    }
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    }
  }
};
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all.sass';
@import '~bulma/sass/elements/button.sass';
</style>
