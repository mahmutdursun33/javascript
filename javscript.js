const express=require('express')
const app=express()
const path=require('path')

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/',(req,res)=>{
    res.redirect('/form')
})
app.get('/form',(req,res)=>{
    res.sendFile(path.join(__dirname,'i.html'))
})
app.post('/form',(req,res)=>{
    res.redirect('/')
})
app.listen(3000)