import { MongoClient } from 'mongodb'

const dbSeedsGenerateAnswers = async () => {
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
      const answers = db.collection('answers')

      await answers.deleteMany({})

      const data = await answers.insertMany([
        {
          _id: 1,
          name: 'technical',
          path: 'transfer/technical',
          title: 'Перевод из Технического Университета в Satbayev University',
          content: `
            <p>При переводе из других Технических Университетов в Satbayev University, необходимо сдать разницу.</p>
            <p>Список предметов указаны в файле: </p>
            <p><a href="#">Список предметов</a></p>
          `,
          favorite: true,
          language: 'ru',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          categoryId: 1,
          userId: 1
        },
        {
          _id: 2,
          name: 'transfer',
          path: 'expulsion/transfer',
          title: 'Отчисление из Satbayev University для перевода в другой ВУЗ',
          content: `
            <p>Необходимо заполнить обходной лист.</p>
            <p>Обходной лист указан в файле: </p>
            <p><a href="#">Обходной лист</a></p>
          `,
          favorite: false,
          language: 'ru',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          categoryId: 2,
          userId: 1
        },
        {
          _id: 3, 
          name: 'compete',
          path: 'academic-leave/compete',
          title: 'Уход в академический отпуск из-за участия в соревнованиях',
          content: `
            <p>Необходимо написать заявление на имя проректора по учебной работе.</p>
            <p>Шаблон заявления указан в файле: </p>
            <p><a href="#">Шаблон заявления</a></p>
          `,
          favorite: true,
          language: 'ru',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          categoryId: 3,
          userId: 1
        },
        {
          _id: 4,
          name: 'foreign',
          path: 'academic-mobility/foreign',
          title: 'Академическая мобильность в зарубежные ВУЗы',
          content: `
            <p>Необходимо написать заявление на имя проректора по учебной работе.</p>
            <p>Шаблон заявления указан в файле: </p>
            <p><a href="#">Шаблон заявления</a></p>
          `,
          favorite: false,
          language: 'ru',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          categoryId: 4,
          userId: 1
        },
        {
          _id: 5,
          name: 'technical',
          path: 'transfer/technical',
          title: 'Техникалық Университеттен Satbayev University-ге ауысу',
          content: `
            <p>Оқу проректорге хат жазу керек.</p>
            <p>Хаттын шаблоны мына жерден алса болады: </p>
            <p><a href="#">Хаттын шаблоны</a></p>
          `,
          favorite: true,
          language: 'kz',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          categoryId: 5,
          userId: 1
        },
        {
          _id: 6,
          name: 'technical',
          path: 'transfer/technical',
          title: 'Transfer from other technical university to Satbayev University',
          content: `
            <p>Need to write request to vice rector of Satbayev University.</p>
            <p>Template of this request you can find here: </p>
            <p><a href="#">Template</a></p>
          `,
          favorite: false,
          language: 'en',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          categoryId: 8,
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

export default dbSeedsGenerateAnswers
