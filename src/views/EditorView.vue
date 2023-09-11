<template>
  <div class="container text-center">
    <div class="row mb-4">
      <div class="col">
        <div class="input-group mb-3">
          <input v-model="lessonName" type="text" class="form-control" placeholder="Teema nimi">
        </div>
      </div>
      <div class="col">
        <button type="button" class="btn btn-dark">Lisa Teema</button>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "EditorView",
  props: {
    newLessonName: String
  },
  data(){
    return{
      lessonName: this.newLessonName || ''
    }
  }
}

</script>
