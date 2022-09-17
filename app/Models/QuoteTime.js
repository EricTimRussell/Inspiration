export class QuoteTime {
  constructor(data) {
    this.author = data.author
    this.content = data.content
  }




  get CenterTemplate() {
    return `
  <div class="col-md-12 d-flex flex-column align-items-center">
    <h5 class="text-hilighter">${this.content}</h5>
    <div class="hide hide-hover">
    <h5>${this.author}</h5>
    </div>
  </div>
    `
  }
}