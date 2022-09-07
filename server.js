const express = require('express');
const cors = require('cors')
const userRoute = require("./routes/index")

const connectDB = require('./config/db')

connectDB()

const app = express();
app.use(express.json());
app.use(cors())

app.use('/api', userRoute)

const PORT = 3000;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err}`)
    server.close(() => process.exit(1))
})