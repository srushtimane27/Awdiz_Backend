import express from 'express';
import { Welcome } from './controllers/Welcome.controllers.js';
// import { Login, Register } from './controllers/User.controllers.js';
import AllRoutes from './routes/index.js'

const app = express();

app.get('/',Welcome)
// app.get('/login',Login)
// app.get('/register',Register)

app.use('/api/v1', AllRoutes)

app.listen (8000, () => { console.log("Running on port 8000")})