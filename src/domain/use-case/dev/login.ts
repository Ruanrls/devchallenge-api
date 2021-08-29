export interface GithubLogin {
  login: (params: GithubLogin.Params) => Promise<GithubLogin.Result>
}

export namespace GithubLogin {
  export type Params = {
    temporaryCode: string
  }

  export type Result =
    | {
        accessToken: string
      }
    | Error
}
