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
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="ticketType in ticketTypes" :key="ticketType.ticketTypeId">
            <td>{{ ticketType.ticketTypeName }}</td>
            <td>{{ ticketType.ticketTypePrice }}</td>
            <td>
              <font-awesome-icon @click="navigateToEditTicketType(ticketType.ticketTypeId)" class="cursor-pointer"
                                 :icon="['far', 'pen-to-square']"/>
            </td>
          </tr>
          </tbody>
        </table>
        <font-awesome-icon @click="openTicketTypesModal(ticketTypeId)" :icon="['fas', 'plus']"/>
      </div>
    </div>

    <div>
      <TicketTypesModal ref="ticketTypesModalRef" :ticket-type-id="ticketTypeId"/>
    </div>

  </div>
</template>

<script>
import TicketTypesModal from "@/components/modal/TicketTypesModal.vue";
import {useRoute} from "vue-router";
import router from "@/router";

export default {
  name: "EventTicketTypesView",
  components: {TicketTypesModal},
  props: {
    ticketTypeId: Number
  },
  data() {
    return {
      mainEventId: Number(useRoute().query.mainEventId),
      ticketTypes: [
        {
          ticketTypeName: '',
          ticketTypePrice: 0,
          ticketTypeId: 0,
          mainEventId: 0
        }
      ]
    }
  },
  methods: {
    openTicketTypesModal(ticketTypeId) {
      this.ticketTypeId = ticketTypeId
      this.$refs.ticketTypesModalRef.$refs.modalRef.openModal()
    },

    navigateToEditTicketType() {
      this.openTicketTypesModal()
    },

    sendGetTicketTypesRequest() {
      this.$http.get("/ticket-types", {
            params: {
              mainEventId: this.mainEventId
            }
          }
      ).then(response => {
        this.ticketTypes = response.data
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },
  },

  beforeMount() {
    this.sendGetTicketTypesRequest()
  }
}


</script>
