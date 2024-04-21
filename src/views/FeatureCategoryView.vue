<template>
  <div class="row justify-content-center">

    <div class="col col-5">
      <div v-for="feature in features" :key="feature.featureId" class="form-check form-switch">
        <input v-model="feature.isAvailable" class="form-check-input" type="checkbox" role="switch"
               id="flexSwitchCheckDefault">
        <label class="form-check-label"
               for="flexSwitchCheckDefault">{{ feature.featureName }}</label>
      </div>
    </div>

    <div class="col col-5">
      <div v-for="category in categories" :key="category.categoryId" class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
        <label class="form-check-label"
               for="flexSwitchCheckDefault">{{ category.categoryName }}</label>
      </div>
    </div>

    <div>
      <button @click="sendPostEventFeaturesAndCategoriesRequest" type="submit" class="button-success btn btn-primary text-center text-nowrap">
        Edasi
      </button>
      <button @click="" type="submit" class="button-cancel btn btn-primary text-center text-nowrap">Loobu</button>
    </div>

  </div>
</template>

<script>
import router from "@/router";
import {useRoute} from "vue-router";

export default {
  name: "FeatureCategoryView",
  data() {
    return {
      // mainEventIdFromUrl: useRoute().query.mainEventId,
      mainEventId: Number(useRoute().query.mainEventId),
      numberRequestsSuccessfullySent: 0,
      features: [
        {
          featureId: 0,
          featureName: '',
          isAvailable: false
        }
      ],

      categories: [
        {
          categoryId: 0,
          categoryName: '',
          isAvailable: false
        }
      ]
    }
  },
  methods: {
    sendGetFeaturesRequest() {
      this.$http.get("/feature"
      ).then(response => {
        this.features = response.data
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    sendGetCategoriesRequest() {
      this.$http.get("/category")
          .then(response => {
            this.categories = response.data
          })
          .catch(() => {
            router.push({name: 'errorRoute'})
          })
    },

    sendPostEventFeaturesRequest() {
      this.$http.post("/event/features/", this.features, {
            params: {
              mainEventId: this.mainEventId
            }
          }
      ).then(() => {
        this.numberRequestsSuccessfullySent++
      }).catch(() => {
        //const errorResponseJSON = error.response.data
      })
    },

    sendPostEventCategoriesRequest() {
      this.$http.post("/event/categories/", this.categories, {
            params: {
              mainEventId: this.mainEventId
            }
          }
      ).then(() => {
        this.numberRequestsSuccessfullySent++
      }).catch(() => {
        //const errorResponseJSON = error.response.data
      })
    },

    sendPostEventFeaturesAndCategoriesRequest() {
      this.sendPostEventFeaturesRequest()
      this.sendPostEventCategoriesRequest()
    },

    // post http meetod: addEventCategories()
    // url/event/category?mainEventId=12
    // /event/category/${mainEventId}

    // post http meetod: addEventFeatures()
    // url/event/feature?mainEventId=12


  },
  watch: {
    numberRequestsSuccessfullySent() {
      alert(this.numberRequestsSuccessfullySent)
      const numberOfMessagesRequired = 2;
      if (this.numberRequestsSuccessfullySent === numberOfMessagesRequired) {
        // navigate to next step
      }
    }
  },
  beforeMount() {
    this.sendGetFeaturesRequest()
    this.sendGetCategoriesRequest()
  }

}
</script>
