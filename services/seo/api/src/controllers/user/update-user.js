import { User } from "../../database/conection/conectionDB";

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, url, phone, avatar } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).send(`The userId: ${id} doesn't exist`);
    }

    await user.update(
      {
        name,
        url,
        phone,
        avatar,
      },
      { where: id }
    );
  } catch (error) {
    return res.status(404).send(error.message);
  }
};
