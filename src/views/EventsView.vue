


<template>
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
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Suvegrill 2024</td>
            <td>Korralik pidu!</td>
            <td>Pilt placeholder</td>
            <td><button @click="navigateToFeaturesCategories" type="button" class="btn btn-primary">Featurid</button></td>
            <td><button @click="navigateToEventDetails" type="button" class="btn btn-primary">Toimumiskohad</button></td>
            <td><button @click="navigateToTicketTypes" type="button" class="btn btn-primary">Piletituubid</button></td>
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