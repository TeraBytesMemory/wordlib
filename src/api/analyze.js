import axios from 'axios'
import * as apikeys from './env'
import scrape from 'ascrape'
import _ from 'lodash'

const endpoint = 'https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases'

export default function analyze(url) {
  return new Promise((resolve, reject) => {
    scrape(url, (err, article, meta) => {
      if (!err) {
        const text = article.content.text()
        resolve(text)
      } else {
        reject(new Error('Error while scraping.'))
      }
    })
  }).then(text => {
    return axios.post(endpoint, {
      documents: [{
        language: 'ja-JP',
        id: '1',
        text
      }]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': apikeys.AZURE_KEY
      }
    })
  }).then(response => {
    return new Promise((resolve, reject) => {
      if (response.data.documents.length === 0) {
        reject(new Error('No keywords returned.'))
      }

      const keywords = _.chain(response.data.documents[0].keyPhrases)
        .map(w => _.split(w, ' '))
        .flatten()
        .value()
      resolve({
        keywords
      })
    })
  })
}
