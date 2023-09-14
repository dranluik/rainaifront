<template>
  <AlertSuccess :alert-message="successMessage"/>
  <div class="container text-center justify-content-center">
    <div v-for="(row, rowIndex) in array" :key="rowIndex" class="row justify-content-center">
      <div v-for="(button, buttonIndex) in row" :key="buttonIndex" class="col col-2 ">
        <div @click="handlePlayerMove(rowIndex, buttonIndex)" class="square">
          {{ button.toString() }}
        </div>
      </div>
      </div>
    <div class="row justify-content-center mt-5">
      <div class="col col-3">
        <button @click="startNewGame" type="button" class="btn btn-outline-success">Start New Game</button>
      </div>

    </div>
     </div>

</template>

<script>
import AlertSuccess from "@/components/alert/AlertSuccess.vue";

export default {
  name: "TicTacToeView",
  components: {AlertSuccess},
  data() {
    return {
      gameStarted: 0,
      playerId: 0,
      n: 3,
      array: [],
      sameRows: false,
      sameColumns: false,
      sameDiagonal: false,
      successMessage: ''


    }
  },
  methods: {
    startNewGame() {
      this.successMessage = ''
      this.sameRows = false
      this.sameColumns = false
      this.sameDiagonal = false
      this.gameStarted = 0
      this.playerId = 0
      const newArray = []
      for (let i = 0; i < this.n; i++) {
        const subArray = new Array(this.n).fill('')
        newArray.push(subArray)
      }
      this.array = newArray
    },
    handlePlayerMove(rowIndex, columnIndex) {

      if (this.gameStarted === 0) {
        this.gameStarted = 1
        this.playerId = this.playerId + 1
        this.array[rowIndex][columnIndex] = 'X'
        this.playerId = this.playerId + 1

      } else {
        if (this.array[rowIndex][columnIndex] === '' && this.playerId === 1) {
          this.array[rowIndex][columnIndex] = 'X'
          this.rowValidation(rowIndex, 'X')
          this.columnValidation(columnIndex, 'X')
          this.diagonalValidation('X')

          this.playerId = this.playerId + 1
        } else {
          if (this.array[rowIndex][columnIndex] === '' && this.playerId === 2) {
            this.array[rowIndex][columnIndex] = 'O'
            this.rowValidation(rowIndex, 'O')
            this.columnValidation(columnIndex, 'O')
            this.diagonalValidation('O')
            this.playerId = this.playerId - 1
          }
        }
      }

    },
    rowValidation(rowIndex, element) {
      for (let i = 0; i < this.n; i++) {
        this.sameRows = true
        if (this.array[rowIndex][i] !== element) {
          this.sameRows = false;
          break;
        }
      }
      if (this.sameRows) {
        this.successMessage = 'Player ' + this.playerId + ' won!'
      }
    },
    columnValidation(columnIndex, element) {
      for (let i = 0; i < this.n; i++) {
        this.sameColumns = true
        if (this.array[i][columnIndex] !== element) {
          this.sameColumns = false;
          break;
        }
      }
      if (this.sameColumns) {
        this.successMessage = 'Player ' + this.playerId + ' won!'
      }
    },
    diagonalValidation(element) {
      this.sameDiagonal = false
      let mainDiagonal = true
      for (let i = 0; i < this.n; i++) {
        if (this.array[i][i] !== element ) {
          mainDiagonal = false
          break
        }
      }
      let oppositeDiagonal = true
      for (let i = 0; i < this.n; i++) {
          if(this.array[i][this.n-1-i] !== element){
            oppositeDiagonal = false
            break
          }
        }
      if (mainDiagonal || oppositeDiagonal){
        this.sameDiagonal = true
      }

      if (this.sameDiagonal) {
        this.successMessage = 'Player ' + this.playerId + ' won!'


      }
    },

  }, beforeMount() {
    this.startNewGame()

  },
}



</script>

<style scoped>
.square {
  width: 100px;
  height: 100px;
  background-color: #939393;
  color: black;
  border: 1px solid black;
  display: flex;
  justify-content: center; /* Horizontally center content */
  align-items: center;
}

</style>