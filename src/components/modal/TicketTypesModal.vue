<template>
  <Modal ref="modalRef">
    <template #title>
      <h3>Lisa piletite tüübid</h3>
    </template>
    <template #body>
      <div class="container text-start">
        <div class="row justify-content-center">
          <div class="col">
            <div class="mb-3">
              <label for="ticket-type" class="form-label">Piletitüüp</label>
              <input v-model="ticketTypeInfoExtended.ticketTypeName" type="text" class="form-control" id="ticket-type">
            </div>
            <div class="mb-3">
              <label for="ticket-price" class="form-label">Hind</label>
              <input v-model="ticketTypeInfoExtended.ticketTypePrice" type="number" class="form-control"
                     id="ticket-price">
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #buttons>
      <button @click="addOrUpdateTicketType" type="submit" class="btn btn-primary">OK</button>
      <button @click="closeTicketTypesModal" type="submit"
              class="button-cancel btn btn-primary text-center text-nowrap">Loobu
      </button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";
import {useRoute} from "vue-router";

export default {
  name: "TicketTypesModal",
  components: {Modal},
  data() {
    return {
      mainEventId: 0,
      ticketTypeInfoExtended: {
        ticketTypeName: '',
        ticketTypePrice: 0,
        ticketTypeId: 0,
        mainEventId: 0
      }
    }
  },
  methods: {
    addOrUpdateTicketType() {
      if (this.ticketTypeInfoExtended.ticketTypeId !== 0) {
        this.sendPutEditTicketTypeRequest()
      } else {
        this.sendPostAddTicketTypeRequest()
      }
    },

    sendPutEditTicketTypeRequest() {
      this.$http.put("/ticket-type", this.ticketTypeInfoExtended
      ).then(() => {
        this.closeTicketTypesModal()
        router.push({name: 'eventTicketTypeRoute'})
        this.$emit('event-ticket-type-edited-or-added')
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    sendPostAddTicketTypeRequest() {
      const ticketTypeInfo = {
        ticketTypeName: this.ticketTypeInfoExtended.ticketTypeName,
        ticketTypePrice: this.ticketTypeInfoExtended.ticketTypePrice
      }

      this.$http.post("ticket-type", ticketTypeInfo, {
            params: {
              mainEventId: this.mainEventId
            }
          }
      ).then(() => {
        this.closeTicketTypesModal()
        router.push({name: 'eventTicketTypeRoute'})
        this.$emit('event-ticket-type-edited-or-added')
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    sendGetTicketTypeRequest(ticketTypeId) {
      this.$http.get("/ticket-type", {
            params: {
              ticketTypeId: ticketTypeId
            }
          }
      ).then(response => {
        this.ticketTypeInfoExtended = response.data
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    decideIfNewOrEditTicketType(ticketTypeId, mainEventId) {
      this.mainEventId = mainEventId;
      if (ticketTypeId !== 0) {
        this.sendGetTicketTypeRequest(ticketTypeId)
      }
    },

    closeTicketTypesModal() {
      this.$refs.modalRef.closeModal()
    },
  }
}
</script>
