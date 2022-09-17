import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { SandboxServer } from "./AxiosService.js"

class WeatherService {
  async getWeather() {
    const res = await SandboxServer.get('weather')
    appState.weather = new Weather(res.data)
    // console.log(res.data);
  }



}
export const weatherService = new WeatherService