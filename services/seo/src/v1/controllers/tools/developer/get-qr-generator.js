import QRCode from 'qrcode'

export const getQrGenerator = async (req, res) => {
  const { content, size } = req.body
  try {
    const qrCodeOptions = {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      size
    }

    const qrCodeDataUrl = await QRCode.toDataURL(content, qrCodeOptions)

    return res.send(qrCodeDataUrl)
  } catch (error) {
    return res.status(404).send(error)
  }
}
