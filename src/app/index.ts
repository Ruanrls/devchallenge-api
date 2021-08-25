import { app } from './config/app'

import { connectWithDatabase } from '../infra/config'

connectWithDatabase()
  .then(() => {
    app.listen(process.env.PORT || 8000)
    console.log('Listening port 8000')
  })
  .catch(() => {
    console.log('failed to connect with database')
  })
