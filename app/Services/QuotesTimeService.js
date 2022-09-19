import { appState } from "../AppState.js";
import { QuoteTime } from "../Models/QuoteTime.js";
import { SandboxServer } from "./AxiosService.js"

class QuotesTimeService {

  async getQuotes() {
    const res = await SandboxServer.get('/quotes')
    // console.log('getSandboxQuotes', res.data);
    appState.quotes = new QuoteTime(res.data)
    // console.log('quotes', appState.quotes);
  }

}
export const quotesTimeService = new QuotesTimeService()