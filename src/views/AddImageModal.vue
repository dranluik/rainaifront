<template>
  <div>
    <Modal close-button-name="Katkesta" ref="modalRef">
    <template #header>
      <h1>Lisa pilt</h1>
    </template>
      <template #body>
        <div class="col">
          <div class="row">
            input kirjeldus
          </div>
          <div class="row">
            input pildi valik
          </div>

        </div>

      </template>
      <template #footer>
        <button type="button" class="btn btn-outline-success">Lisa pilt</button>
      </template>
    </Modal>
  </div>
</template>
<script>
import Modal from "@/components/modal/Modal.vue";

export default {
  name: 'AddImageModal',
  components: {Modal}
}
</script>

