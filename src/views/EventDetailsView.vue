


<template>
  <div class="container text-center">
    <h1>Suvegrill 2024</h1>
    <div class="row">
      <div class="col-8">

        <table class="table">
          <thead>
          <tr>
            <th scope="col">Asukoht</th>
            <th scope="col">Kuupäev</th>
            <th scope="col">Piletid</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Valga</td>
            <td>21.07.2024</td>
            <td><button @click="navigateToEventTickets" type="button" class="btn btn-primary">Piletid</button></td>
          </tr>
          <tr>
            <td>Paide</td>
            <td>22.07.2024</td>
            <td><button @click="navigateToEventTickets" type="button" class="btn btn-primary">Piletid</button></td>
          </tr>

          </tbody>
        </table>
        <font-awesome-icon :icon="['fas', 'plus']" />




      </div>

    </div>
    <div class="row">
      <div class="col-4">


          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Kuupaev</label>
            <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Asukoht</label>
            <input type="text" class="form-control" id="exampleInputPassword1">
          </div>
          <button type="submit" class="btn btn-primary">Lisa</button>



      </div>

    </div>
  </div>
</template>
<script>
import router from "@/router";

export default {
  name: "EventDetailsView",
  methods: {
    navigateToEventTickets() {
      router.push({name: 'eventTicketsRoute'})
    },
  }
}
</script>


<style scoped>

</style>