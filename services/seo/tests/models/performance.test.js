import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { db, Performance } from "../../src/v1/database/conection/conectionDB";

describe("Performance Model", () => {
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  it("should create performance if domain is passed", async () => {
    const performance = await Performance.create({
      textCompression: true,
    });
    expect(performance.toJSON()).toHaveProperty("textCompression", true);
  });

  //falta agregar relaciones y mas validadores en el modelo

  afterAll(async () => {
    await db.sync({ force: true });
    db.close();
  });
});
