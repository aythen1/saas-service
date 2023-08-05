import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { db, Website } from "../../src/database/v1/conection/conectionDB.js";

describe("Website Model", () => {
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  it("should not create website if domain is not send", async () => {
    expect.assertions(1);
    try {
      await Website.create({});
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  it("should create website if domain is passed", async () => {
    const website = await Website.create({
      domain: "google.com",
    });
    expect(website.toJSON()).toHaveProperty("domain", "google.com");
  });

  //falta agregar relaciones y mas validadores en el modelo

  afterAll(async () => {
    await db.sync({ force: true });
    db.close();
  });
});
