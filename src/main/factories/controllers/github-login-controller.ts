import { Controller } from '../../../presentation/contracts'
import {
  GetAccessTokenService,
  GithubLoginService
} from '../../../main/services'
import {
  GetAccessTokenRepository,
  GetGithubUserByTokenRepository,
  GetGithubUserEmailsByTokenRepository
} from '../../../infra/github'
import { GithubLoginController } from '../../../presentation/controllers'
import { DevRepository } from '../../../infra/database/repositories'
import { JwtAdapter } from '../../../main/adapters/jwt-adapter'

export const createGithubLoginController = (): Controller => {
  const githubGetAccessToken = new GetAccessTokenRepository()
  const getAccessTokenService = new GetAccessTokenService(githubGetAccessToken)

  const createDevRepository = new DevRepository()

  const getGithubUserByTokenRepository = new GetGithubUserByTokenRepository()
  const getGithubUserEmailsByTokenRepository =
    new GetGithubUserEmailsByTokenRepository()

  const jwtAdapter = new JwtAdapter(process.env.JWT_SECRET)

  const githubLoginService = new GithubLoginService(
    getAccessTokenService,
    createDevRepository,
    getGithubUserByTokenRepository,
    getGithubUserEmailsByTokenRepository,
    jwtAdapter
  )

  return new GithubLoginController(githubLoginService)
}
