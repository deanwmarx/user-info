// index.js
import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

/**
 * logic for our api will go here
 */
export default {
  path: '/api',
  handler: app,
}

app.post(`/user_info`, async (req, res) => {
  const result = await prisma.user_info.create({
    data: {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      cellphone: req.body.cellphone,
      height: req.body.height,
      weight: req.body.weight,
      recently_sick: req.body.recently_sick,
      accepted: req.body.accepted,
    },
  })
  res.json(result)
})

app.get('/user_info', async (req, res) => {
  const result = await prisma.user_info.findMany()
  res.json(result)
})

app.get('/user_info/:id', async (req, res) => {
  const { id } = req.params
  const result = await prisma.user_info.findUnique({
    where: {
      id: Number(id),
    },
  })
  res.json(result)
})

app.delete(`/user_info/:id`, async (req, res) => {
  const { id } = req.params
  const result = await prisma.user_info.delete({
    where: {
      id: parseInt(id),
    },
  })
  res.json(result)
})
