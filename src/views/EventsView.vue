<template>
  <DeleteMainEventModal ref="deleteMainEventModal"/>
  <div class="container text-center">
    <h1>Minu sündmused</h1>
    <div class="row">
      <div class="col-8">

        <table class="table">
          <thead>
          <tr>
            <th scope="col">Nimi</th>
            <th scope="col">Kirjeldus</th>
            <th scope="col">Pilt</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="mainEventInfo in mainEventInfos" :key="mainEventInfo.mainEventId">
            <td>{{ mainEventInfo.title }}</td>
            <td>{{ mainEventInfo.description }}</td>
            <td>{{ mainEventInfo.imageData }}</td>
            <td>
              <button @click="navigateToFeaturesCategories" type="button" class="btn btn-primary">Võimalused ja kategooriad</button>
            </td>
            <td>
              <button @click="navigateToEventDetails" type="button" class="btn btn-primary">Toimumiskohad</button>
            </td>
            <td>
              <button @click="navigateToTicketTypes" type="button" class="btn btn-primary">Piletitüübid</button>
            </td>
            <td>
              <font-awesome-icon @click="" class="cursor-pointer"
                                 :icon="['far', 'pen-to-square']"/>
            </td>
            <td>
              <font-awesome-icon @click="openDeleteMainEventModal" class="cursor-pointer"
                                 :icon="['far', 'trash-can']"/>
            </td>

          </tr>

          </tbody>
        </table>
        <font-awesome-icon @click="navigateToAddEvent" :icon="['fas', 'plus']"/>


      </div>

    </div>

  </div>
</template>
<script>
import router from "@/router";
import {useRoute} from "vue-router";
import DeleteMainEventModal from "@/components/modal/DeleteMainEventModal.vue";

export default {
  name: "EventsView",
  components: {DeleteMainEventModal},
  data() {
    return {
      selectedBusinessId: Number(useRoute().query.selectedBusinessId),
      mainEventInfos: [
        {
          businessId: 0,
          title: '',
          description: '',
          imageData: '',
          mainEventId: 0
        }
      ]
    }
  },
  methods: {
    navigateToFeaturesCategories() {
      router.push({name: 'featureCategoryRoute'})
    },
    navigateToEventDetails() {
      router.push({name: 'eventDetailsRoute'})
    },
    navigateToAddEvent() {
      router.push({name: 'mainEventRoute'})
    },
    navigateToTicketTypes() {
      // siia peab kaasa votma selected mainEventId, selle eelduseks et pärime andmed backendist
      router.push({name: 'eventTicketTypesRoute'})
    },

    getMainEvents() {
      //   see ei tööta hetkel, sest businessID ei tule kaasa. Kust see tuleb?
      this.$http.get("/events/main", {
            params: {
              mainEventInfo: this.mainEventInfo,
            }
          }
      ).then(response => {
        this.mainEventInfo = response.data
      }).catch(error => {
        const errorResponseJSON = error.response.data
      })
    },



    openDeleteMainEventModal() {
      this.$refs.deleteMainEventModal.$refs.modalRef.openModal()
    },


  },
  beforeMount() {
    this.getMainEvents()
  }
}
</script>


<style scoped>

</style>