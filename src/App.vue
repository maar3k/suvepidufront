<template>
  <LoginModal ref="loginModalRef"/>
  <LogOutModal ref="logOutModalRef"/>
  <div class="logo mt-3">
    <img src="../src/assets/logo.png" alt="company logo" height="200"/>
  </div>
  <nav>
    <router-link to="/">AVALEHT</router-link>
    |
    <template v-if="isLoggedIn">
      <router-link to="/checkout">OSTUKORV</router-link>
      |
      <template v-if="isAdmin">
        <router-link to="/events">MINU SÜNDMUSED</router-link>
        |
      </template>
      <a href="#" @click="openLogOutModal">LOGI VÄLJA</a>
      |
    </template>

    <template v-else>
      <a href="#" @click="openLoginModal">LOGI SISSE</a>
    </template>


  </nav>
  <router-view @event-update-nav-menu="updateNavMenu"/>
</template>

<script>

import LoginModal from "@/components/modal/LoginModal.vue";
import LogOutModal from "@/components/modal/LogOutModal.vue";

export default {
  name: 'App',
  components: {LogOutModal, LoginModal},
  data() {
    return {
      isLoggedIn: false,
      isAdmin: false
    }
  },
  watch: {
    isAdmin() {
      if (this.isLoggedIn === true) {
        window.location.reload()
      }
    },
  },
  methods: {
    updateNavMenu() {
      this.updateIsLoggedInValue()
      this.updateIsAdminValue()
    },

    updateIsLoggedInValue() {
      let userId = sessionStorage.getItem('userId')
      this.isLoggedIn = userId !== null
    },

    updateIsAdminValue() {
      if (this.isLoggedIn) {
        let roleName = sessionStorage.getItem('roleName');
        this.isAdmin = roleName === 'korraldaja'
      }
    },

    openLoginModal() {
      this.$refs.loginModalRef.$refs.modalRef.openModal()
    },

    openLogOutModal() {
      this.$refs.logOutModalRef.$refs.modalRef.openModal()
    },

    triggerReload() {
      this.isLoggedIn = true
    }
  },
  mounted() {
    this.updateNavMenu()
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
