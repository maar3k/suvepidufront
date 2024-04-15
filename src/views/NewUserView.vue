<template>
  <h1>{{successMessage}}</h1>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          Konto tüüp
        </div>
        <div class="col">
          <RoleDropdown @event-selected-role-change="setRoleId"/>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <label for="username" class="form-label">Kasutajanimi</label>
        </div>
        <div class="col">
          <input type="text" class="form-control" id="username">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <label for="password" class="form-label">Parool</label>
        </div>
        <div class="col">
          <input type="password" class="form-control" id="password">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <label for="password" class="form-label">Parool uuesti</label>
        </div>
        <div class="col">
          <input type="password" class="form-control" id="password">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
        </div>
        <div class="col">
          <button @click="sendPostNewUser" type="submit" class="button-success btn btn-primary text-center text-nowrap">
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

export default {
  name: 'NewUserView',
  components: {RoleDropdown},
  data() {
    return {
      successMessage: '',

      user: {
        roleId: 0,
        username: '',
        password: ''
      }
    }
  },

  methods: {
    sendPostNewUser() {
      this.$http.post("/new-user", this.user
      ).then(() => {
        this.successMessage = "Uus kasutaja " + this.user.username + " registreeritud!"
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },
    setRoleId(selectedRoleId) {
      this.user.roleId = selectedRoleId
    },

  }
}

</script>


