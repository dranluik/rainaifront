<template>
  <div>
  <input type="file" accept="image/x-png,image/jpeg,image/gif">
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
      const reader = new FileReader();
      reader.onload = () => {
        this.imageDataBase64 = reader.result;
      }
    }
  }
}
</script>