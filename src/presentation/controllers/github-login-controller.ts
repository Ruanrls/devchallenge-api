import { Controller, ok, serverError, badRequest } from '../contracts'
import { GithubLoginService } from '../../main/services'
import { expressAdapter } from '../../main/adapters/express-adapter'
import { Request, Response } from 'express'

export class GithubLoginController implements Controller {
  constructor(private readonly githubLoginService: GithubLoginService) {}

  handle = async (request: Request, response: Response): Promise<void> => {
    const code = request.query.code as string

    if (!code) {
      expressAdapter(badRequest('Code parameter is mandatory'), response)
      return
    }

    try {
      const jwtOrError = await this.githubLoginService.login({
        temporaryCode: code
      })

      if (jwtOrError instanceof Error) {
        expressAdapter(ok({ error: jwtOrError.message }), response)

        return
      }

      response.setHeader('set-cookie', `access_token=${jwtOrError.accessToken}`)
      response.redirect(process.env.FRONTEND_URL)
    } catch (error) {
      expressAdapter(serverError(error.message), response)
    }
  }
}

export namespace LoginController {
  export type Params = {
    code: string
  }
}
