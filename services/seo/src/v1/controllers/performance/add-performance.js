import { Performance } from "../../database/conection/conectionDB.js";

export const addPerformance = async (req, res) => {
  try {
    const newPerformance = await Performance.create(req.body);
    res.status(201).json(newPerformance);
  } catch (error) {
    res.status(404).json(error);
  }
};
