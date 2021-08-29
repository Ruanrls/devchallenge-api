export interface GetUserEmailsByToken {
  get: (
    params: GetUserEmailsByToken.Params
  ) => Promise<GetUserEmailsByToken.Result>
}

export namespace GetUserEmailsByToken {
  export type Params = {
    token: string
  }
  export type Result = {
    emails: { email: string; isPrimary: boolean }[]
  }
}
