import { GithubGetAccessToken } from '../../domain/repository'
import { githubAxios } from '../config'

export class GetAccessTokenRepository implements GithubGetAccessToken {
  get = async ({
    temporaryCode
  }: GithubGetAccessToken.Params): Promise<GithubGetAccessToken.Result> => {
    const body = {
      client_secret: process.env.CLIENT_SECRET,
      client_id: process.env.CLIENT_ID,
      code: temporaryCode
    }

    const { data } = await githubAxios.post('/login/oauth/access_token', body)

    const response: GithubGetAccessToken.Result = {
      error: Boolean(data.error),
      accessToken: data.access_token
    }

    return response
  }
}
