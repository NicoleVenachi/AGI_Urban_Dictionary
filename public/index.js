const text = document.getElementById('text')
const example = document.getElementById('example')
const word1 = document.getElementById('word-1')
const word2 = document.getElementById('word-2')
const word3 = document.getElementById('word-3')
const word4 = document.getElementById('word-4')
const btnStart = document.getElementById('btn-start')

class Game {
  constructor() {
    this.inicializar()
  }
  inicializar(){
    this.first = true
    this.randomPos = this.randomPosition() //posicion
    this.toggleStartBtn()
    this.loadInfo(this.randomPos)
    this.loadContentInteraction()
  }

  toggleStartBtn() {
    if (btnStart.classList.contains('hide')) {
      btnStart.classList.remove('hide')
    }
    else{
      btnStart.classList.add('hide')
    }
    }

  loadInfo(randomPosition){
    const random = randomPosition
    console.log(random);
    fetch('/word', {method: 'GET'})
      .then(res => res.json())
      .then(data => {
          // console.log(data.body.obj1.word1)

          this.def = this.indexStr(data.body.first.word, data.body.first.definition)
          this.ie = this.indexStr(data.body.first.word, data.body.first.example)

          text.innerHTML = `DEFINITION: ${this.def}`
          example.innerHTML = `EXAMPLE: ${this.ie}`
          // this.first = data.body.first.word
          // this.second = data.body.second.word
          // this.third = data.body.third.word
          // this.fourth = data.body.fourth.word
          switch (random) {
            case 1:
              word1.innerHTML = `1. ${data.body.first.word}`
              word2.innerHTML = `2. ${data.body.second.word}`
              word3.innerHTML = `3. ${data.body.third.word}`
              word4.innerHTML = `4. ${data.body.fourth.word}`
              break;
            case 2:
              word1.innerHTML = `1. ${data.body.second.word}`
              word2.innerHTML = `2. ${data.body.first.word}`
              word3.innerHTML = `3. ${data.body.third.word}`
              word4.innerHTML = `4. ${data.body.fourth.word}`

              break;
            case 3:
              word1.innerHTML = `1. ${data.body.third.word}`
              word2.innerHTML = `2. ${data.body.second.word}`
              word3.innerHTML = `3. ${data.body.first.word}`
              word4.innerHTML = `4. ${data.body.fourth.word}`

              break;
            case 4:
              word1.innerHTML = `1. ${data.body.fourth.word}`
              word2.innerHTML = `2. ${data.body.second.word}`
              word3.innerHTML = `3. ${data.body.third.word}`
              word4.innerHTML = `4. ${data.body.first.word}`

              break;
            default:
          }
        })
      }
  indexStr(wordToReplace, textToEvaluate) {
    this.wordToReturn = textToEvaluate
    this.a = 1
    do {
      this.pos = this.wordToReturn.indexOf(wordToReplace)
      this.wordToReturn = this.wordToReturn.replace(wordToReplace, "_____________")
    } while (this.pos !== -1);
    return this.wordToReturn
  }

  loadContentInteraction() {

    word1.addEventListener('click', () => {
      //confirmar si gana o no
      this.isItOk(this.randomPos,1)
      //cargar nueva info
      this.randomPos = this.randomPosition() //cambio la nueva posicion actual
      this.loadInfo(this.randomPos)
    })

    word2.addEventListener('click', () => {
      //confirmar si gana o no
      this.isItOk(this.randomPos,2)
      //cargar nueva info
      this.randomPos = this.randomPosition()
      this.loadInfo(this.randomPos)
    })

    word3.addEventListener('click', () => {
      //confirmar si gana o no
      this.isItOk(this.randomPos,3)
      //cargar nueva info
      this.randomPos = this.randomPosition()
      this.loadInfo(this.randomPos)
    })

    word4.addEventListener('click', () => {
      //confirmar si gana o no
      this.isItOk(this.randomPos,4)
      //cargar nueva info
      this.randomPos = this.randomPosition()
      this.loadInfo(this.randomPos)
    })
  }
  isItOk(winningPos, positionSelected) {
    if(winningPos == positionSelected) {
      swal({ //devuelve promesa
        icon: 'success',
        title: 'Felicitaciones',
        text: 'Ganaste el juego!'
      })
    }
    else {
      swal({ //devuelve promesa
        icon: 'error',
        title: 'Perdiste',
        text: 'Lo lamentamos, perdiste el Juego :( '
      })
    }
  }

  randomPosition() {
    return Math.ceil(Math.random() *4)
  }
}


function startGame() {
  window.game = new Game()
  console.log('holaaa');
}
