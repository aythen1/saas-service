import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { db, Security } from '../../src/v1/database/conection/conectionDB'

describe('Security Model', () => {
  beforeAll(async () => {
    await db.sync({ force: true })
  })

  it('should create security if domain is passed', async () => {
    const security = await Security.create({
      httpsEncryption: true
    })
    expect(security.toJSON()).toHaveProperty('httpsEncryption', true)
  })

  // falta agregar relaciones y mas validadores en el modelo

  afterAll(async () => {
    await db.sync({ force: true })
    db.close()
  })
})
