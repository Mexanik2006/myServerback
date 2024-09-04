const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());

const upload = require("./routers/Upload")
// const teacher = require("./routers/Teacher")



const MONGIDB_CONNECT_URL = "mongodb+srv://mexhanik2006:16102006s@cluster0.4yftq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(MONGIDB_CONNECT_URL)
    .then(res => console.log("MongoDBga muamosiz ulandi"))
    .catch(error => console.log("Ulanishda muammo bor"))

app.use("/upload", upload)
// app.use("/teacher", teacher)



const PORT = 2600;
app.listen(PORT, () => {
    console.log(`Bizning server port ${PORT}da ishlamoqda.`)
})