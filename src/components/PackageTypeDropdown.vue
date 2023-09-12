<template>
  <div class="form-floating">
    <select v-model="selectedPackage" @change="emitSelectedPackage" class="form-select" id="floatingSelect" aria-label="Floating label select example">
      <option v-for="packageType in packageTypes" :value="packageType.packageId" :key="packageType.packageId">
        {{ packageType.packageName }} - €{{packageType.packagePrice}}</option>
    </select>
    <label for="floatingSelect">Vali pakett</label>
  </div>
</template>
<script>
import router from "@/router";

export default {
  name: 'PackageTypeDropdown',
  data(){
    return{
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
            this.packageTypes = response.data
          })
          .catch(error => {
           router.push({name: 'errorRoute'})
          })
    },
    emitSelectedPackage(){
      this.$emit('event-update-selected-package-id', this.selectedPackage)
    }

  },
  beforeMount() {
    this.getPackageTypes()
  }

}
</script>

<style scoped>
/* Style the container div */
.form-floating {
  width: 300px; /* Adjust the width as needed */
  background-color: #000000; /* Dark background color */
  color: #919191; /* Text color */
  border-radius: 10px; /* Rounded corners */
  padding: 10px; /* Add some padding */
}

/* Style the select element */
.form-select {
  background-color: #181818; /* Darker background color */
  color: #939393; /* Text color */
  border: 2px solid #2c2c2c; /* Border color */
}

</style>