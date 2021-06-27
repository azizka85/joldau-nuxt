import express from 'express'
import { MongoClient } from 'mongodb'

const category = express.Router({
  mergeParams: true
})

category.get('/:lang/*', async function(req, res, next) {
  const language = req.params.lang || 'kz'

  const data = {
    categories: <any>[],
    answers: <any>[],
    answersCount: 0
  }

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

      const answers = db.collection('answers')

      data.answersCount = await answers.countDocuments({language})

      await answers.find({
        language        
      }).sort({
        updatedAt: -1
      }).limit(10)
      .forEach(item => {
        data.answers.push(item)
      })

      const categories = db.collection('categories')

      await categories.find({
        language,
        parentId: null
      }).sort({
        createdAt: -1
      }).forEach(item => {        
        data.categories.push(item)
      })      
    } catch(err) {
      error = err      
    } finally {
      await client.close()
    }
  }  

  res.end(JSON.stringify({
    data,
    error
  }))  
})

export default category
