import { GetAccessToken } from '../../../domain/use-case'
import { GithubBadVerificationCode } from '../../../domain/errors'
import { GetAccessTokenRepository } from '../../../infra/github'

export class GetAccessTokenService implements GetAccessToken {
  constructor(
    private readonly githubGetAccessToken: GetAccessTokenRepository
  ) {}

  get = async ({
    temporaryCode
  }: GetAccessToken.Params): Promise<GetAccessToken.Result> => {
    const { accessToken, error } = await this.githubGetAccessToken.get({
      temporaryCode
    })

    if (error) return new GithubBadVerificationCode()

    return { accessToken }
  }
}
