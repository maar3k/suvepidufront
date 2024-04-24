<template>
  <div class="container text-center">
    <!--    todo: andmebaasist title-->
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
              <font-awesome-icon @click="openTicketTypesModalEdit(ticketType.ticketTypeId)" class="cursor-pointer"
                                 :icon="['far', 'pen-to-square']"/>
            </td>
          </tr>
          </tbody>
        </table>
        <font-awesome-icon @click="openTicketTypesModalNew" :icon="['fas', 'plus']"/>
      </div>
    </div>

    <div>
      <TicketTypesModal ref="ticketTypesModalRef" @event-ticket-type-edited-or-added="eventTicketTypeEditedOrAdded"/>
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
    openTicketTypesModalNew() {
      this.$refs.ticketTypesModalRef.decideIfNewOrEditTicketType(0);
      this.$refs.ticketTypesModalRef.$refs.modalRef.openModal()
    },

    openTicketTypesModalEdit(ticketTypeId) {
      this.$refs.ticketTypesModalRef.decideIfNewOrEditTicketType(ticketTypeId);
      // siin panen ticketTypeId kaasa, et see modalis kätte saada propsis. Lapsesse läheb props.
      this.$refs.ticketTypesModalRef.$refs.modalRef.openModal()
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

    eventTicketTypeEditedOrAdded() {
      this.sendGetTicketTypesRequest()
    },
  },

  beforeMount() {
    this.sendGetTicketTypesRequest()
  }
}

</script>
