


<template>
  <div class="container text-center">
    <h1>Minu sündmused</h1>
    <div class="row">
      <div class="col-8">

        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col">Nimi</th>
            <th scope="col">Kirjeldus</th>
            <th scope="col">Pilt</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{{ this.title }}</td>
            <td>{{this.description}}</td>
            <td><button @click="" type="button" class="btn btn-primary">Kuva pilt</button></td>
            <td><button @click="navigateToFeaturesCategories" type="button" class="btn btn-primary">Featurid</button></td>
            <td><button @click="navigateToEventDetails" type="button" class="btn btn-primary">Toimumiskohad</button></td>
            <td><button @click="navigateToTicketTypes" type="button" class="btn btn-primary">Piletitüübid</button></td>
          </tr>

          </tbody>
        </table>
        <font-awesome-icon @click="navigateToAddEvent" :icon="['fas', 'plus']" />




      </div>

    </div>

  </div>
</template>
<script>
import router from "@/router";

export default {
  name: "EventsView",

  data() {
    return {

        mainEventId: 0,
        businessId: 0,
        title: 'Test event',
        description: 'Test description',
        imageData: ''

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
      router.push({name: 'eventTicketTypesRoute'})
    },



  }
}
</script>


<style scoped>

</style>