<template>
  <button type="button" :class="classes" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'base-button',

  props: {
    type: {
      type: String,
      default: 'default',
      validator: function(value) {
        return (
          [
            'default',
            'white',
            'black',
            'primary',
            'link',
            'info',
            'success',
            'warning',
            'danger'
          ].indexOf(value) !== -1
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
    },
    loading: {
      type: Boolean,
      default: false
    },
    focused: {
      type: Boolean,
      default: false
    },
    hovered: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      return {
        button: true,
        [`is-${this.type}`]: this.type !== 'default',
        [`is-${this.size}`]: this.size !== 'normal',
        'is-light': this.light,
        'is-fullwidth': this.fullwidth,
        'is-outlined': this.outlined,
        'is-inverted': this.inverted,
        'is-rounded': this.rounded,
        'is-loading': this.loading,
        'is-focused': this.focused,
        'is-hovered': this.hovered,
        'is-active': this.active,
        'is-selected': this.selected
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
