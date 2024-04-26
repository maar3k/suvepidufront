<template>
  <LoginModal ref="loginModalRef"/>
  <LogOutModal ref="logOutModalRef"/>
  <div class="logo mt-3">
    <img src="../src/assets/logo.png" alt="company logo" height="200"/>
  </div>
  <nav>
    <router-link to="/">AVALEHT</router-link>
    |
    <router-link to="/checkout">OSTUKORV</router-link>
    |
    <router-link to="/events">MINU SÜNDMUSED</router-link>
    |
    <a href="#" @click="openLoginModal">LOGI SISSE</a>
    |
    <a href="#" @click="openLogOutModal">LOGI VÄLJA</a>
  </nav>
  <router-view/>
</template>

<script>

import LoginModal from "@/components/modal/LoginModal.vue";
import LogOutModal from "@/components/modal/LogOutModal.vue";

export default {
  name: 'App',
  components: {LogOutModal, LoginModal},
  methods: {
    openLoginModal() {
      this.$refs.loginModalRef.$refs.modalRef.openModal()
    },

    openLogOutModal() {
      this.$refs.logOutModalRef.$refs.modalRef.openModal()
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
