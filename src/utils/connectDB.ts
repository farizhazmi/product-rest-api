import mongoose from 'mongoose'
import config from '../config/environment'
import { logger } from './logger'

mongoose
  .connect(`${config.db}`)
  .then(() => {
    logger.info('Connection Success')
  })
  .catch((error) => {
    logger.info('Connection failed')
    logger.error(error)
    process.exit(1)
  })
