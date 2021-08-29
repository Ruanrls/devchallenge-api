import { AxiosResponse } from 'axios'
import { GetUserByToken } from '../../domain/use-case/github/get-user-by-token'
import { githubApi } from '../../infra/config'

export class GetGithubUserByTokenRepository implements GetUserByToken {
  get = async ({
    token
  }: GetUserByToken.Params): Promise<GetUserByToken.Result> => {
    const { data: user }: AxiosResponse<GetUserByToken.Result> =
      await githubApi.get('/user', {
        headers: { Authorization: `token ${token}` }
      })

    if (!user) throw new Error('User not found')

    return user
  }
}
