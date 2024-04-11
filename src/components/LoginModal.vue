<template>
  <Modal ref="modalRef">
    <template #title>
      Logi sisse
    </template>
    <template #body>
      <div class="container text-start">
        <div class="row justify-content-center">
          <div class="col">
            <div class="mb-3">
              <label for="username" class="form-label">Kasutajanimi</label>
              <input v-model="username" type="text" class="form-control" id="username">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Parool</label>
              <input v-model="password" type="password" class="form-control" id="password">
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #buttons>
      <button @click="executeLogIn" type="submit" class="btn btn-primary text-center text-nowrap">Logi sisse</button>
      <button @click="executeNewUser" type="submit" class="btn btn-primary text-center text-nowrap">Loo konto</button>
    </template>
  </Modal>

</template>

<script>
import Modal from "@/components/Modal.vue";
import router from "@/router";

export default {
  name: 'LoginModal',
  components: {Modal},
  methods: {
    executeNewUser() {
      router.push({name: 'newUserRoute'})
    },
  }
}


</script>
