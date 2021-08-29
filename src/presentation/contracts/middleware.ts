import { HttpResponse } from './http'
import { Request, Response, NextFunction } from 'express'

export interface Middleware {
  handle: (params: Middleware.Params) => Promise<Middleware.Result>
}

export namespace Middleware {
  export type Params = {
    request: Request
    response: Response
    next: NextFunction
  }

  export type Result = HttpResponse
}
