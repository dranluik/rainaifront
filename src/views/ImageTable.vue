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
    <tr v-for="(imageObject, index) in imageTable" :key="index">
      <td><img :src="imageObject.image" alt="Image" :style="{width: imageWidth}"></td>
      <td>{{ imageObject.description }}</td>
      <td>
        <font-awesome-icon @click="deleteImage" style="cursor: pointer" :icon="['fas', 'trash']" size="lg"/>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'ImageTable',
  props: {
    deleteImage: {},
    imageTable: {},
    imageWidth: {}
  }
}
</script>