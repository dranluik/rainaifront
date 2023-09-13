<template>
  <div v-if="editor" class="mb-4">
    <button class="btn btn-light button-gap" @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()">
      <font-awesome-icon :icon="['fas', 'table']"/>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().addColumnBefore().run()">
      <font-awesome-icon :icon="['fas', 'chevron-left']"/>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().addColumnAfter().run()">
      <font-awesome-icon :icon="['fas', 'chevron-right']"/>
    </button>
    <button  class="btn btn-light button-gap" @click="editor.chain().focus().deleteColumn().run()">
      <font-awesome-icon :icon="['far', 'square-minus']"/>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().addRowBefore().run()">
      <font-awesome-icon :icon="['fas', 'chevron-up']"/>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().addRowAfter().run()">
      <font-awesome-icon :icon="['fas', 'chevron-down']"/>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().deleteRow().run()">
      <font-awesome-icon :icon="['fas', 'minus']"/>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().deleteTable().run()">
      <font-awesome-icon :icon="['fas', 'trash']"/>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().toggleHeaderColumn().run()">
      <font-awesome-icon :icon="['fas', 'grip-lines-vertical']"/>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().toggleHeaderRow().run()">
      <font-awesome-icon :icon="['fas', 'grip-lines']"/>
    </button>
    <button class="btn btn-light button-gap" @click="editor.chain().focus().mergeOrSplit().run()">
      <font-awesome-icon :icon="['fas', 'object-ungroup']"/>
    </button>
<!--    <editor-content :editor="editor"/>-->
  </div>
</template>
<script>
export default {
  name: 'EditorButtonsSecondRow',
  props: {
    editor: {type: Function}
  }
}
</script>


<style scoped>
/* Add margin or padding to the buttons */
.button-gap {
  margin-right: 5px; /* Adjust the margin as needed */
}
</style>