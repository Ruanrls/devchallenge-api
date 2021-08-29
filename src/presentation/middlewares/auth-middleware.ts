import { NextFunction, Request, Response } from 'express'
import { JwtAdapter } from 'main/adapters/jwt-adapter'
import { Middleware } from '../contracts'

interface AuthMiddlewareProps {
  request: Request
  response: Response
  next: NextFunction
}

export const authMiddleware =
  (jwtAdapter: JwtAdapter) =>
  async ({
    request,
    response,
    next
  }: AuthMiddlewareProps): Promise<Middleware.Result> => {
    const { headers } = request

    const jwt = headers.authorization
    if (!jwt) {
      response.status(401).json({ error: 'unauthorized' })
      return
    }

    const isValidToken = await jwtAdapter.verify(jwt)
    if (!isValidToken) {
      response.status(403).json({ error: 'forbidden' })
      return
    }

    next()
  }
