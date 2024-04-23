<template>
  <Modal ref="modalRef">
    <template #body>
      <div class="row">
        <div class="container text-center">
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Kogu piletite arv</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Piletituubid</option>
              <option value="1">Penskarid</option>
              <option value="2">Taiskasvanud</option>
              <option value="3">Lapsed</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Kogu piletite arv</label>
            <input type="number" class="form-control" id="">
          </div>
          <button type="submit" class="btn btn-primary">Lisa</button>
        </div>
      </div>
    </template>
  </Modal>
</template>
<script>
import Modal from "@/components/modal/Modal.vue";

export default {
  name: "TicketModal",
  components: {Modal}
}
</script>