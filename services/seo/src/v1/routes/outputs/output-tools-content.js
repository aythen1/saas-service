import { Router } from 'express'
import { getLoremIpsumGenerator } from '../../controllers/tools/content/get-lorem-ipsum-generator.js'
import { getWordCounter } from '../../controllers/tools/content/get-word-counter.js'
import { getTextCleaner } from '../../controllers/tools/content/get-text-cleaner.js'

const outputsToolsContentRoutes = Router()

outputsToolsContentRoutes.get('/lorem-ipsum-generator', getLoremIpsumGenerator)
  .post('/text-cleaner', getTextCleaner)
  .post('/word-counter', getWordCounter)

export default outputsToolsContentRoutes
