import { Website } from "../../database/conection/conectionDB";

export const deleteWebsite = async (req, res) => {
  const { id } = req.params;
  const website = await Website.findByPk(id);

  if (!website) {
    return res.status(404).send(`The websiteId: ${id} doesn't exist`);
  }

  try {
    await website.update({ isDisable: true }, { where: id });
    return res.send(`The websiteId: ${id} was succesful deleted`);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};
