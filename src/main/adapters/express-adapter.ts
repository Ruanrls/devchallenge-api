import { Controller } from '../../presentation/contracts'
import { Request, Response } from 'express'
import { HttpResponse } from 'presentation/contracts/http'

export interface ExpressAdapterParams {
  response: HttpResponse
}

export const expressAdapter = (data: HttpResponse, response: Response) => {
  response.status(data.code).json(data.data)
}
