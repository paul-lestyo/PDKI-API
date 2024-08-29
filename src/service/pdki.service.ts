import { SignatureToken } from '../../utils/signatureToken'
import axios, { AxiosResponse } from 'axios'

class PDKIService {
  private apiUrl: string

  constructor() {
    this.apiUrl = 'https://pdki-indonesia.dgip.go.id/api'
  }

  async fetchTrademark(search: string): Promise<any> {
    const signatureToken = new SignatureToken()
    const pdkiSignature = signatureToken.createPDKISignature()

    try {
      const response: AxiosResponse<any> = await axios.get(`${this.apiUrl}/search`, {
        headers: {
					Accept: "application/json",
          'pdki-signature': pdkiSignature,
        }, 
				params: {
					keyword: search,
					page: 1,
					showFilter: true,
					type: 'trademark'
				}
      })
      return response.data
    } catch (error) {
      throw new Error(`Failed to fetch users: ${error}`)
    }
  }
}

export default new PDKIService()
