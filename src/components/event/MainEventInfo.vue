<template>
  <div>

    <div class="input-group mb-3">
      <BusinessDropdown v-model="selectedBusinessId"/>
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text me-3">Pealkiri</span>
      <input v-model="mainEventInfo.title" type="text" class="form-control ">
    </div>

    <div class="input-group mb-3">
      <div class="form-floating">
            <textarea v-model="mainEventInfo.description" class="form-control" placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style="height: 100px"></textarea>
        <label for="floatingTextarea2">Sündmuse kirjeldus</label>
      </div>
    </div>

    <div class="input-group mb-3">
      <ImageInput @event-new-image-file-selected="setImageData" />
    </div>

    <button @click="" type="submit" class="button-success btn btn-primary text-center text-nowrap">
      Edasi
    </button>
    <button @click="" type="submit" class="button-cancel btn btn-primary text-center text-nowrap">Loobu</button>

  </div>
</template>
<script>
import BusinessDropdown from "@/components/newaccount/BusinessDropdown.vue";
import ImageInput from "@/components/event/ImageInput.vue";

export default {
  name: 'MainEventInfo',

  components: {ImageInput, BusinessDropdown},
  data() {
    return {
      selectedBusinessId: 0,
      mainEventInfo: {
        businessId: 0,
        title: '',
        description: '',
        imageData: ''
      }
    }
  },
  methods: {
    setImageData(imageData) {
      this.mainEventInfo.imageData = imageData
    },
  }


}
</script>