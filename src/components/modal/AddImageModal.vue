<template>
  <div>
    <Modal close-button-name="Katkesta" ref="modalRef">
    <template #header>
      <h1>Lisa pilt</h1>
    </template>
      <template #body>
        <div class="col">
          <div class="row">
            <input type="text" class="form-control" placeholder="Pildi kirjeldus">
          </div>
          <div class="row">
            <ImageInput/>
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
import ImageInput from "@/components/input/ImageInput.vue";

export default {
  name: 'AddImageModal',
  components: {ImageInput, Modal}
}
</script>

