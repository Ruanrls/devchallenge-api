import { GithubBadVerificationCode } from '../../errors'

export interface GetAccessToken {
  get: (temporaryCode: GetAccessToken.Params) => Promise<GetAccessToken.Result>
}

export namespace GetAccessToken {
  export type Params = {
    temporaryCode: string
  }

  export type Result =
    | GithubBadVerificationCode
    | {
        accessToken: string
      }
}
