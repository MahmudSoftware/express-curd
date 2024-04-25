const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productmodels')

const app = express()

app.use(express.json())


app.get('/',(req,res)=>{
        
    res.send('Hello From Bangladesh')
})

app.post('/api/products',async(req,res)=>{
      
    try{
       const product = await Product.create(req.body)
         res.status(200).json(product)
    }
    catch(error){
            res.status(500).json({message: error.message})
    }
    

})

mongoose.connect("mongodb+srv://mahmudsoftware:mahmudsoftware@expressauth.q3bz6ax.mongodb.net/expressauth?retryWrites=true&w=majority&appName=expressauth")
.then(()=>{
    console.log("Db Connect");
   
    app.listen(3000,()=>{
       
        
    })
    
})
.catch(()=>{
    console.log('Connection Failed');
})