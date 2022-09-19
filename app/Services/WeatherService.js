import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { SandboxServer } from "./AxiosService.js"

class WeatherService {
  toggleTemp() {
    let f = document.getElementById('f');
    // @ts-ignore
    if (f.style.display === 'none') {
      // @ts-ignore
      document.getElementById('c').classList.add('visually-hidden')
      // @ts-ignore
      f.style.display = 'block';
    } else {
      // @ts-ignore
      document.getElementById('c').classList.remove('visually-hidden')
      // @ts-ignore
      f.style.display = 'none'
    }
  }

  async getWeather() {
    const res = await SandboxServer.get('weather')
    appState.weather = new Weather(res.data)
    console.log(res.data);
  }


}
export const weatherService = new WeatherService