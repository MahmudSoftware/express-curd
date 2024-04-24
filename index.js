const express = require('express')

const app = express()

app.listen(3000,()=>{
    console.log('ssss')
})

app.get('/',(req,res)=>{
        
    res.send('Hello From Bangladesh')
})

