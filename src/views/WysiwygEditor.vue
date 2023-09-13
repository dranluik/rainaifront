<template>
  <EditorButtons :editor="editor"/>
      <div v-html="contentAsHtml"></div>
      <editor-content :editor="editor"/>
      <button @click="displayHtml">Kuva HTML</button>
      <button @click="swapContent">Asenda HTML</button>
</template>
<script>
import {Editor, EditorContent} from "@tiptap/vue-3";
import {StarterKit} from "@tiptap/starter-kit";
import EditorButtons from "@/views/EditorButtons.vue";


export default {
  name: 'WysiwygEditor',
  components: {
    EditorButtons,
    EditorContent,
  },
  data() {
    return {
      editor: null,
      contentAsHtml: '',
    }
  },

  methods: {
    displayHtml() {
      this.contentAsHtml = this.editor.getHTML()
    },

    swapContent() {
      const dataFromBackend = '<p>New content from backend.</p>' // Replace this with the actual content from your backend
      if (this.editor) {
        this.editor.commands.setContent(dataFromBackend)
      }
    },
  },

  mounted() {
    this.editor = new Editor({
      content: '<p>I’m running TipTap with Vue.js. 🎉</p>',
      extensions: [StarterKit],
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },

}
</script>




