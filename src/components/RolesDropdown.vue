<template>
  <select class="form-select">
    <option selected value="0">Vali</option>
    <option v-for="role in roles" :value="role.roleId" :key="role.roleId">{{ role.roleName }}</option>
  </select>
</template>

<script>
import router from "@/router";

export default {
  name: 'RoleDropdown',

  data() {
    return {
      roles: [
        {
          roleId: 0,
          roleName: ''
        }
      ]
    }
  },

  methods: {
    sendGetRolesRequest() {
      this.$http.get('/roles')
          .then(response => {
            this.roles = response.data
          })
          .catch(() => {
            router.push({name: 'errorRoute'})
          })
    },



  },

  beforeMount() {
    this.sendGetRolesRequest()
  }

}
</script>

