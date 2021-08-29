import { GetAccessTokenService } from '../github'
import { GithubLogin } from '../../../domain/use-case'
import { CreateDevRepository } from '../../../domain/repository'
import {
  GetGithubUserByTokenRepository,
  GetGithubUserEmailsByTokenRepository
} from '../../../infra/github'
import { JwtAdapter } from '../../../main/adapters/jwt-adapter'

export class GithubLoginService implements GithubLogin {
  constructor(
    private readonly getAccessTokenService: GetAccessTokenService,
    private readonly createDevRepository: CreateDevRepository,
    private readonly getGithubUserByTokenRepository: GetGithubUserByTokenRepository,
    private readonly getGithubUserEmailsByTokenRepository: GetGithubUserEmailsByTokenRepository,
    private readonly jwtAdapter: JwtAdapter
  ) {}

  login = async ({
    temporaryCode
  }: GithubLogin.Params): Promise<GithubLogin.Result> => {
    const tokenOrError = await this.getAccessTokenService.get({ temporaryCode })

    if (!(tokenOrError instanceof Error)) {
      const { accessToken: token } = tokenOrError

      const user = await this.getGithubUserByTokenRepository.get({
        token
      })

      const { emails: userEmails } =
        await this.getGithubUserEmailsByTokenRepository.get({
          token
        })

      const dev = {
        name: user.name,
        avatarUrl: user.avatar_url,
        githubId: user.id,
        githubUrl: user.url,
        githubAccessToken: token,
        emails: userEmails
      }

      await this.createDevRepository.create(dev)

      const primaryEmail = userEmails.find(
        currentEmail => currentEmail.isPrimary
      )
      const jwtCreator = await this.jwtAdapter.sign({
        data: { email: primaryEmail.email }
      })

      return { accessToken: jwtCreator }
    }

    return tokenOrError
  }
}
