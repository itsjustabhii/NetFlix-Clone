const express = require('express')
const cors = require("cors")
const userRoutes = require("./routes/UserRoutes")
const mongoose = require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://abhishek:abhishek@cluster0.tfwdnut.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true}).then(() => {
        console.log("DB Connected!")
    })

    app.use("/api/user", userRoutes)

app.listen(5000, console.log("Server started!"))