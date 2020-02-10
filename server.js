const express = require('express') //Importo express
const path = require('path')
const fs = require('fs')

var first = 0
const bodyParser = require('body-parser')
const router = express.Router() // instancio router de express

const dictionary = require('./modules/dictionary.js')
const response = require('./network/response.js')

var app = express () //instacio  modulo express

app.use(express.json()) //defino un doy parser de JSON
app.use(express.urlencoded({extended: false})) //parser de url
app.use(router) //defino que router hara veces de .use
app.use('/', express.static('public'))

app.listen(3000) //defino el puerto por el qu escucho peticiones


router.get('/word', function(req, res) {
  var obj={}
  var obj1={}
  var obj2={}
  var obj3={}
  var obj4={}
  if (first === 0) {
    first++
    definition = dictionary.definition()
    console.log('hola');
  }
  else {
    for (let i = 0; i < 4; i++) {
      console.log('hola2');
      definition = dictionary.definition()
      switch (i) {
        case 0:
          obj1 = {
            "word1": definition.word,
            "def1": definition.definition,
            "ie1": definition.example
          }
          break;
        case 1:
          obj2 = {
            "word2": definition.word,
            "def2": definition.definition,
            "ie2": definition.example
          }
          break;
        case 2:
          obj3 = {
            "word3": definition.word,
            "def3": definition.definition,
            "ie3": definition.example
          }
          break;
        case 3:
          obj4 = {
            "word4": definition.word,
            "def4": definition.definition,
            "ie4": definition.example
          }
          break;
        default:

      }
    }
  }

  obj = {
    obj1,
    obj2,
    obj3,
    obj4,
  }
  // console.log(obj)
  response.success(req, res, obj)
})

console.log('La aplicación está escuchando en htttp://localhots:3000')
