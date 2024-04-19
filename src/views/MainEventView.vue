<template>
  <div class="row justify-content-center">
    <div class="col col-5">

      <div class="input-group mb-3">
        <BusinessDropdown v-model="selectedBusinessId" @change="getAndSetSelectedBusinessId"/>
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
        <ImageInput @event-new-image-file-selected="setImageData"/>
      </div>

      <button @click="addNewMainEvent" type="submit" class="button-success btn btn-primary text-center text-nowrap">
        Edasi
      </button>
      <button @click="" type="submit" class="button-cancel btn btn-primary text-center text-nowrap">Loobu</button>

    </div>
  </div>

</template>
<script>
import BusinessDropdown from "@/components/event/BusinessDropdown.vue";
import ImageInput from "@/components/event/ImageInput.vue";
import router from "@/router";
import FeatureCategoryInfo from "@/views/FeatureCategoryView.vue";

export default {
  name: 'MainEventView',

  components: {FeatureCategoryInfo, ImageInput, BusinessDropdown},
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
    addNewMainEvent() {
      this.$http.post("/event/main", this.mainEventInfo
      ).then(response => {
        const mainEventId = response.data
        router.push({name: 'featureCategoryRoute', query: {mainEventId: mainEventId}})
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    setImageData(imageData) {
      this.mainEventInfo.imageData = imageData
    },

    getAndSetSelectedBusinessId() {
      this.mainEventInfo.businessId = this.selectedBusinessId
    },


  }


}
</script>