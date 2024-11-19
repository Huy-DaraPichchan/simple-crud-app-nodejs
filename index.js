import express, { json, urlencoded } from 'express'
import { connect } from 'mongoose'
import ProductRoute from './routes/product.route.js'

const app = express()


//Middlewares
app.use(json())
app.use(urlencoded({ extended: false }))

//Routes
app.use('/api/products', ProductRoute)

app.get('/', (req, res) => {
    res.send('The server is currently running at localhost:3000')
})




connect("mongodb+srv://admin:admin123@cluster0.hxiet.mongodb.net/Node-api?retryWrites=true&w=majority&appName=Cluster0")
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