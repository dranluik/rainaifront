<template>
  <div v-if="editor">
    <button class="btn btn-light button-gap" @click="editor.chain().focus().toggleBold().run()"
            :disabled="!editor.can().chain().focus().toggleBold().run()"
            :class="{ 'is-active': editor.isActive('bold') }" class="custom-button">
      <font-awesome-icon :icon="['fas', 'bold']"/>
      <span class="tooltip-text">Bold</span>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().toggleItalic().run()"
            :disabled="!editor.can().chain().focus().toggleItalic().run()"
            :class="{ 'is-active': editor.isActive('italic') }" class="custom-button">
      <font-awesome-icon :icon="['fas', 'italic']"/>
      <span class="tooltip-text">Italic</span>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().toggleStrike().run()"
            :disabled="!editor.can().chain().focus().toggleStrike().run()"
            :class="{ 'is-active': editor.isActive('strike') }" class="custom-button">
      <font-awesome-icon :icon="['fas', 'strikethrough']"/>
      <span class="tooltip-text">Strikethrough</span>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().toggleCode().run()"
            :disabled="!editor.can().chain().focus().toggleCode().run()"
            :class="{ 'is-active': editor.isActive('code') }" class="custom-button">
      <font-awesome-icon :icon="['fas', 'code']"/>
      <span class="tooltip-text">Code</span>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().unsetAllMarks().run()" class="custom-button">
      <font-awesome-icon :icon="['fas', 'broom']"/>
      <span class="tooltip-text">Clear marks</span>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }"
            class="custom-button">
      <font-awesome-icon :icon="['fas', 'paragraph']"/>
      <span class="tooltip-text">Paragraph</span>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }" class="custom-button">
      <font-awesome-icon :icon="['fas', 'heading']"/>1
      <span class="tooltip-text">Heading 1</span>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }" class="custom-button">
      <font-awesome-icon :icon="['fas', 'heading']"/>2
      <span class="tooltip-text">Heading 2</span>

    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }" class="custom-button">
      <font-awesome-icon :icon="['fas', 'heading']"/>3
      <span class="tooltip-text">Heading 3</span>

    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }" class="custom-button">
      <font-awesome-icon :icon="['fas', 'heading']"/>4
      <span class="tooltip-text">Heading 4</span>

    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }" class="custom-button">
      <font-awesome-icon :icon="['fas', 'heading']"/>5
      <span class="tooltip-text">Heading 5</span>

    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }" class="custom-button">
      <font-awesome-icon :icon="['fas', 'heading']"/>6
      <span class="tooltip-text">Heading 6</span>

    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().toggleBulletList().run()"
            :class="{ 'is-active': editor.isActive('bulletList') }" class="custom-button">
      <font-awesome-icon :icon="['fas', 'list']"/>
      <span class="tooltip-text">Bullet list</span>

    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().toggleOrderedList().run()"
            :class="{ 'is-active': editor.isActive('orderedList') }" class="custom-button">
      <font-awesome-icon :icon="['fas', 'list-ol']"/>
      <span class="tooltip-text">Ordered list</span>

    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().toggleCodeBlock().run()"
            :class="{ 'is-active': editor.isActive('codeBlock') }" class="custom-button">
      <font-awesome-icon :icon="['fas', 'laptop-code']"/>
      <span class="tooltip-text">Code block</span>

    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().setHorizontalRule().run()" class="custom-button">
      <font-awesome-icon :icon="['fas', 'ruler-horizontal']"/>
      <span class="tooltip-text">Horizontal rule</span>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().setHardBreak().run()" class="custom-button">
      <font-awesome-icon :icon="['fas', 'arrow-turn-down']"/>
      <span class="tooltip-text">Hard break</span>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()"
            class="custom-button">
      <font-awesome-icon :icon="['fas', 'arrow-rotate-left']"/>
      <span class="tooltip-text">Undo</span>

    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()"
            class="custom-button">
      <font-awesome-icon :icon="['fas', 'arrow-rotate-right']"/>
      <span class="tooltip-text">Redo</span>

    </button>

  </div>
</template>
<script>
import {EditorContent} from "@tiptap/vue-3";

export default {
  name: 'EditorButtons',
  components: {EditorContent},
  props: {
    editor: {type: Function}
  }
}
</script>

<style scoped>
.button-gap {
  margin-right: 5px; /* Adjust the margin as needed */
}
.custom-button {
  position: relative;
  display: inline-block;
}

.tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.2s;
}

.custom-button:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
</style>
