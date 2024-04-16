<template>
  <h1>{{ successMessage }}</h1>

  <div class="container text-center">

    <div class="row justify-content-center">
      <div class="col col-5">
        <div class="input-group mb-3">
          <span class="input-group-text me-3">Vali konto tüüp</span>
          <RolesDropdown @event-selected-role-change="setSelectedRoleId"/>
        </div>
      </div>
    </div>

    <div class="row justify-content-center mt-3">
      <div class="col col-5">

        <div>
          <UserInfo ref="userInfoRef"/>
        </div>

        <div v-if="selectedRoleId === 2">
          <BusinessInfo ref="businessInfoRef"/>
        </div>

      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <button @click="addNewUser" type="submit" class="button-success btn btn-primary text-center text-nowrap">
          OK
        </button>
        <button @click="" type="submit" class="button-cancel btn btn-primary text-center text-nowrap">Loobu</button>
      </div>
    </div>

  </div>

</template>

<script>

import RolesDropdown from "@/components/RolesDropdown.vue";
import router from "@/router";
import UserInfo from "@/components/UserInfo.vue";
import BusinessInfo from "@/components/BusinessInfo.vue";

export default {
  name: 'NewUserView',
  components: {BusinessInfo, UserInfo, RolesDropdown},
  data() {
    return {
      selectedRoleId: 0,
      successMessage: '',

      user: {
        roleId: 0,
        username: '',
        password: ''
      },

      business: {
        companyName: '',
        registryCode: '',
        vatNumber: '',
        phone: '',
        email: ''
      }

    }
  },

  methods: {
    addNewUser() {
      if (this.selectedRoleId === 1) {
        this.getAndSetUserValues()
        this.sendPostNewUser()
      } else if (this.selectedRoleId === 2) {
        this.getAndSetBusinessValues()
        this.sendPostNewBusiness()
      }
    },

    getAndSetUserValues() {
      this.user.roleId = this.selectedRoleId
      this.user.username = this.$refs.userInfoRef.username
      this.user.password = this.$refs.userInfoRef.password
    },

    getAndSetBusinessValues() {
      this.business.companyName = this.$refs.businessInfoRef.companyName
      this.business.registryCode = this.$refs.businessInfoRef.registryCode
      this.business.vatNumber = this.$refs.businessInfoRef.vatNumber
      this.business.phone = this.$refs.businessInfoRef.phone
      this.business.email = this.$refs.businessInfoRef.email
    },

    sendPostNewUser() {
      this.$http.post("/new-user", this.user
      ).then(() => {
        this.successMessage = "Uus kasutaja " + this.user.username + " registreeritud!"
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    sendPostNewBusiness() {
      this.$http.post("/new-user", this.business
      ).then(() => {
        this.successMessage = "Uus korraldaja " + this.business.companyName + " registreeritud!"
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    setSelectedRoleId(selectedRoleId) {
      this.selectedRoleId = selectedRoleId
    }

  },

  beforeMount() {
    this.setSelectedRoleId()
  }

}

</script>


