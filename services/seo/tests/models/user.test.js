import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { db, User } from "../../src/v1/database/conection/conectionDB";

describe("User Model", () => {
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  it("should not create user if email is not send", async () => {
    expect.assertions(1);
    try {
      await User.create({ password: "a1234567", name: "oscar" });
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  it("should not create user if password is not send", async () => {
    expect.assertions(1);
    try {
      await User.create({ email: "google@google.com", name: "oscar" });
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  it("should not create user if email is invalid", async () => {
    expect.assertions(1);
    try {
      await User.create({
        email: "google.com",
        password: "a1234567",
        name: "oscar",
      });
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  it("should not create user if password is not alphanumeric", async () => {
    expect.assertions(1);
    try {
      await User.create({
        email: "google@google.com",
        password: "/./abdcfg",
        name: "oscar",
      });
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  it("should not create user if password is less than 8 characters", async () => {
    expect.assertions(1);
    try {
      await User.create({
        email: "google@google.com",
        password: "abc",
        name: "oscar",
      });
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  it("should not create user if name is passed with less than 3 characters", async () => {
    expect.assertions(1);
    try {
      await User.create({
        email: "google@google.com",
        password: "abc123456",
        name: "os",
      });
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  it("should not create user if email is repeat", async () => {
    expect.assertions(3);
    try {
      const userOne = await User.create({
        email: "google@google.com",
        password: "12345abc6",
      });
      expect(userOne.toJSON()).toHaveProperty("email", "google@google.com");
      expect(userOne.toJSON()).toHaveProperty("password", "12345abc6");
      const userTwo = await User.create({
        email: "google@google.com",
        password: "12345abc6",
      });
      expect(userTwo.toJSON()).toHaveProperty("email", "google@google.com");
      expect(userTwo.toJSON()).toHaveProperty("password", "abc123456");
    } catch (error) {
      expect(error.message).toBeDefined();
      console.log(error.message);
    }
  });

  it("should create user if valid email and password are passed", async () => {
    const user = await User.create({
      email: "windows@google.com",
      password: "abc123456",
    });
    expect(user.toJSON()).toHaveProperty("email", "windows@google.com");
    expect(user.toJSON()).toHaveProperty("password", "abc123456");
  });

  //falta agregar relaciones y mas validadores en el modelo

  afterAll(async () => {
    await db.sync({ force: true });
    db.close();
  });
});
