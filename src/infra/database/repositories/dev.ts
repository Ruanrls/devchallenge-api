import { prisma } from '../../config'
import { CreateDevRepository } from '../../../domain/repository'

export class DevRepository implements CreateDevRepository {
  create = async (params: CreateDevRepository.Params) => {
    const dev = await prisma.dev.create({ data: params })

    return dev
  }
}
