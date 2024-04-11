<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        Konto tüüp
      </div>
      <div class="col">
        <select class="form-select">
          <option selected value="0">Vali</option>
          <option>Tavakasutaja</option>
          <option>Korraldaja</option>
        </select>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label for="username" class="form-label">Kasutajanimi</label>
      </div>
      <div class="col">
        <input type="text" class="form-control" id="username">
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label for="password" class="form-label">Parool</label>
      </div>
      <div class="col">
        <input type="password" class="form-control" id="password">
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label for="password" class="form-label">Parool uuesti</label>
      </div>
      <div class="col">
        <input type="password" class="form-control" id="password">
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
      </div>
      <div class="col">
        <button @click="" type="submit" class="button-success btn btn-primary text-center text-nowrap">OK</button>
        <button @click="" type="submit" class="button-cancel btn btn-primary text-center text-nowrap">Loobu</button>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'NewUserView',

}

</script>


