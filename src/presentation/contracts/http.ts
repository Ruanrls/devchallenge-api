export interface HttpResponse {
  code: number
  data: unknown
}

export const ok = (data: unknown): HttpResponse => {
  return {
    data,
    code: 200
  }
}

export const badRequest = (error: string): HttpResponse => {
  return {
    data: { error },
    code: 400
  }
}

export const serverError = (error?: string): HttpResponse => {
  if (!error) error = 'Internal server error'

  return {
    data: { error },
    code: 500
  }
}

export const forbidden = (): HttpResponse => {
  return {
    data: { error: 'forbidden' },
    code: 403
  }
}

export const unauthorized = (): HttpResponse => {
  return {
    data: { error: 'unauthorized' },
    code: 401
  }
}
