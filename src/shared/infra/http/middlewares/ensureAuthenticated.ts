import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { UserRepository } from '../../../../modules/account/repositories/implementations/UserRepository'
import { AppError } from '../error/AppError'

interface IPayload{
  sub: string
}

export async function ensureAuthenticated
(request:Request, response:Response, next:NextFunction) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('Token missing', 401)
  }
  const [, token] = authHeader.split(' ')

  try {
    const { sub: id } = verify(token,
      '$2a$09$u/X211.AigOHTobHghaNQuESrMNRxAAbVBvOjf1HVe9AfPD') as IPayload
    const userRepository = new UserRepository()
    const user = await userRepository.findByUser(id)

    if (!user) {
      throw new Error('User does not exists!')
    }
    request.user = {
      id: id
    }

    next()
  } catch (error) {
    throw new Error('Invalid token')
  }
}
