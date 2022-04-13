import express, { Request, Response } from 'express'
import { Itemm } from '../../models/Item'

const router = express.Router()

router.get('/api/item', async (req: Request, res: Response) => {
  const item = await Itemm.find({})
  return res.status(200).send(item)
})

router.post('/api/item', async (req: Request, res: Response) => {
  const { name, date } = req.body;

  const item = Itemm.build({ name, date })
  await item.save()
  return res.status(201).send(item)
})

router.delete('/api/item/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id)
  await  Itemm.findOneAndRemove({id:req.params.id})
  return res.status(204).send()
})

export { router as itemRouter }