import { User } from "../../database/conection/conectionDB";

export const getAllUsers = async (req, res) => {
  try {
    return await User.findAll();
  } catch (error) {
    return res.status(404).send(error.message);
  }
};
