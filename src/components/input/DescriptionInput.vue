<template>
  <div>
    <input v-model="descriptionText" @change="handleDescription" type="text" class="form-control" placeholder="Kirjeldus">
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
    }
  }
}
</script>