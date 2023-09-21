<template>
  <EditorButtons :editor="editor"/>
  <EditorButtonsSecondRow :editor="editor"/>
<!--  <div v-html="contentAsHtml"></div>-->
  <editor-content :editor="editor"/>
  <button @click="updateEditorContentRequest" class="btn btn-outline-primary mb-3">SALVESTA</button>
  <AlertSuccess :alert-message="successMessage"/>
  <!--  <button @click="swapContent">Asenda HTML</button>-->
</template>
<script>
import {Editor, EditorContent} from "@tiptap/vue-3";
import {StarterKit} from "@tiptap/starter-kit";
import EditorButtons from "@/components/buttons/EditorButtons.vue";
import Table from '@tiptap/extension-table'
import Document from '@tiptap/extension-document'
import Gapcursor from '@tiptap/extension-gapcursor'
import Paragraph from '@tiptap/extension-paragraph'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Text from '@tiptap/extension-text'
import EditorButtonsSecondRow from "@/components/buttons/EditorButtonsSecondRow.vue";
import {LESSON_CONTENT_SAVED} from "@/assets/script/AlertMessage";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";


export default {
  name: 'WysiwygEditor',
  props: {
    lessonId: Number
  },
  components: {
    AlertSuccess,
    EditorButtonsSecondRow,
    EditorButtons,
    EditorContent,
  },
  data() {
    return {
      editor: null,
      contentAsHtml: '',
      contentAsBase64: '',

      editorContent: {
        lessonId: 0,
        content: ''
      },
      successMessage: ''
    }
  },

  methods: {



    handleEditorContent() {
      const encoder = new TextEncoder();
      const utf8Content = encoder.encode(this.contentAsHtml)
      this.editorContent.content = btoa(String.fromCharCode.apply(null, utf8Content))
    },

    updateEditorContentRequest() {
      this.editorContent.lessonId = this.lessonId
      this.handleEditorContent()
      this.sendUpdateEditorContentRequest()

    },

    handleContentChange() {
      // This method is called when changes occur in the editor's content
      this.successMessage = ''
      this.contentAsHtml = this.editor.getHTML()
      this.handleEditorContent()
      this.$emit('event-editor-content-changed', this.contentAsHtml)
    },

    sendUpdateEditorContentRequest() {
      this.$http.put("/editor/content", this.editorContent
      ).then(response => {
        this.successMessage = LESSON_CONTENT_SAVED
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    getEditorContent() {
      this.$http.get("/editor/content", {
            params: {
              lessonId: this.lessonId,
            }
          }
      ).then(response => {
        // Siit saame kätte JSONi  ↓↓↓↓↓↓↓↓
        const dataFromBackend = response.data
        const base64Content = dataFromBackend.editorContent
        const utf8Bytes = new TextDecoder().decode(Uint8Array.from(atob(base64Content), (c) => c.charCodeAt(0)))
        this.editorContent.content = utf8Bytes

        if (this.editor) {
          this.editor.commands.setContent(this.editorContent.content)
        }
      }).catch(error => {
        // Siit saame kätte errori JSONi  ↓↓↓↓↓↓↓↓
        const errorResponseBody = error.response.data
      })
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
    this.getEditorContent()
  },

  beforeUnmount() {
    this.editor.destroy()
  },

}
</script>

<style lang="scss">
.tiptap {
  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    margin: 0;
    overflow: hidden;

    td,
    th {
      min-width: 1em;
      border: 2px solid #ced4da;
      padding: 3px 5px;
      vertical-align: top;
      box-sizing: border-box;
      position: relative;

      > * {
        margin-bottom: 0;
      }
    }

    th {
      font-weight: bold;
      text-align: left;
      background-color: #f1f3f5;
      color: black;
    }

    .selectedCell:after {
      z-index: 2;
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(186, 234, 206, 0.8);
      pointer-events: none;
    }

    .column-resize-handle {
      position: absolute;
      right: -2px;
      top: 0;
      bottom: -2px;
      width: 4px;
      background-color: #adf;
      pointer-events: none;
    }

    p {
      margin: 0;
    }
  }
}

.tableWrapper {
  padding: 1rem 0;
  overflow-x: auto;
}

.resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}
</style>





