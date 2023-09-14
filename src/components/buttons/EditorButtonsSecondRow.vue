<template>
  <div v-if="editor" class="mb-4">
    <button class="btn btn-light button-gap custom-button" @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()">
      <font-awesome-icon :icon="['fas', 'table']"/>
      <span class="tooltip-text">Insert table</span>
    </button>
    <button class="btn btn-light button-gap custom-button" @click="editor.chain().focus().addColumnBefore().run()">
      <font-awesome-icon :icon="['fas', 'chevron-left']"/>
      <span class="tooltip-text">Add column before</span>
    </button>
    <button class="btn btn-light button-gap custom-button" @click="editor.chain().focus().addColumnAfter().run()">
      <font-awesome-icon :icon="['fas', 'chevron-right']"/>
      <span class="tooltip-text">Add column after</span>
    </button>
    <button  class="btn btn-light button-gap custom-button" @click="editor.chain().focus().deleteColumn().run()">
      <font-awesome-icon :icon="['far', 'square-minus']"/>
      <span class="tooltip-text">Delete column</span>
    </button>
    <button class="btn btn-light button-gap custom-button" @click="editor.chain().focus().addRowBefore().run()">
      <font-awesome-icon :icon="['fas', 'chevron-up']"/>
      <span class="tooltip-text">Add row before</span>
    </button>
    <button class="btn btn-light button-gap custom-button" @click="editor.chain().focus().addRowAfter().run()">
      <font-awesome-icon :icon="['fas', 'chevron-down']"/>
      <span class="tooltip-text">Add row after</span>
    </button>
    <button class="btn btn-light button-gap custom-button" @click="editor.chain().focus().deleteRow().run()">
      <font-awesome-icon :icon="['fas', 'minus']"/>
      <span class="tooltip-text">Delete row</span>
    </button>
    <button class="btn btn-light button-gap custom-button" @click="editor.chain().focus().deleteTable().run()">
      <font-awesome-icon :icon="['fas', 'trash']"/>
      <span class="tooltip-text">Delete table</span>
    </button>
    <button class="btn btn-light button-gap custom-button" @click="editor.chain().focus().toggleHeaderColumn().run()">
      <font-awesome-icon :icon="['fas', 'grip-lines-vertical']"/>
      <span class="tooltip-text">Toggle header column</span>
    </button>
    <button class="btn btn-light button-gap custom-button" @click="editor.chain().focus().toggleHeaderRow().run()">
      <font-awesome-icon :icon="['fas', 'grip-lines']"/>
      <span class="tooltip-text">Toggle header row</span>
    </button>
    <button class="btn btn-light button-gap custom-button" @click="editor.chain().focus().mergeOrSplit().run()">
      <font-awesome-icon :icon="['fas', 'object-ungroup']"/>
      <span class="tooltip-text">Merge or split</span>
    </button>

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