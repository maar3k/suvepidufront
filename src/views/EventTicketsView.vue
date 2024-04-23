<template>
  <TicketModal ref="ticketModalRef"/>
  <div class="container text-center">
    <h1>Suvegrill 2024 - Valga</h1>
    <div class="row">
      <div class="col-8">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Piletitüüp</th>
            <th scope="col">Kogu piletite arv</th>
            <th scope="col">Saadaval</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Penskarid</td>
            <td>100</td>
            <td>100</td>
          </tr>
          </tbody>
        </table>
        <font-awesome-icon @click="openTicketModal" :icon="['fas', 'plus']" style="cursor: pointer"/>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import TicketModal from "@/components/modal/TicketModal.vue";

export default {
  name: "EventTicketTypesView",
  components: {TicketModal},

  data() {
    return {
      eventDetailId: 0,
      ticketTypeId: 0,
      total: 0,
      available: 0,
      status: ''
    }
  },
  methods: {
    navigateToFeaturesCategories() {
      router.push({name: 'featureCategoryRoute'})
    },
    openTicketModal() {
      this.$refs.ticketModalRef.$refs.modalRef.openModal()
    },
  }
}
</script>


<style scoped>

</style>