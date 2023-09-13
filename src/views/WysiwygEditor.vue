<template>
  <div v-if="editor">
    <button @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
      <font-awesome-icon :icon="['fas', 'bold']" />
    </button>
    <button @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
      <font-awesome-icon :icon="['fas', 'italic']" />
    </button>
    <button @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
      <font-awesome-icon :icon="['fas', 'strikethrough']" />
    </button>
    <button @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
      <font-awesome-icon :icon="['fas', 'code']" />
    </button>
    <button @click="editor.chain().focus().unsetAllMarks().run()">
      <font-awesome-icon :icon="['fas', 'broom']" />
    </button>
    <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
      <font-awesome-icon :icon="['fas', 'paragraph']" />
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
      <font-awesome-icon :icon="['fas', 'heading']" size="2xl" />
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
      <font-awesome-icon :icon="['fas', 'heading']" size="xl" />
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
      <font-awesome-icon :icon="['fas', 'heading']" size="lg" />
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
      <font-awesome-icon :icon="['fas', 'heading']" size="sm" />
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
      <font-awesome-icon :icon="['fas', 'heading']" size="xs" />
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
      <font-awesome-icon :icon="['fas', 'heading']" size="2xs" />
    </button>
    <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
      <font-awesome-icon :icon="['fas', 'list']" />
    </button>
    <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
      <font-awesome-icon :icon="['fas', 'list-ol']" />
    </button>
    <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
      <font-awesome-icon :icon="['fas', 'laptop-code']" />
    </button>
    <button @click="editor.chain().focus().setHorizontalRule().run()">
      <font-awesome-icon :icon="['fas', 'ruler-horizontal']" />
    </button>
    <button @click="editor.chain().focus().setHardBreak().run()">
      <font-awesome-icon :icon="['fas', 'arrow-turn-down']" />
    </button>
    <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
      <font-awesome-icon :icon="['fas', 'arrow-rotate-left']" />
    </button>
    <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
      <font-awesome-icon :icon="['fas', 'arrow-rotate-right']" />
    </button>
    <editor-content :editor="editor" />
  </div>
      <div v-html="contentAsHtml"></div>
      <editor-content :editor="editor" />
      <button @click="displayHtml">Kuva HTML</button>
      <button @click="swapContent">Asenda HTML</button>
</template>
<script>
import {Editor, EditorContent} from "@tiptap/vue-3";
import {StarterKit} from "@tiptap/starter-kit";



export default {
  name: 'WysiwygEditor',
  components: {
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
