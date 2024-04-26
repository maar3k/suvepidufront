<template>
  <Modal ref="modalRef">
    <template #title>

    </template>
    <template #body>
      <div class="mb-3">
        <label class="form-label">Kuupäev</label>
        <input v-model="eventDetailInfo.date" type="date" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Algus</label>
        <input v-model="eventDetailInfo.startTime" type="text" class="form-control" placeholder="_:_">

      </div>
      <div class="mb-3">
        <label class="form-label">Lõpp</label>
        <input v-model="eventDetailInfo.endTime" type="text" class="form-control" placeholder="_:_">
      </div>
      <div class="mb-3">
        <label class="form-label">Maakond</label>
        <CountyDropdown v-model="selectedCountyId" @change="getAndSetSelectedCountyId"/>
      </div>
      <div class="mb-3">
        <label class="form-label">Aadress</label>
        <input v-model="eventDetailInfo.address" type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Pikkuskraad</label>
        <input v-model="eventDetailInfo.longitude" type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Laiuskraad</label>
        <input v-model="eventDetailInfo.latitude" type="text" class="form-control">
      </div>
    </template>
    <template #buttons>
      <button @click="addOrEditEventDetail" type="submit" class="btn btn-primary text-center text-nowrap">Lisa</button>
      <button @click="closeEventDetailModal" type="submit" class="btn btn-primary text-center text-nowrap">Loobu</button>
    </template>

  </Modal>
</template>
<script>

import Modal from "@/components/modal/Modal.vue";
import CountyDropdown from "@/components/event/CountyDropdown.vue";
import router from "@/router";
import {useRoute} from "vue-router";

export default {
  name: "EventDetailModal",
  components: {Modal, CountyDropdown},
  data() {
    return {
      mainEventId: Number(useRoute().query.mainEventId),
      selectedCountyId: 0,

      eventDetailInfo: {

        countyId: 0,
        date: '',
        startTime: '',
        endTime: '',
        address: '',
        longitude: 0,
        latitude: 0,
        eventDetailId: 0,

      },
    }
  },
  methods: {
    addOrEditEventDetail() {
      if (this.eventDetailInfo.eventDetailId !== 0) {
        this.sendEditEventDetailRequest()
      } else {
        this.sendAddEventDetailRequest()
      }
    },

    sendAddEventDetailRequest() {
      this.$http.post("/event/detail", this.eventDetailInfo, {
        params: {
          mainEventId: this.mainEventId
        }
      }
      ).then(() => {
        this.closeEventDetailModal()
        router.push({name: 'eventDetailRoute'})
        this.$emit('event-detail-edited-or-added')
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    sendEditEventDetailRequest() {
      this.$http.put("/event/detail", this.eventDetailInfo
      ).then(() => {
        this.closeEventDetailModal()
        router.push({name: 'eventDetailRoute'})
        this.$emit('event-detail-edited-or-added')
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    closeEventDetailModal() {
      this.$refs.modalRef.closeModal()
    },

    sendGetEventDetailRequest(eventDetailId) {
      this.$http.get("/event/detail", {
            params: {
              eventDetailId: eventDetailId
            }
          }
      ).then(response => {
        this.eventDetailInfo = response.data
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    decideIfNewOrEditEventDetail(eventDetailId, mainEventId) {
      this.mainEventId = mainEventId
      if (eventDetailId !== 0) {
        this.sendGetEventDetailRequest(eventDetailId)
      }
    },

    getAndSetSelectedCountyId() {
      this.eventDetailInfo.countyId = this.selectedCountyId
    },

  }
}
</script>
