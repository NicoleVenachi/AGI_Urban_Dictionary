'use strict'
const ud = require('urban-dictionary')
async function definition() {

  const promesa = await ud.random()
  const promesa2 = await ud.random()
  const promesa3 = await ud.random()
  const promesa4 = await ud.random()
  const urbanWords = {
    first: {
      word: promesa.word,
      definition: promesa.definition,
      example: promesa.example
    },
    second: {
      word: promesa2.word,
    },
    third: {
      word: promesa3.word,
    },
    fourth: {
      word: promesa4.word,
    },
  }
  return urbanWords
}
module.exports = definition
// const palabra = definition()
//   .then(word => console.log(word))
//   .catch(e=> console.log(e))
