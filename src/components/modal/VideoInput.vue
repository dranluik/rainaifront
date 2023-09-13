<template>
  <input v-model="addedVideoLink" type="text" @change="handleVideoLink" ref="videoInputRef" class="form-control" placeholder="Video link">
</template>
<script>
export default {
  name: 'VideoInput',
  data(){
    return{
      addedVideoLink: ''
    }
  },
  methods: {
    handleVideoLink(videoLink){
      this.$emit('event-handle-video-link', this.addedVideoLink)
      this.addedVideoLink = videoLink
    },
    clearVideoLinkInput(){
      this.$refs.videoInputRef.value = ''
    }
  }
}
</script>