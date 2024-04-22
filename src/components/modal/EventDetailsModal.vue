<template>
  <Modal ref="modalRef">
    <template #title>

    </template>
    <template #body>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Kuupäev</label>
        <input type="date" class="form-control">
        <div id="emailHelp" class="form-text"></div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Algus</label>
        <input type="time" class="form-control">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Lõpp</label>
        <input type="time" class="form-control">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Asukoht</label>
        <input type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Pikkuskraad</label>
        <input type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Laiuskraad</label>
        <input type="text" class="form-control">
      </div>
    </template>
    <template #buttons>
      <button @click="addEventDetails" type="submit" class="btn btn-primary text-center text-nowrap">Lisa</button>
      <button type="submit" class="btn btn-primary text-center text-nowrap">Loobu</button>
    </template>

  </Modal>
</template>
<script>

import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: "EventDetailsModal",
  components: {Modal},
  data() {
    return {
      eventDetailsInfo: {
        date: '',
        start_time: '',
        end_time: '',
        address: '',
        longitude: '',
        latitude: '',

      },
    }

  },
  methods: {
    addEventDetails() {
      this.$http.post("/account/user", this.eventDetailsInfo
      ).then(() => {
        this.$refs.modalRef.closeModal()
        router.push({name: 'eventDetailsRoute'})
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },
  }
}
</script>
