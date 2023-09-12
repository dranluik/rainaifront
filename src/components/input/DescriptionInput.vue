<template>
  <div>
    <input v-model="descriptionText" @change="handleDescription" type="text" class="form-control" placeholder="Kirjeldus" ref="descriptionInputRef">
  </div>
</template>
<script>
export default {
  name: 'DescriptionInput',
  data(){
    return{
      descriptionText: ''
    }
  },
  methods:{
    handleDescription(){
      this.$emit('event-description-update',this.descriptionText)
    },
    clearDescriptionInput(){
      this.$refs.descriptionInputRef.value = ''
    }
  }
}
</script>