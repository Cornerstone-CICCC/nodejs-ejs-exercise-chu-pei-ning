// This is your server file :)
import express, { Request, Response } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import pageRouter from './routes/page.routes'
dotenv.config()

//create server
const app = express()

//set view engine to EJS
app.set('view engine', 'EJS')
app.set('views', path.join(__dirname, '../src/views'))

//Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/', pageRouter)

//404 fallback
app.use((req: Request, res: Response) => {
  res.status(404).render('404')
})

//start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})