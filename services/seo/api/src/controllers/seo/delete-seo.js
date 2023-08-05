import { Seo } from "../../database/conection/conectionDB";

export const deleteSeo = async (req, res) => {
  const { id } = req.params;
  const seo = await Seo.findByPk(id);

  if (!seo) {
    return res.status(404).send(`The seoId: ${id} doesn't exist`);
  }

  try {
    await Seo.update({ isDisable: true }, { where: id });
    return res.send(`The seoId: ${id} was succesful deleted`);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};
