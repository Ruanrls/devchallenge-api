import { GetUserEmailsByToken } from '../../domain/use-case/github'
import { githubApi } from '../../infra/config'

interface GithubApiResponse {
  email: string
  verified: boolean
  primary: boolean
  visibility: string
}

export class GetGithubUserEmailsByTokenRepository
  implements GetUserEmailsByToken
{
  get = async ({
    token
  }: GetUserEmailsByToken.Params): Promise<GetUserEmailsByToken.Result> => {
    const { data: githubEmailsResponse }: { data: GithubApiResponse[] } =
      await githubApi.get('/user/emails', {
        headers: { Authorization: `token ${token}` }
      })

    const emails = githubEmailsResponse.map(currentEmail => ({
      email: currentEmail.email,
      isPrimary: currentEmail.primary
    }))

    return { emails }
  }
}
