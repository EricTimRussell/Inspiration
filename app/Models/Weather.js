export class Weather {

  constructor(data) {
    this.name = data.name
    this.temp = data.main.temp
    this.icon = data.weather[0].icon
    this.F = (Math.floor((this.temp * 1.8 - 459.67)))
    this.C = (Math.floor((this.temp - 273.15)))
  }


  get WeatherTemplate() {
    return /*html*/`
<div class="d-flex justify-content-end p-2 text-hilighter">
<p class="px-2 mt-3">${this.name}</p>
<h6 selectable class="pointer mt-3" id="f" onclick="app.weatherController.toggleTemp()"> ${this.F}F</h6>
<span onclick="app.weatherController.toggleTemp()" selectable id="c" class="pointer visually-hidden mt-3">${this.C}C</span>
<img src="https://openweathermap.org/img/wn/${this.icon}.png"/>
</div>
`
  }



  // this.F = (Math.floor((this.temp * 1.8 - 459.67)))
  // this.C = (Math.floor((this.temp - 273.15)))

}
