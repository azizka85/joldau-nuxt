import { MongoClient } from 'mongodb'
import { UserRole } from '../../../data/user'
import { generateMD5Hash } from '../../../utils/md5'

const dbSeedsGenerateUsers = async () => {
  const environment = process.env.NODE_ENV || 'development'

  let updatesCnt = 0
  let error = null

  if(environment === 'development' && process.env.MONGODB_URL) {
    const url = process.env.MONGODB_URL || ''

    const client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    try {      
      await client.connect()

      const db = client.db('joldau')
      const users = db.collection('users')

      await users.deleteMany({})

      const data = await users.insertMany([
        {
          _id: 1,
          password: generateMD5Hash('lock'),
          name: 'Aziz Kudaikulov',
          email: 'aziz.kudaikulov@mail.ru',
          role: UserRole.admin,
          image: 'https://docs.google.com/uc?id=1PgAGg8e_zVUG32RM7_BYyoDxZt8YsDfy'			
        }			
      ])

      updatesCnt = data.insertedCount
    } catch(err) {
      error = err      
    } finally {
      await client.close()
    }
  }

  return {
    updatesCnt,
    error
  }
}

export default dbSeedsGenerateUsers
