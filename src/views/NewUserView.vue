<template>
  <h1>{{ successMessage }}</h1>

  <div class="container text-center">

    <div class="row justify-content-center">
      <div class="col col-5">
        <div class="input-group mb-3">
          <span class="input-group-text me-3">Vali konto tüüp</span>
          <RoleDropdown @event-selected-role-change="setSelectedRoleId"/>
        </div>
      </div>
    </div>

    <div class="row justify-content-center mt-3">
      <div class="col col-5">

        <div>
          <UserInfo :role-id="selectedRoleId"/>
        </div>

        <div v-if="selectedRoleId === 2">
          <BusinessInfo/>
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

import RoleDropdown from "@/components/RolesDropdown.vue";
import router from "@/router";
import UserInfo from "@/components/UserInfo.vue";
import BusinessInfo from "@/components/BusinessInfo.vue";

export default {
  name: 'NewUserView',
  components: {BusinessInfo, UserInfo, RoleDropdown},
  data() {
    return {
      selectedRoleId: 1,
      successMessage: '',

      user: {
        roleId: 0,
        username: '',
        password: ''
      },

      business: {
        companyName: '',
        registryCode: 0,
        vatNumber: '',
        phone: 0,
        email: ''
      }

    }
  },

  methods: {
    addNewUser() {
      if (this.selectedRoleId === 1) {
        this.sendPostNewUser()
      } else if (this.selectedRoleId === 2) {
        this.sendPostNewBusiness()
      }
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


