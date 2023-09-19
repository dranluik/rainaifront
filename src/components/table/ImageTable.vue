<template>
  <table class="table table-secondary table-hover">
    <thead>
    <tr>
      <th scope="col">Pilt</th>
      <th scope="col">Kirjeldus</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="image in images" :key="image.imageId">
      <td><img :src="image.imageData" alt="Image" :style="{width: imageWidth}"></td>
      <td>{{ image.imageDescription }}</td>
      <td>
        <font-awesome-icon @click="deleteImage(image.imageId)" style="cursor: pointer" :icon="['fas', 'trash']" size="lg"/>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'ImageTable',
  props: {
    lessonId: Number
  },
  data(){
    return{
      imageTable: [],
      imageWidth: '10%',
      images: [
        {
          imageId: 0,
          imageData: '',
          imageDescription: ''
        }
      ]
    }
  },
  methods: {
    getImages() {
      this.$http.get("/image", {
            params: {
              lessonId: this.lessonId,
            }
          }
      ).then(response => {
        this.images = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
    deleteImage(imageId) {
      this.$http.delete("/image", {
            params: {
              imageId: imageId
            }
          }
      ).then(response => {
        this.getImages()
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
  },
  beforeMount() {
    this.getImages()
  }
}
</script>