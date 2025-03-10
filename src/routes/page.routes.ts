import { time } from "console";
import { Router, Request, Response } from "express";
import { title } from "process";
const pageRouter = Router()

//Home
pageRouter.get('/', (req: Request, res: Response) => {
  res.status(200).render('index', {
    title: 'HomePage'
  })
})

//About
pageRouter.get('/about', (req: Request, res: Response) => {
  res.status(200).render('about', {
    title: 'About us'
  })
})

//Contact
pageRouter.get('/contact', (req: Request, res: Response) => {
  res.status(200).render('contact', {
    title: 'Contact us',
    contacts: ["contact@mywebsite.com", "123-4567", "Vancouver, Canada"]
  })
})

export default pageRouter