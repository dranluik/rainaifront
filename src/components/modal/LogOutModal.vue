<template>
  <div>
    <Modal close-button-name="Ei" ref="modalRef">
      <template #header>
        <h3 class="custom-heading">Logi välja?</h3>
      </template>

      <template #body>
        <h1 class="custom-heading">Kas sa ikka soovid välja logida?</h1>
      </template>

      <template #footer>
        <button @click="executeLogOut" type="button" class="btn btn-outline-primary">JAH!!!</button>
      </template>

    </Modal>
  </div>
</template>
<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: 'LogOutModal',
  components: {Modal},
  methods: {
    executeLogOut() {
      sessionStorage.clear()
      this.$refs.modalRef.closeModal()
      this.$emit('event-update-nav-menu')
      router.push({name: 'homeRoute'})
    },
  }
}
</script>
