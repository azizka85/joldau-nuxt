import express from 'express'
import dbSeedsGenerateAnswers from "./answers"
import dbSeedsGenerateCategories from "./categories"
import dbSeedsGenerateUsers from "./users"

const seeds = express.Router()

seeds.get('/', async (req, res, next) => {
  const catData = await dbSeedsGenerateCategories()
  const ansData = await dbSeedsGenerateAnswers()
  const userData = await dbSeedsGenerateUsers()

  res.end(JSON.stringify({
    catData,
    ansData,
    userData
  }))
})

export default seeds
