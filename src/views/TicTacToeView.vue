<template>
  <AlertSuccess :alert-message="successMessage"/>
  <div class="container text-center justify-content-center">
    <div v-for="(row, rowIndex) in gridArray" :key="rowIndex" class="row justify-content-center">
      <div v-for="(button, buttonIndex) in row" :key="buttonIndex" class="col col-2 ">
        <div @click="handlePlayerMove(rowIndex, buttonIndex)" class="square" >
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
      gridSize: 3,
      gridArray: [],
      successMessage: '',
      numberOfPlayers: 3,
      letterArray: [],
      currentPlayerIndex: 0,



    }
  },
  computed: {
    currentPlayer() {
      return this.letterArray[this.currentPlayerIndex];
    }
  },
  methods: {
    createPlayers() {
      if (this.numberOfPlayers === 2) {
        this.letterArray = ['X', 'O']

      } else {
        const letters = ['X', 'O']
        for (let i = 0; i < this.numberOfPlayers; i++) {
          letters.push(String.fromCharCode(i))

        } this.letterArray = letters
      }
    },
    createGridArray() {
      const newArray = []
      for (let i = 0; i < this.gridSize; i++) {
        const subArray = new Array(this.gridSize).fill('')
        newArray.push(subArray)
      }
      this.gridArray = newArray

    }, startNewGame() {
      this.successMessage = ''
      this.currentPlayerIndex = 0
      this.createPlayers()
      this.createGridArray();
    },
    validateElements: function (rowIndex, columnIndex, element) {
      if ( this.rowValidation(rowIndex, element) || this.columnValidation(columnIndex, element) || this.diagonalValidation(element)) {
        this.successMessage = 'Player ' + (this.currentPlayerIndex + 1) + ' won!'
      }

    },
    handlePlayerMove(rowIndex, columnIndex){
      if(this.successMessage.length !== 0){
        return
      }
      if (this.gridArray[rowIndex][columnIndex] === ''){
        this.gridArray[rowIndex][columnIndex] = this.currentPlayer
        this.validateElements(rowIndex, columnIndex, this.currentPlayer)
        this.swapPlayers()
      }
    },
    swapPlayers(){
      this.currentPlayerIndex = (this.currentPlayerIndex +1) % this.numberOfPlayers
    },
    rowValidation(rowIndex, element) {
      for (let i = 0; i < this.gridSize; i++) {

        if (this.gridArray[rowIndex][i] !== element) {
          return false
        }
      }
      return true

    },
    columnValidation(columnIndex, element) {
      for (let i = 0; i < this.gridSize; i++) {

        if (this.gridArray[i][columnIndex] !== element) {
          return false
        }
      }
      return true
      },

    diagonalValidation(element) {

      let mainDiagonal = true
      for (let i = 0; i < this.gridSize; i++) {
        if (this.gridArray[i][i] !== element ) {
          mainDiagonal = false
          break
        }
      }
      let oppositeDiagonal = true
      for (let i = 0; i < this.gridSize; i++) {
          if(this.gridArray[i][this.gridSize-1-i] !== element){
            oppositeDiagonal = false
            break
          }
        }
      return (mainDiagonal || oppositeDiagonal)






  }, },
  beforeMount() {
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