<template>
  <div>
<!--    see korda teha, parooli väljad spaniga-->
<!--    data blokk tuua-->
    <div class="input-group mb-3">
      <span class="input-group-text me-3">Kasutajanimi</span>
      <!--              <input v-model="user.username" type="text" class="form-control ">-->
    </div>

    <div class="row mt-3">
      <div class="col">
        <label for="password" class="form-label">Parool</label>
      </div>
      <div class="col">
        <!--                <input v-model="user.password" type="password" class="form-control" id="password">-->
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





  </div>
</template>
<script>
export default {
  name: 'UserInfo',
  props: {
    roleId: Number()
  }
}
</script>