<template>
  <div>
  <input type="file" ref="imageInputRef" @change="handleImage" accept="image/x-png,image/jpeg,image/gif">
  </div>
</template>

<script>
export default {
  name: 'ImageInput',
  data(){
    return{
      imageDataBase64: ''
    }
  },
  methods: {
    handleImage(eventFile) {
      const selectedImage = eventFile.target.files[0];
      this.emitBase64(selectedImage);
    },
    emitBase64(imageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageDataBase64 = reader.result;
        this.$emit('event-emit-base64', this.imageDataBase64)
      };
      reader.onerror = function (error) {
        alert(error);
      }
      reader.readAsDataURL(imageFile)
    },
    clearImageInput(){
      this.$refs.imageInputRef.value = '';
    }
  }
}
</script>