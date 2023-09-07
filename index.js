const express = require("express");


const app = express()

app.get('/',(req,res)=>{
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.get('/about',(req,res)=>{
    res.sendFile('./static/about.html', {
        root: __dirname
    })
})

app.get('/contact',(req,res)=>{
    res.sendFile('./static/contact.html', {
        root: __dirname
    })
})

app.use((req,res)=>{
    res.status(404).send('<h1>No se econtro tu pagina... !!!</h1>')
})

app.listen(3000)
console.log(`Server on port ${3000}`);
