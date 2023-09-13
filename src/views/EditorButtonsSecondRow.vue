<template>
  <div v-if="editor" class="border">
    <button @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()"
            class="custom-button">
      <font-awesome-icon :icon="['fas', 'table']"/>
      <span class="tooltip-text">Insert table</span>
    </button>
    <button @click="editor.chain().focus().addColumnBefore().run()" class="custom-button">
      <font-awesome-icon :icon="['fas', 'chevron-left']"/>
      <span class="tooltip-text">Add column before</span>
    </button>
    <button @click="editor.chain().focus().addColumnAfter().run()" class="custom-button">
      <font-awesome-icon :icon="['fas', 'chevron-right']"/>
      <span class="tooltip-text">Add column after</span>
    </button>
    <button @click="editor.chain().focus().deleteColumn().run()" class="custom-button">
      <font-awesome-icon :icon="['far', 'square-minus']"/>
      <span class="tooltip-text">Delete column</span>
    </button>
    <button @click="editor.chain().focus().addRowBefore().run()" class="custom-button">
      <font-awesome-icon :icon="['fas', 'chevron-up']"/>
      <span class="tooltip-text">Add row before</span>
    </button>
    <button @click="editor.chain().focus().addRowAfter().run()" class="custom-button">
      <font-awesome-icon :icon="['fas', 'chevron-down']"/>
      <span class="tooltip-text">Add row after</span>
    </button>
    <button @click="editor.chain().focus().deleteRow().run()" class="custom-button">
      <font-awesome-icon :icon="['fas', 'minus']"/>
      <span class="tooltip-text">Delete row</span>
    </button>
    <button @click="editor.chain().focus().deleteTable().run()" class="custom-button">
      <font-awesome-icon :icon="['fas', 'trash']"/>
      <span class="tooltip-text">Delete table</span>
    </button>
    <button @click="editor.chain().focus().toggleHeaderColumn().run()" class="custom-button">
      <font-awesome-icon :icon="['fas', 'grip-lines-vertical']"/>
      <span class="tooltip-text">Toggle header column</span>
    </button>
    <button @click="editor.chain().focus().toggleHeaderRow().run()" class="custom-button">
      <font-awesome-icon :icon="['fas', 'grip-lines']"/>
      <span class="tooltip-text">Toggle header row</span>
    </button>
    <button @click="editor.chain().focus().mergeOrSplit().run()" class="custom-button">
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
      background-color: #e8ebef;
      color: black;
    }

    .selectedCell:after {
      z-index: 2;
      position: absolute;
      content: "";
      left: 0; right: 0; top: 0; bottom: 0;
      background: rgba(200, 200, 255, 0.4);
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

<style scoped>
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