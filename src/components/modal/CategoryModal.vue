<template>
  <Modal ref="modalRef">
    <template #title>
      <h3>Lisa sündmuse kategooriad</h3>
    </template>
    <template #body>
      <div class="row text-start mx-5">
        <div v-if="this.selectedCategories.length > 0" class="col">
          <div v-for="category in categories" :key="category.categoryId" class="form-check form-switch">
            <input v-model="category.isAvailable" class="form-check-input" type="checkbox" role="switch"
                   id="flexSwitchCheckDefault">
            <label class="form-check-label"
                   for="flexSwitchCheckDefault">{{ category.categoryName }}</label>
          </div>
        </div>

        <div v-if="this.selectedCategories.length === 0" class="col">
          <div v-for="selectedCategory in selectedCategories" :key="selectedCategory.categoryId" class="form-check form-switch">
            <input v-model="selectedCategory.isAvailable" class="form-check-input" type="checkbox" role="switch"
                   id="flexSwitchCheckDefault">
            <label class="form-check-label"
                   for="flexSwitchCheckDefault">{{ selectedCategory.categoryName }}</label>
          </div>
        </div>
      </div>
    </template>
    <template #buttons>
      <button @click="sendPostEventCategoriesRequest" type="submit"
              class="button-success btn btn-primary text-center text-nowrap">
        OK
      </button>
      <button @click="closeCategoryModal" type="submit" class="button-cancel btn btn-primary text-center text-nowrap">
        Loobu
      </button>
    </template>
  </Modal>
</template>
<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: 'CategoryModal',
  components: {Modal},
  data() {
    return {
      mainEventId: 0,
      categories: [
        {
          categoryId: 0,
          categoryName: '',
          isAvailable: false
        }
      ],

      selectedCategories: [
        {
          categoryId: 0,
          mainEventId: 0,
          categoryName: '',
          isAvailable: false
        }
      ]
    }
  },
  methods: {
    sendGetCategoriesRequest() {
      this.$http.get("/categories"
      ).then(response => {
        this.categories = response.data
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    sendPostEventCategoriesRequest() {
      this.$http.post("/event/categories", this.categories, {
            params: {
              mainEventId: this.mainEventId
            }
          }
      ).then(() => {
        this.closeCategoryModal()
        router.push({name: 'featureCategoryRoute'})
        this.$emit('event-category-edited-or-added')
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    sendGetSelectedCategoriesRequest(mainEventId) {
      this.$http.get("/event/categories", {
            params: {
              mainEventId: mainEventId
            }
          }
      ).then(response => {
        this.selectedCategories = response.data
      }).catch(() => {
        router.push({name: 'errorRoute'})
      })
    },

    decideIfNewOrEditCategories(mainEventId) {
      this.mainEventId = mainEventId
      if (mainEventId !== 0) {
        this.sendGetSelectedCategoriesRequest(mainEventId)
      }
    },

    closeCategoryModal() {
      this.$refs.modalRef.closeModal()
    },

  },
  beforeMount() {
    this.sendGetCategoriesRequest()
  }
}
</script>