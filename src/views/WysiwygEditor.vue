<template>
  <EditorButtons :editor="editor"/>
  <EditorButtonsSecondRow :editor="editor"/>
      <div v-html="contentAsHtml"></div>
      <editor-content :editor="editor" class="editor-content"/>
      <button @click="displayHtml">Kuva HTML</button>
      <button @click="swapContent">Asenda HTML</button>
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
  },

  mounted() {
    this.editor = new Editor({
      content: '<p>Kirjuta õppeinfo siia!</p>',
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
    })
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
      left: 0; right: 0; top: 0; bottom: 0;
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





