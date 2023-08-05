import { Miscellaneous } from "../../database/conection/conectionDB";

export const deleteMiscellaneous = async (req, res) => {
  const { id } = req.params;
  const miscellaneous = await Miscellaneous.findByPk(id);

  if (!miscellaneous) {
    return res.status(404).send(`The miscellaneousId: ${id} doesn't exist`);
  }

  try {
    await Miscellaneous.update({ isDisable: true }, { where: id });
    return res.send(`The miscellaneousId: ${id} was succesful deleted`);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};
