<template>
  <div>
    <DeleteMainEventModal @event-deleted="eventEventDeleted" ref="deleteMainEventModal"/>
  </div>
  <div class="container text-center">
    <h1>Minu sündmused</h1>

    <div class="input-group mb-3">
      <BusinessDropdown v-model="selectedBusinessId" @event-selected-business-change="setSelectedBusinessId"/>
    </div>

    <div class="row">
      <div class="col-12">
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
          <tr v-for="mainEventInfo in mainEvents" :key="mainEventInfo.mainEventId">
            <td>{{ mainEventInfo.title }}</td>
            <td>{{ mainEventInfo.description }}</td>
            <td>
              <EventImage :image-data="mainEventInfo.imageData"/>
            </td>
            <td>
              <button @click="navigateToFeaturesCategories(mainEventInfo.mainEventId)" type="button"
                      class="btn btn-primary">Võimalused ja
                kategooriad
              </button>
            </td>
            <td>
              <button @click="navigateToEventDetail(mainEventInfo.mainEventId)" type="button" class="btn btn-primary">Toimumiskohad</button>
            </td>
            <td>
              <button @click="navigateToTicketTypes(mainEventInfo.mainEventId)" type="button" class="btn btn-primary">
                Piletitüübid
              </button>
            </td>
            <td>
              <font-awesome-icon @click="navigateToEditEvent(mainEventInfo.mainEventId)" class="cursor-pointer"
                                 :icon="['far', 'pen-to-square']"/>
            </td>
            <td>
              <font-awesome-icon @click="openDeleteMainEventModal(mainEventInfo.mainEventId)" class="cursor-pointer"
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
import DeleteMainEventModal from "@/components/modal/DeleteMainEventModal.vue";
import BusinessDropdown from "@/components/event/BusinessDropdown.vue";
import EventImage from "@/components/image/EventImage.vue";

export default {
  name: "EventsView",
  components: {EventImage, BusinessDropdown, DeleteMainEventModal},
  data() {
    return {
      selectedBusinessId: 0,

      mainEvents: [
        {
          title: '',
          description: '',
          imageData: '',
          mainEventId: 0
        }
      ]
    }
  },
  methods: {
    navigateToFeaturesCategories(mainEventId) {
      alert("todo navigeeeri õigele lehele mainEventId kaasa " + mainEventId)
      router.push({name: 'featureCategoryRoute'})
    },

    navigateToEventDetail(mainEventId) {
      router.push({name: 'eventDetailRoute', query: {mainEventId: mainEventId}})
    },

    navigateToAddEvent() {
      router.push({name: 'mainEventRoute'})
    },

    navigateToEditEvent(mainEventId) {
      router.push({name: 'mainEventRoute', query: {mainEventId: mainEventId}})
    },

    navigateToTicketTypes(mainEventId) {
      router.push({name: 'eventTicketTypesRoute', query: {mainEventId: mainEventId}})
    },

    sendGetMainEventsRequest() {
      this.$http.get("/events/main", {
            params: {
              businessId: this.selectedBusinessId
            }
          }
      ).then(response => {
        this.mainEvents = response.data
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    openDeleteMainEventModal(mainEventId) {
      this.$refs.deleteMainEventModal.mainEventId = mainEventId;
      this.$refs.deleteMainEventModal.$refs.modalRef.openModal()
    },

    setSelectedBusinessId(selectedBusinessId) {
      this.selectedBusinessId = selectedBusinessId
      this.sendGetMainEventsRequest()
    },

    eventEventDeleted() {
      this.sendGetMainEventsRequest()
    }


  },
}
</script>
