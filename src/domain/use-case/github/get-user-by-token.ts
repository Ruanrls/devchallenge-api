export interface GetUserByToken {
  get: (params: GetUserByToken.Params) => Promise<GetUserByToken.Result>
}

export namespace GetUserByToken {
  export type Params = {
    token: string
  }

  export type Result = {
    id: number
    avatar_url?: string
    url: string
    name: string
    location?: string
    email?: string
    bio?: string
  }
}
