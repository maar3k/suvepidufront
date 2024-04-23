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
              <input v-model="ticketTypeInfoExtended.ticketTypePrice" type="number" class="form-control" id="ticket-price">
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
  // props: {
  //   // ticketTypeId: {
  //   //   type: Number,
  //   //   default: 0
  //   // }
  //   ticketTypeId: Number
  // },
  data() {
    return {
      mainEventId: Number(useRoute().query.mainEventId),

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
        this.editTicketType()
      } else {
        this.addNewTicketType()
      }
    },

    addNewTicketType() {
      const ticketTypeInfo = {
        ticketTypeName: this.ticketTypeInfoExtended.ticketTypeName,
        ticketTypePrice: this.ticketTypeInfoExtended.ticketTypePrice
      }

      this.$http.post("ticket-type", ticketTypeInfo, {
            params: {
              mainEventId: this.mainEventId
            }
          }
      ).then(response => {
        // todo: refreshi parent component
        this.closeTicketTypesModal()
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    editTicketType() {
      this.$http.put("/ticket-type", this.ticketTypeInfoExtended
      ).then(() => {
        router.push({name: 'eventTicketTypesRoute'})
        // TODO: $emit parentisse, et tee refresh
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

    closeTicketTypesModal() {
      this.$refs.modalRef.closeModal()
    },

    decideIfNewOrEditTicketType(ticketTypeId) {
      if (ticketTypeId !== 0) {
        this.sendGetTicketTypeRequest(ticketTypeId)
      }
    },

  },
  // beforeMount() {
  //   this.decideIfNewOrEditTicketType()
  // }
}
</script>
