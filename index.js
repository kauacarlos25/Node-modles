const express = require('express')
const app = express()

const hostname = 'localhost'
const PORT = 3000
/* --- configuração do express --- */
app.use(express.urlencoded({extended:true}))
app.use(express.json())
/*----------------------------------*/

/*---------- Arquivos estaticos --------- */
app.use(express.static('public'))
/*---------------------------------------- */

/* -------- Rotas do projeto ------------- */
app.get('./src/', (req,res)=>{
    res.render('contato.html')
})
app.get('/', (req,res)=>{
    res.render('index.html')
})

/*---------------------------------------- */
app.listen(PORT,hostname, ()=>{
    console.log(`O servidor está rodando ${hostname}:${PORT}`)
})