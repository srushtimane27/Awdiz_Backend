import express from 'express'
import { Login, Register } from './controllers/Auth.controllers.js'
import AllRoutes from './Routes/index.js'

const app = express()
app.use(express.json())

app.get('/',(req, res) => {
    return res.send("Welcome")
})

// app.get('/login', Login)
// app.get('/register', Register)

app.use('/api/v1',AllRoutes)

app.listen(8000, () => { console.log("Listening on port 8000")})