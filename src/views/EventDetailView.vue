<template>
  <EventDetailModal ref="eventDetailsModalRef"/>
  <div class="container text-center">
    <h1>{{ mainEventId }}</h1>
<!--    todo: kuidas saada title mainevent tabelist kätte?-->
    <!--    TODO: event name to be added via backend-->
    <div class="row">
      <div class="col-8">

        <table class="table">
          <thead>
          <tr>
            <th scope="col">Kuupäev</th>
            <th scope="col">Algus</th>
            <th scope="col">Lõpp</th>
            <th scope="col">Maakond</th>
            <th scope="col">Asukoht</th>
            <th scope="col">Pikkuskraad</th>
            <th scope="col">Laiuskraad</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>21.07.2024</td>
            <td>12:00</td>
            <td>19:00</td>
            <td>maakond</td>
            <td>Valga</td>
            <td>XXXXX</td>
            <td>YYYYY</td>
            <td>
              <button @click="navigateToEventTickets" type="button" class="btn btn-primary">Piletid</button>
            </td>
          </tr>
          </tbody>

        </table>

        <button @click="openEventDetailsModal">
          <font-awesome-icon :icon="['fas', 'plus']"/>
        </button>

      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import EventDetailModal from "@/components/modal/EventDetailModal.vue";
import {useRoute} from "vue-router";

export default {
  name: "EventDetailView",
  components: {EventDetailModal},
  data() {
    return {
      mainEventId: useRoute().query.mainEventId,

      eventDetailInfo: {

        date: '',
        startTime: '',
        endTime: '',
        address: '',
        longitude: 0,
        latitude: 0,
      }

    }
  },


  methods: {
    navigateToEventTickets() {
      router.push({name: 'eventTicketsRoute'})
    },

    openEventDetailsModal() {
      this.$refs.eventDetailsModalRef.$refs.modalRef.openModal()
    }

  }

}

</script>


<style scoped>

</style>