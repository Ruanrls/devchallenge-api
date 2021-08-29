import { Router } from 'express'
import { app } from '../../infra/webserver'
import { githubLoginRoute } from './login'

const index = Router()

index.get('/', (_, res) => res.send('test'))

app.use(index)
app.use(githubLoginRoute)
