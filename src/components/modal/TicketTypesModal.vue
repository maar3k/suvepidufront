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
      <button @click="addNewTicketTypes" type="submit" class="btn btn-primary">Lisa</button>
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
      ticketTypeInfo:
        {
          mainEventId: 0,
          ticketTypeName: '',
          ticketTypePrice: 0
        }
    }
  },
  methods: {
    addNewTicketTypes() {
      this.$http.post("/event/ticket-types", this.ticketTypeInfo, {
            params: {
              mainEventId: this.mainEventId
            }
          }
      ).then(response => {
        const mainEventId = response.data
        router.push({name: 'eventTicketTypesRoute', query: {mainEventId: mainEventId}})
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

  //   getTicketTypesByMainEventId, et neid siia kuvada. mainEventId tuleb siis külge, kui EventsView on tehtud korda, siis tuleb urlist
  }
}
</script>
