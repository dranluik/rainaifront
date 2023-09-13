<template>
  <EditorButtons :editor="editor"/>
  <EditorButtonsSecondRow :editor="editor"/>
  <div v-html="contentAsHtml"></div>
  <div>{{contentAsHtml}}</div>
  <editor-content :editor="editor" @change="displayHtml"/>
  <button @click="displayHtml">Kuva HTML</button>
  <button @click="swapContent">Asenda HTML</button>
</template>
<script>
import {Editor, EditorContent} from "@tiptap/vue-3";
import {StarterKit} from "@tiptap/starter-kit";
import EditorButtons from "@/views/EditorButtons.vue";
import Table from '@tiptap/extension-table'
import Document from '@tiptap/extension-document'
import Gapcursor from '@tiptap/extension-gapcursor'
import Paragraph from '@tiptap/extension-paragraph'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Text from '@tiptap/extension-text'
import EditorButtonsSecondRow from "@/views/EditorButtonsSecondRow.vue";


export default {
  name: 'WysiwygEditor',
  components: {
    EditorButtonsSecondRow,
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
    handleContentChange() {
      // This method is called when changes occur in the editor's content
      this.contentAsHtml = this.editor.getHTML()
      this.$emit('event-editor-content-changed', this.contentAsHtml)
    },

  },

  mounted() {
    this.editor = new Editor({
      content: '<p>Kirjuta teema siia 🎉</p>',
      extensions: [
        StarterKit,
        Document,
        Paragraph,
        Text,
        Gapcursor,
        Table.configure({
          resizable: true,
        }),
        TableRow,
        TableHeader,
        TableCell,
      ],
    });
    // Watch for changes in the editor's content
    this.$watch(
        () => this.editor.getHTML(), // Watch the HTML content of the editor
        () => {
          // Execute a method when changes occur
          this.handleContentChange();
        }
    );
  },

  beforeUnmount() {
    this.editor.destroy()
  },


}
</script>




