<template>
  <Modal ref="modalRef">
    <template #title>

    </template>
    <template #body>
      <div class="mb-3">
        <label class="form-label">Kuupäev</label>
        <input type="date" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Algus</label>
        <input type="time" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Lõpp</label>
        <input type="time" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Maakond</label>
        <CountyDropdown v-model="selectedCountyId" @change="getAndSetSelectedCountyId"/>
      </div>
      <div class="mb-3">
        <label class="form-label">Asukoht</label>
        <input type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Pikkuskraad</label>
        <input type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Laiuskraad</label>
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
import CountyDropdown from "@/components/event/CountyDropdown.vue";

export default {
  name: "EventDetailsModal",
  components: {Modal, CountyDropdown},
  data() {
    return {
      selectedCountyId: 0,
      eventDetailsInfo: {
        date: '',
        start_time: '',
        end_time: '',
        countyId: 0,
        address: '',
        longitude: '',
        latitude: '',

      },
    }

  },
  methods: {
    //   addEventDetails() {
    //     this.$http.post("/account/user", this.eventDetailsInfo
    //     ).then(() => {
    //       this.$refs.modalRef.closeModal()
    //       router.push({name: 'eventDetailsRoute'})
    //     }).catch(() => {
    //       router.push({name: 'errorRoute'})
    //     })
    //   },
    // },

    getAndSetSelectedCountyId() {
      this.eventDetailsInfo.countyId = this.selectedCountyId
    }
  }
}
</script>
