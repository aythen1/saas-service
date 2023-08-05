import { User } from "../../database/conection/conectionDB.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    if (!users.length) {
      return res.status(404).send("There are not users in database");
    }
    return users;
  } catch (error) {
    return res.status(404).send(error.message);
  }
};
