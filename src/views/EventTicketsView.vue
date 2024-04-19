


<template>
  <div class="container text-center">
    <h1>Suvegrill 2024 - Valga</h1>
    <div class="row">
      <div class="col-8">

        <table class="table">
          <thead>
          <tr>
            <th scope="col">Piletituup</th>
            <th scope="col">Kogu piletite arv</th>
            <th scope="col">Saadaval</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Penskarid</td>
            <td>100</td>
            <td>100</td>
          </tr>

          </tbody>
        </table>
        <font-awesome-icon :icon="['fas', 'plus']" />




      </div>

    </div>
    <div class="row">
      <div class="col-4">



          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Kogu piletite arv</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Piletituubid</option>
              <option value="1">Penskarid</option>
              <option value="2">Taiskasvanud</option>
              <option value="3">Lapsed</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Kogu piletite arv</label>
            <input type="number" class="form-control" id="exampleInputPassword1">
          </div>
          <button type="submit" class="btn btn-primary">Lisa</button>



      </div>

    </div>
  </div>
</template>
<script>
import router from "@/router";

export default {
  name: "EventTicketTypesView",
  methods: {
    navigateToFeaturesCategories() {
      router.push({name: 'featureCategoryRoute'})
    }
  }
}
</script>


<style scoped>

</style>