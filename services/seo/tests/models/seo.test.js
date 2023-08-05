import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { db, Seo } from '../../src/v1/database/conection/conectionDB'

describe('Seo Model', () => {
  beforeAll(async () => {
    await db.sync({ force: true })
  })

  it('should not create seo if title is not send', async () => {
    expect.assertions(1)
    try {
      await Seo.create({})
    } catch (error) {
      expect(error.message).toBeDefined()
    }
  })

  it('should create seo if title is passed', async () => {
    const seo = await Seo.create({
      title: 'google.com'
    })
    expect(seo.toJSON()).toHaveProperty('title', 'google.com')
  })

  // falta agregar relaciones y mas validadores en el modelo

  afterAll(async () => {
    await db.sync({ force: true })
    db.close()
  })
})
