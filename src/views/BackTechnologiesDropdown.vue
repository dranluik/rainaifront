<template>
  <select class="custom-label form-select" aria-label="Default select example">
    <option selected>Tehnoloogiad</option>
    <option v-for="technology in backTechnologies" :value="technology.packageTypeId" :key="technology.packageTypeId">
      {{technology.name}}
    </option>
  </select>
</template>
<script>
export default {
  name: 'backTechnologiesDropdown',
  props: {
    backTechnologies: {}
  }
}
</script>