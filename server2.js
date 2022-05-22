const express = require('express')
const {Files} = require('./producto');
const fs = require('fs');

const data = [
    {
      title: "Campera Gore Tex",
      thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/gore.png",
      price:25000,
    },
    {
      title: "Puffy Shirt",
      thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/puffy.png",
      price: 60000,
    },
    {
      title: "Bolígrafo anti gravedad",
      thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/boligrafo.png",
      price: 1500,
    },
    {
      title: "Jimmy's Shoes",
      thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/shoes.png",
      price: 13000,
    },
    {
      title: "Fusilli Jerry",
      thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/fusilli.png",
      price: 1200,
    },
    {
      title: "The coffee table booky",
      thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/bookof.png",
      price: 3500,
    },
];
/*carga los datos en el archivo*/
const file = new Files('./productos.txt');

file.save(data[0].title, data[0].thumbnail, data[0].price);
file.save(data[1].title, data[1].thumbnail, data[1].price);
file.save(data[2].title, data[2].thumbnail, data[2].price); 
////////////////////////////////////////////////////////  

const app = express()

const PORT = 8080

//muestra todo el array///
app.get('/products', (request, response)=>{
    response.send(data)
})
//muestra un producto aleatorio//
app.get('/random', (request, response)=>{
    var rand = Math.floor(Math.random()*data.length);
    response.send(data[rand])
})
//muestra el contenido del archivo//
//llama a la función getAll del ejercicio anterior modificada para que sea sincrónica//
app.get('/file', (request, response)=>{  
    response.send(file.getAll())
})

const server = app. listen(PORT, () => {
    console.log(`server http on ${PORT}...`)
})
server.on('error', error => console.log("error en server", error))























/*const http = require('http')
const server = http.createServer((request, response)=> {
    
    const date = new Date();

    response.end(`la hora es: ${date.toLocaleTimeString()}`)
})

const conectedServer = server.listen(8080, () => {
    console.log(`conectando con el server ${conectedServer.address().port}...`)
})
*/