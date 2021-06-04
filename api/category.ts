import { ServerMiddleware } from "@nuxt/types"
import { MongoClient } from 'mongodb'

const categoryServerMiddleware: ServerMiddleware = async (req, res, next) => {
  let category = null
  let error = null

  if(process.env.MONGODB_URL) {
    const url = process.env.MONGODB_URL || ''

    const client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    try {      
      await client.connect()

      const db = client.db('joldau')
      const categories = db.collection('categories')

      category = await categories.findOne({title: 'test'})  
    } catch(err) {
      error = err      
    } finally {
      await client.close()
    }
  }  

  res.end(JSON.stringify({
    data: category,
    error
  }))
}

export default categoryServerMiddleware
