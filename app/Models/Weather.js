export class Weather {
  constructor(data) {
    this.name = data.name
    this.temp = (Math.floor((data.main.temp * 1.8 - 459.67))) || (Math.floor((data.main.temp - 273.15)))
    this.icon = data.weather[0].icon
  }

  // TODO CREATE TOGGLE BETWEEN CELSIUS AND FARENHEIT

  get WeatherTemplate() {
    return /*html*/`
<div>
<p>${this.name}</p>
<h6 selectable class="pointer" onclick="">${this.temp}</h6>
<img src="https://openweathermap.org/img/wn/${this.icon}.png"/>
</div>
`
  }

}
