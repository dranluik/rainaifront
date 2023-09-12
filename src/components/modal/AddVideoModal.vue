<template>
  <div>
    <Modal close-button-name="Katkesta" ref="modalRef">
      <template #header>
        <h1>Lisa video</h1>
      </template>
      <template #body>
        <div class="col">
          <div class="row">
            <input type="text" class="form-control" placeholder="Video kirjeldus">
          </div>
          <div class="row mt-3">
            <input type="url" class="form-control" placeholder="Video link">
          </div>
        </div>
      </template>
      <template #footer>
        <button type="button" class="btn btn-outline-success">Lisa video</button>
      </template>
    </Modal>
  </div>
</template>
<script>
import Modal from "@/components/modal/Modal.vue";

export default {
  name: "AddVideoModal",
  components: {Modal}
}
</script>
<style scoped>

</style>