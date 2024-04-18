<template>
  <div v-for="feature in features" :key="feature.featureId"  class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
    <label class="form-check-label"
           for="flexSwitchCheckDefault">{{ feature.featureName }}</label>
  </div>

  <button @click="" type="submit" class="button-success btn btn-primary text-center text-nowrap">
    Edasi
  </button>
  <button @click="" type="submit" class="button-cancel btn btn-primary text-center text-nowrap">Loobu</button>

</template>

<script>
export default {
  name: "FeatureCategoryInfo",
  data() {
    return {
      features: [
        {
          featureId: 0,
          featureName: ''
        }
      ]
    }
  },
  methods: {
    sendGetFeaturesRequest() {
      this.$http.get("/event/feature"
      ).then(response => {
        this.features = response.data
      }).catch(error => {
        const errorResponseJSON = error.response.data
      })
    },


  },
  beforeMount() {
    this.sendGetFeaturesRequest()
  }

}
</script>
