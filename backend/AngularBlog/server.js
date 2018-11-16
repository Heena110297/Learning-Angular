const express = require('express')
const {db} = require('./db/index')
const app = express()
var cors = require('cors');
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/articles' ,require('./routes/articles'))
app.use('/users',require('./routes/users'))
app.use(cors());
db.sync()
.then(()=>{
    console.log("Databse synced")
    app.listen(3939,()=>{
        console.log("Server started")
    })
})
.catch(console.error)
