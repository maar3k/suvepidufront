<template>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
<!--    value ilmselt ei toota labeliga, seega vaja uurida, et kuidas v-for toole saada-->
    <label v-for="feature in features" :value="feature.featureId" :key="feature.featureId" class="form-check-label"
           for="flexSwitchCheckDefault">{{ feature.featureName }}</label>
  </div>
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
      this.$http.get("/event/feature", {
            params: {
              featureId: this.features.featureId,
              someRequestParam1: this.someDataBlockVariable1,
            }
          }
      ).then(response => {
        const responseJSON = response.data
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
