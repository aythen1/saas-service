import { v4 } from 'uuid'

export const getUuidGenerator = (req, res) => {
  return res.send(v4())
}
