import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { db, Headers } from "../../src/v1/database/conection/conectionDB.js";

describe("Headers Model", () => {
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  it("should create header if domain is passed", async () => {
    const header = await Headers.create({
      h1: ["soy el primer titulo", "soy el segundo titulo"],
    });
    expect(header.toJSON()).toHaveProperty("h1", [
      "soy el primer titulo",
      "soy el segundo titulo",
    ]);
  });

  //falta agregar relaciones y mas validadores en el modelo

  afterAll(async () => {
    await db.sync({ force: true });
    db.close();
  });
});
