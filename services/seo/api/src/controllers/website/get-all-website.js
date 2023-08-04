import { Website } from "../../database/conection/conectionDB";

export const getAllWebsites = async (req, res) => {
  try {
    return await Website.findAll();
  } catch (error) {
    return res.status(404).send(error.message);
  }
};
