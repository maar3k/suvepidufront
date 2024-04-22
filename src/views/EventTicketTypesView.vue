<template>
  <div class="container text-center">
    <!--    andmebaasist title-->
    <h1>Suvegrill 2024</h1>
    <div class="row">
      <div class="col-8">

        <table class="table">
          <thead>
          <tr>
            <th scope="col">Piletitüüp</th>
            <th scope="col">Hind</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Penskarid</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Taiskasvanu</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Lapsed</td>
            <td>0</td>
          </tr>

          </tbody>
        </table>
        <font-awesome-icon @click="openTicketTypesModal" :icon="['fas', 'plus']"/>

      </div>

    </div>

    <div>
      <TicketTypesModal ref="ticketTypesModalRef"/>
    </div>

  </div>
</template>

<script>
import TicketTypesModal from "@/components/modal/TicketTypesModal.vue";
import {useRoute} from "vue-router";

export default {
  name: "EventTicketTypesView",
  components: {TicketTypesModal},
  data() {
    return {
      mainEventId: Number(useRoute().query.mainEventId),
    }
  },
  methods: {
    openTicketTypesModal() {
      this.$refs.ticketTypesModalRef.$refs.modalRef.openModal()
    },
  }
}


</script>
