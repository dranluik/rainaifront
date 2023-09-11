<template>
  <div>
    <Modal close-button-name="Ei" ref="modalRef">

      <template #header class="heading1">
        Logi välja?
      </template>

      <template #body>
        <h1 class="custom-heading">Kas oled ikka tõesti kindel?</h1>
      </template>

      <template #footer>
        <button @click="executeLogOut" type="button" class="btn btn-success">JAH!!!</button>
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
<style>
.heading1 {
  color: #42b983;
}
.custom-heading {
  color: #42b983;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>