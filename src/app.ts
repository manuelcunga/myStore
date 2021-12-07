import Express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import './shared/container'
import { AppError } from './shared/infra/http/error/AppError'
import { router } from './shared/infra/http/routes/index'
import createConection from './shared/infra/typeorm'

createConection()

const app = Express()
app.use(Express.json())
app.use(router)

app.use((err: Error, request: Request, response:Response,
  next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error ${err.message}`
  })
})

export { app }

