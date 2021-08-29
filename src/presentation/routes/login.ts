import { Router } from 'express'
import { createGithubLoginController } from '../../main/factories/controllers/github-login-controller'

const githubLoginRoute = Router()
const GithubLoginController = createGithubLoginController()

githubLoginRoute.get('/auth/github', GithubLoginController.handle)

export { githubLoginRoute }
