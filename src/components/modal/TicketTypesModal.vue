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
              <input v-model="ticketTypeInfo.ticketTypeName" type="text" class="form-control" id="ticket-type">
            </div>
            <div class="mb-3">
              <label for="ticket-price" class="form-label">Hind</label>
              <input v-model="ticketTypeInfo.ticketTypePrice" type="number" class="form-control" id="ticket-price">
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
      mainEventId: Number(useRoute().query.mainEventId),
      ticketTypeId: useRoute().query.ticketTypeId,

      ticketTypeInfo: {
        ticketTypeName: '',
        ticketTypePrice: 0,
      },

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
      if (this.ticketTypeId !== 0) {
        this.editTicketType()
      } else {
        this.addNewTicketType()
      }
    },

    addNewTicketType() {
      this.$http.post("ticket-type", this.ticketTypeInfo, {
            params: {
              mainEventId: this.mainEventId
            }
          }
      ).then(response => {
        const mainEventId = response.data
        router.push({name: 'eventTicketTypesRoute', query: {mainEventId: mainEventId}})
        this.closeTicketTypesModal()
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    editTicketType() {
      this.$http.put("/ticket-type", this.ticketTypeInfoExtended
      ).then(() => {
        router.push({name: 'eventTicketTypesRoute'})
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    getTicketTypeIdFromUrlQueryParameter() {
      console.log(this.ticketTypeId)
      if (this.ticketTypeId !== undefined) {
        const ticketTypeId = Number(this.ticketTypeId);
        this.sendGetTicketTypeRequest(ticketTypeId)
      }
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

    closeTicketTypesModal() {
      this.$refs.modalRef.closeModal()
    },

  },
  beforeMount() {
    this.getTicketTypeIdFromUrlQueryParameter()
  }
}
</script>
