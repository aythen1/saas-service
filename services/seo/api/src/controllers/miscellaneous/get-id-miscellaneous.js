import { Miscellaneous } from "../../database/conection/conectionDB.js";

export const getMiscellaneousByPk = async (req, res) => {
  const { id } = req.params;

  try {
    const miscellaneous = await Miscellaneous.findByPk(id);
    if (!miscellaneous) {
      return res.status(404).send(`The miscellaneousId: ${id} doesn't exist`);
    }
    return miscellaneous;
  } catch (error) {
    return res.status(404).send(error.message);
  }
};
