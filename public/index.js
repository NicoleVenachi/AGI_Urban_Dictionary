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
    this.toggleStartBtn()
    this.loadInfo()
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
  loadContentInteraction() {
    word1.addEventListener('click', () => {
      this.loadInfo()
      alert('Hola')
    })

    word2.addEventListener('click', () => {
      this.loadInfo()
      alert('Hola')
    })

    word3.addEventListener('click', () => {
      this.loadInfo()
      alert('Hola')
    })

    word4.addEventListener('click', () => {
      this.loadInfo()
      alert('Hola')
    })

  }
  loadInfo(){
    fetch('/word', {method: 'GET'})
      .then(res => res.json())
      .then(data => {
          // console.log(data.body.obj1.word1)
          text.innerHTML = `DEFINITION: ${data.body.first.definition}`
          example.innerHTML = `EXAMPLE: ${data.body.first.example}`
          const randomPosition = Math.ceil(Math.random() *4)
          switch (randomPosition) {
            case 1:
              word1.innerHTML = data.body.first.word
              word2.innerHTML = data.body.second.word
              word3.innerHTML = data.body.third.word
              word4.innerHTML = data.body.fourth.word
              break;
            case 2:
              word1.innerHTML = data.body.second.word
              word2.innerHTML = data.body.first.word
              word3.innerHTML = data.body.third.word
              word4.innerHTML = data.body.fourth.word

              break;
            case 3:
              word1.innerHTML = data.body.third.word
              word2.innerHTML = data.body.second.word
              word3.innerHTML = data.body.first.word
              word4.innerHTML = data.body.fourth.word

              break;
            case 4:
              word1.innerHTML = data.body.fourth.word
              word2.innerHTML = data.body.second.word
              word3.innerHTML = data.body.third.word
              word4.innerHTML = data.body.first.word

              break;
            default:

          }
        })
  }
}




function startGame() {
  window.game = new Game()
  console.log('holaaa');
}
