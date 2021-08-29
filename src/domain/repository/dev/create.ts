import { Dev } from '../../entities'

export interface CreateDevRepository {
  create: (
    params: CreateDevRepository.Params
  ) => Promise<CreateDevRepository.Result>
}

export namespace CreateDevRepository {
  export type Params = {
    name: string
    avatarUrl?: string
    githubId: number
    githubUrl: string
    githubAccessToken: string
    emails: { email: string; isPrimary: boolean }[]
  }
  export type Result = Dev
}
