<template>
  <select v-model="selectedPackage" @change="emitSelectedPackage"
          class="custom-label form-select" aria-label="Default select example">
    <option selected disabled :value="0">Paketid</option>
    <option v-for="packageType in packageTypes" :value="packageType.packageId" :key="packageType.packageId">
      {{ packageType.packageName }}
    </option>
  </select>
</template>
<script>
import router from "@/router";

export default {
  name: 'EditorPackageTypeDropdown',

  data() {
    return {
      selectedPackage: 0,
      packageTypes: [
        {
          packageId: 0,
          packageName: '',
          packagePrice: 0
        }
      ]

    }
  },
  methods: {

    getPackageTypes() {
      this.$http.get("/signup")
          .then(response => {
            this.packageTypes = response.data.filter(packageType => packageType.packageId !== 1);
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },
    emitSelectedPackage() {
      this.$emit('event-update-selected-package-id', this.selectedPackage)
    }

  },
  beforeMount() {
    this.getPackageTypes()
  }

}
</script>

<style scoped>
.custom-label {
  font-size: 16px;
  font-weight: bold;
  color: rgb(31, 32, 35);
  background-color: white;

}

</style>