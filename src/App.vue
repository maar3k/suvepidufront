<template>
  <LoginModal ref="loginModalRef"/>
  <div class="logo mt-3">
    <img src="../src/assets/logo.png" alt="company logo" height="200"/>
  </div>
  <nav>
    <router-link to="/">AVALEHT</router-link>
    |
    <router-link to="/checkout">OSTUKORV</router-link>
    |
    <router-link to="/main-event">LISA UUS SÜNDMUS</router-link>
    |
    <router-link to="/feature-category">KATEGOORIAD</router-link>
    |
    <router-link to="/events">MINU SÜNDMUSED</router-link>
    |
    <router-link to="/event-details">Suvegrill</router-link>
    |
    <a href="#" @click="openLoginModal">LOGI SISSE</a>
  </nav>
  <router-view/>
</template>

<script>

import LoginModal from "@/components/modal/LoginModal.vue";

export default {
  name: 'App',
  components: {LoginModal},
  methods: {
    openLoginModal() {
      this.$refs.loginModalRef.$refs.modalRef.openModal()
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #000000;
}

nav a.router-link-exact-active {
  color: #6A704C;
}
</style>
