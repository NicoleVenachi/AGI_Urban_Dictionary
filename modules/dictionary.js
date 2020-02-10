'use strict'
const ud = require('urban-dictionary')
var message = ''
exports.definition = function() {
  ud.random().then((result) => {
  message = result
  // console.log(result.word)
  // console.log(result.definition)
  // console.log(result.example)

  }).catch((error) => {
    console.error(error.message)
  })
 return message
}
