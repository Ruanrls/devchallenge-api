import jwt from 'jsonwebtoken'

interface JwtPayload {
  data: string | object | Buffer
}

export class JwtAdapter {
  constructor(private readonly secret: string) {}

  sign = async ({ data }: JwtPayload) => jwt.sign(data, this.secret)

  verify = async (data: string) => jwt.verify(data, this.secret)
}
