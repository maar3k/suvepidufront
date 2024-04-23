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
          <tr v-for="ticketType in ticketTypes" :key="ticketType.ticketTypeId">
            <td>{{ ticketType.ticketTypeName }}</td>
            <td>{{ ticketType.ticketTypePrice }}</td>
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
import router from "@/router";

export default {
  name: "EventTicketTypesView",
  components: {TicketTypesModal},
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
    openTicketTypesModal() {
      this.$refs.ticketTypesModalRef.$refs.modalRef.openModal()
    },

    sendGetTicketTypesRequest() {
      console.log(this.mainEventId)
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
