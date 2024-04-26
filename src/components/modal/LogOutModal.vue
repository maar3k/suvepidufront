<template>
  <Modal ref="modalRef">
    <template #title>
      <h3>Soovid välja logida?</h3>
    </template>
    <template #buttons>
      <button @click="" type="submit" class="button-danger btn btn-primary text-center text-nowrap">Logi välja</button>
      <button @click="" type="submit" class="button-cancel btn btn-primary text-center text-nowrap">Loobu</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";


export default {
  name: 'LogOutModal',
  components: {Modal},
    methods: {

  },

}


</script>
