<template>
  <div>

    <div class="input-group mb-3">
<!--      siia tuleb business dropdown component (rolesDropdown järgi teha)-->
<!--      selected businessId-->
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text me-3">Pealkiri</span>
      <input v-model="title" type="text" class="form-control ">
    </div>

    <div class="input-group mb-3">
      <div class="form-floating">
            <textarea v-model="description" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                      style="height: 100px"></textarea>
        <label for="floatingTextarea2">Sündmuse kirjeldus</label>
      </div>
    </div>

    <div class="input-group mb-3">
      <input class="form-control" type="file" id="formFile">
    </div>

    <button @click="" type="submit" class="button-success btn btn-primary text-center text-nowrap">
      Edasi
    </button>
    <button @click="" type="submit" class="button-cancel btn btn-primary text-center text-nowrap">Loobu</button>

  </div>
</template>
<script>
export default {
  name: 'MainEventInfo',
  data() {
    return {
      businessId: 0,
      title: '',
      description: '',
      imageData: ''
    }
  },

}
</script>