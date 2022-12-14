import { appState } from "../AppState.js";
import { quotesTimeService } from "../Services/QuotesTimeService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js";

function _drawQuote() {
  // @ts-ignore
  setHTML('quotetime', appState.quotes.CenterTemplate)
}

function _drawClock() {
  const time = new Date();
  setText('clock', time.toLocaleTimeString())
}

export class QuotesTimeController {
  constructor() {
    console.log('HI');
    this.getQuotes()
    appState.on('quotes', _drawQuote)
    setInterval(_drawClock, 1000)
  }


  async getQuotes() {
    try {
      await quotesTimeService.getQuotes()
    } catch (error) {
      console.error('quotes')
      Pop.error(error)
    }
  }


}
