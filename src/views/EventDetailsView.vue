<template>
  <EventDetailsModal ref="eventDetailsModalRef"/>
  <div class="container text-center">
    <h1>Suvegrill 2024</h1>
    <!--    TODO: event name to be added via backend-->
    <div class="row">
      <div class="col-8">

        <table class="table">
          <thead>
          <tr>
            <th scope="col">Kuupäev</th>
            <th scope="col">Algus</th>
            <th scope="col">Lõpp</th>
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
            <td>Valga</td>
            <td>XXXXX</td>
            <td>YYYYY</td>
            <td>
              <button @click="navigateToEventTickets" type="button" class="btn btn-primary">Piletid</button>
            </td>
          </tr>
          <tr>
            <td>22.07.2024</td>
            <td>12:00</td>
            <td>19:00</td>
            <td>Paide</td>
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
import EventDetailsModal from "@/components/modal/EventDetailsModal.vue";

export default {
  name: "EventDetailsView",
  components: {EventDetailsModal},
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