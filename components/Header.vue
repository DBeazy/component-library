<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path
                d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                fill="#FFF"
              />
              <path
                d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                fill="#555AB9"
              />
              <path
                d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                fill="#91BAF8"
              />
            </g>
          </svg>
          <h1>Acme</h1>
        </div>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          :class="{ 'is-active': menuOpen }"
          @click="toggleMobileMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': menuOpen }">
        <div class="navbar-end">
          <div class="navbar-item">
            <template v-if="user">
              <base-button size="small" @onClick="onLogout" label="Log out" />
            </template>
            <template v-if="!user">
              <base-button size="small" @onClick="onLogin" label="Log in" />
              <base-button size="small" @onClick="onCreateAccount" label="Sign up" type="primary" />
            </template>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  name: 'my-header',

  components: { BaseButton },

  props: {
    user: {
      type: Object
    }
  },

  data() {
    return {
      menuOpen: false
    };
  },

  methods: {
    toggleMobileMenu() {
      this.menuOpen = !this.menuOpen;
    },
    onLogin() {
      this.$emit('onLogin');
    },
    onLogout() {
      this.$emit('onLogout');
    },
    onCreateAccount() {
      this.$emit('onCreateAccount');
    }
  }
};
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all.sass';
@import '~bulma/sass/components/navbar.sass';
</style>

<style lang="css">
@import '../assets/css/header.css';
</style>
