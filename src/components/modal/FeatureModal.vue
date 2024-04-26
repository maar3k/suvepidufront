<template>
  <Modal ref="modalRef">
    <template #title>
      <h3>Lisa sündmuse võimaluse</h3>
    </template>
    <template #body>
      <div class="row text-start mx-5">
        <div class="col">
          <div v-for="feature in features" :key="feature.featureId" class="form-check form-switch">
            <input v-model="feature.isAvailable" class="form-check-input" type="checkbox" role="switch"
                   id="flexSwitchCheckDefault">
            <label class="form-check-label"
                   for="flexSwitchCheckDefault">{{ feature.featureName }}</label>
          </div>
        </div>
      </div>
    </template>
    <template #buttons>
      <button @click="sendPostEventFeaturesRequest" type="submit"
              class="button-success btn btn-primary text-center text-nowrap">
        OK
      </button>
      <button @click="closeFeatureModal" type="submit" class="button-danger btn btn-primary text-center text-nowrap">
        Loobu
      </button>
    </template>
  </Modal>
</template>
<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: 'FeatureModal',
  components: {Modal},
  data() {
    return {
      mainEventId: 0,
      features: [
        {
          featureId: 0,
          featureName: '',
          isAvailable: false
        }
      ],

      selectedFeatures: [
        {
          featureId: 0,
          mainEventId: 0,
          featureName: '',
          isAvailable: false
        }
      ],
    }
  },
  methods: {
    sendGetFeaturesRequest() {
      this.$http.get("/features"
      ).then(response => {
        this.features = response.data
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    sendPostEventFeaturesRequest() {
      this.$http.post("/event/features", this.features, {
            params: {
              mainEventId: this.mainEventId
            }
          }
      ).then(() => {
        this.closeFeatureModal()
        router.push({name: 'featureCategoryRoute'})
        this.$emit('event-feature-edited-or-added')
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    sendGetSelectedFeaturesRequest(mainEventId) {
      this.$http.get("/event/features", {
            params: {
              mainEventId: mainEventId
            }
          }
      ).then(response => {
        this.selectedFeatures = response.data
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    decideIfNewOrEditFeatures(mainEventId) {
      this.mainEventId = mainEventId
      if (mainEventId !== 0) {
        this.sendGetSelectedFeaturesRequest(mainEventId)
      }
    },

    closeFeatureModal() {
      this.$refs.modalRef.closeModal()
    },
  },
  beforeMount() {
    this.sendGetFeaturesRequest()
  }
}
</script>