<template>
  <div class="container text-center">
    <!--    todo: andmebaasist title-->
    <h1>{{ this.mainEventId }}</h1>
    <div class="row">
      <div class="col-8">

        <table class="table">
          <thead>
          <tr>
            <th scope="col">Võimalused</th>
            <th scope="col">Kategooriad</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <p v-for="feature in selectedFeatures" :key="feature.featureId">
                {{ feature.featureName }} </p>
            </td>
            <td>
              <p v-for="category in selectedCategories" :key="category.categoryId">
                {{ category.categoryName }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <!--              kas siin peaks miski muu id viide olema. Teistel on v-for loobi kaudu.-->
              <font-awesome-icon @click="openFeatureModalNew(mainEventId)" :icon="['fas', 'plus']"/>
            </td>
            <div>
              <font-awesome-icon @click="openCategoryModalNew(mainEventId)" :icon="['fas', 'plus']"/>
            </div>
          </tr>
          <tr>
            <td>
              <font-awesome-icon @click="openFeatureModalEdit(mainEventId)" class="cursor-pointer"
                                 :icon="['far', 'pen-to-square']"/>
            </td>
            <td>
              <font-awesome-icon @click="openCategoryModalEdit(mainEventId)" class="cursor-pointer"
                                 :icon="['far', 'pen-to-square']"/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div>
    <FeatureModal ref="featureModalRef"/>
  </div>
  <div>
    <CategoryModal ref="categoryModalRef"/>
  </div>
</template>

<script>
import router from "@/router";
import {useRoute} from "vue-router";
import FeatureModal from "@/components/modal/FeatureModal.vue";
import CategoryModal from "@/components/modal/CategoryModal.vue";

export default {
  name: "FeatureCategoryView",
  components: {CategoryModal, FeatureModal},
  data() {
    return {
      mainEventId: useRoute().query.mainEventId,

      selectedFeatures: [
        {
          featureId: 0,
          mainEventId: 0,
          featureName: ''
        }
      ],

      selectedCategories: [
        {
          categoryId: 0,
          mainEventId: 0,
          categoryName: ''
        }
      ]

    }
  },
  methods: {
    openFeatureModalNew(mainEventId) {
      // this.$refs.featureModalRef.mainEventId = mainEventId
      this.$refs.featureModalRef.decideIfNewOrEditFeatures(mainEventId)
      this.$refs.featureModalRef.$refs.modalRef.openModal()
    },

    openCategoryModalNew(mainEventId) {
      // this.$refs.categoryModalRef.mainEventId = mainEventId
      this.$refs.categoryModalRef.decideIfNewOrEditCategories(mainEventId)
      this.$refs.categoryModalRef.$refs.modalRef.openModal()
    },

    sendGetSelectedFeaturesRequest() {
      console.log(this.mainEventId)
      this.$http.get("/event/features", {
            params: {
              mainEventId: this.mainEventId
            }
          }
      ).then(response => {
        this.selectedFeatures = response.data
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    sendGetSelectedCategoriesRequest() {
      this.$http.get("/event/categories", {
            params: {
              mainEventId: this.mainEventId
            }
          }
      ).then(response => {
        this.selectedCategories = response.data
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    // getMainEventIdFromUrlQueryParameter() {
    //   // siin ei saa ainult urlist id-d vaid siin otsustame, kas on edit või new
    //   if (this.mainEventId !== undefined) {
    //     const mainEventId = Number(this.mainEventId);
    //     this.sendGetSelectedFeaturesRequest(mainEventId)
    //     this.sendGetSelectedCategoriesRequest(mainEventId)
    //   }
    // },


  },

  beforeMount() {
    this.sendGetSelectedFeaturesRequest()
    this.sendGetSelectedCategoriesRequest()
  }
}


</script>
