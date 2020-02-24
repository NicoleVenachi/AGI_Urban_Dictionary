const express = require('express') //Importo express
// const path = require('path')
// const fs = require('fs')

// var first = 0
// const bodyParser = require('body-parser')
const router = express.Router() // instancio router de express

const dictionary = require('./modules/dictionary.js')
const response = require('./network/response.js')

var app = express () //instacio  modulo express

app.use(express.json()) //defino un doy parser de JSON
// app.use(express.urlencoded({extended: false})) //parser de url
app.use(router) //defino que router hara veces de .use
app.use('/', express.static('public'))

app.listen(3000) //defino el puerto por el qu escucho peticiones


router.get('/word', function(req, res) {
  dictionary()
    .then((words) => {
      console.log(words)
      response.success(req, res, words)
    })
    .catch(err =>{
      response.error(req, res, '', 500, 'Internal Error')
      console.error('[Urban Petition] ' + err);
    })

})

console.log('La aplicación está escuchando en htttp://localhots:3000')
