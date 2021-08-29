import { GetAccessToken } from '../../use-case'

export interface GithubGetAccessToken {
  get: (
    params: GithubGetAccessToken.Params
  ) => Promise<GithubGetAccessToken.Result>
}

export namespace GithubGetAccessToken {
  export type Params = GetAccessToken.Params
  export type Result = {
    accessToken?: string
    error: boolean
  }
}
