import { MongoClient } from 'mongodb'

const dbSeedsGenerateCategories = async () => {
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
      const categories = db.collection('categories')

      await categories.deleteMany({})

      const data = await categories.insertMany([
        {
          _id: 1,
          name: 'transfer',
          path: 'transfer',
          title: 'Перевод из другого ВУЗа',
          description: 'Здесь приводятся ответы на вопросы, касательно перевода из другого ВУЗа',
          favorite: false,
          language: 'ru',
          answersCount: 1,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          parentId: null,
          userId: 1
        },
        {
          _id: 2,
          name: 'expulsion',
          path: 'expulsion',
          title: 'Отчисление из ВУЗа',
          description: 'Здесь приводятся ответы на вопросы, касательно отчисления из ВУЗа',
          favorite: true,
          language: 'ru',
          answersCount: 1,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          parentId: null,
          userId: 1
        },
        {
          _id: 3,
          name: 'academic-leave',
          path: 'academic-leave',
          title: 'Академический отпуск',
          description: 'Здесь приводятся ответы на вопросы, касательно получения академического отпуска либо выхода из него',
          favorite: false,
          language: 'ru',
          answersCount: 1,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          parentId: null,
          userId: 1
        },
        {
          _id: 4,
          name: 'academic-mobility',
          path: 'academic-mobility',
          title: 'Академическая мобильность',
          description: 'Здесь приводятся ответы на вопросы, касательно оформления документов на академическую мобильность',
          favorite: true,
          language: 'ru',
          answersCount: 1,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          parentId: null,
          userId: 1
        },
        {
          _id: 5,
          name: 'transfer',
          path: 'transfer',
          title: 'Басқа ЖОО-ға өту',
          description: 'Басқа ЖОО-ға өту туралы сұрақтарға жауаптар берілген осы жерде',
          favorite: false,
          language: 'kz',
          answersCount: 1,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          parentId: null,
          userId: 1
        },
        {
          _id: 6,
          name: 'expulsion',
          path: 'expulsion',
          title: 'ЖОО-дан шығып кету',
          description: 'ЖОО-дан шығып кету туралы сұрақтарға жауаптар берілген осы жерде',
          favorite: true,
          language: 'kz',
          answersCount: 0,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          parentId: null,
          userId: 1
        },
        {
          _id: 7,
          name: 'academic-leave',
          path: 'academic-leave',
          title: 'Академиялық демалыс',
          description: 'Академиялық демалыс туралы сұрақтарға жауаптар берілген осы жерде',
          favorite: false,
          language: 'kz',
          answersCount: 0,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          parentId: null,
          userId: 1
        },
        {
          _id: 8,
          name: 'transfer',
          path: 'transfer',
          title: 'Transfer from other university',
          description: 'Here, you can find answers about transfer from other universities to Satbayev University',
          favorite: true,
          language: 'en',
          answersCount: 1,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          parentId: null,
          userId: 1
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

export default dbSeedsGenerateCategories
