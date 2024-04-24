<template>
  <Modal ref="modalRef">
    <template #title>
      Lisa pilet
    </template>
    <template #body>
      <div class="row">
        <div class="container text-center">
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Vali piletitüüp</label>
            <select class="form-select" aria-label="Default select example">
              <option selected disabled>Piletitüübid</option>
              <option value="1">Seeniorid</option>
              <option value="2">Täiskasvanud</option>
              <option value="3">Lapsed</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Kogu piletite arv</label>
            <input type="number" class="form-control" id="">
          </div>
          <button type="submit" class="btn btn-primary">Lisa</button>
        </div>
      </div>
    </template>
  </Modal>
</template>
<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: "TicketModal",
  components: {Modal},

  data() {
    return {
      eventDetailId: 1,
      ticketTypeId: 0,
      total: 0
    }
  },
  methods: {

    sendPostAddEventTicketRequest() {
      const eventTicketInfo = {
        eventDetailId: this.eventDetailId,
        ticketTypeId: this.ticketTypeId,
        total: this.total
      }
      this.$http.post("/event/ticket", eventTicketInfo, {
            params: {
              someRequestParam1: this.someDataBlockVariable1,
              someRequestParam2: this.someDataBlockVariable2
            }
          }
      ).then(response => {
        this.closeTicketModal()
        const responseBody = response.data
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    closeTicketModal() {
      this.$refs.ticketModalRef.$refs.modalRef.closeModal()
    },
  }
}
</script>