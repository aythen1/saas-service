export const getKeywordResearch = async (req, res) => {
  try {
    // const client = new GoogleAdsApi({
    //   client_id: 'YOUR_CLIENT_ID',
    //   client_secret: 'YOUR_CLIENT_SECRET',
    //   developer_token: 'YOUR_DEVELOPER_TOKEN'
    // })

    // const keywordService = client.getService('KeywordService')
    // const response = await keywordService.suggest({
    //   query: keywords,
    //   country,
    //   currency,
    //   language: 'en' // Idioma de las sugerencias
    // })

    // const results = response[0].results

    // const keywordResearchData = results.map(result => ({
    //   keyword: result.text,
    //   searchVolume: result.keywordMetrics.avgMonthlySearches,
    //   costPerClick: result.keywordMetrics.competition,
    //   competition: result.keywordMetrics.competition
    // }))

    // return res.status(200).send(keywordResearchData)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
