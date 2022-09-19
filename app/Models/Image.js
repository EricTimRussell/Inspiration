export class Image {

  constructor(data) {
    this.url = data.url
    this.imgUrl = data.imgUrl
    this.largeImgUrl = data.largeImgUrl
    this.author = data.author
  }



  get NextImageTemplate() {
    return /*html*/`
  <div selectable class="pointer mdi mdi-chevron-right fs-2" onclick="app.imagesController.drawNewImage()"></div>
  `
  }
}