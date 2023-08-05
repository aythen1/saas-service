import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { db, Miscellaneous } from '../../src/v1/database/conection/conectionDB'

describe('Miscellaneous Model', () => {
  beforeAll(async () => {
    await db.sync({ force: true })
  })

  it('should create miscellaneous if domain is passed', async () => {
    const miscellaneous = await Miscellaneous.create({
      metaViewport: 'kjaskfj'
    })
    expect(miscellaneous.toJSON()).toHaveProperty('metaViewport', 'kjaskfj')
  })

  // falta agregar relaciones y mas validadores en el modelo

  afterAll(async () => {
    await db.sync({ force: true })
    db.close()
  })
})
