const text = document.getElementById('text')
const word1 = document.getElementById('word-1')
const word2 = document.getElementById('word-2')
const word3 = document.getElementById('word-3')
const word4 = document.getElementById('word-4')

// text-content = text.innerHTML
// word1-content = word1.innerHTML
// word2-content = word2.innerHTML
// word3-content = word3.innerHTML
// word4-content = word4.innerHTML



word1.addEventListener('click', () => {
  loadInfo()
  alert('Hola')
})

function loadInfo(){
  fetch('/word', {method: 'GET'})
    .then(res => res.json())
    .then(data => {
        // console.log(data.body.obj1.word1)
        text.innerHTML = data.body.obj1.def1
        word1.innerHTML = data.body.obj1.word1
        word2.innerHTML = data.body.obj2.word2
        word3.innerHTML = data.body.obj3.word3
        word4.innerHTML = data.body.obj4.word4

      }
    )
}
