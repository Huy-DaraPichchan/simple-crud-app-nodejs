const express = require('express')
const mongoose = require('mongoose')
const ProductRoute = require('./routes/product.route.js')
const Product = require('./models/product.model.js')

const app = express()


//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use('/api/products', ProductRoute)

app.get('/', (req, res) => {
    res.send('The server is currently running at localhost:3000')
})




mongoose.connect("mongodb+srv://admin:admin123@cluster0.hxiet.mongodb.net/Node-api?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log(
            "Connected to the Database!"
        );
        app.listen(3000, () => {
            console.log("Server is running on port 3000")
        })
    }).catch(() => {
        console.log("Connection Failed!")
    })