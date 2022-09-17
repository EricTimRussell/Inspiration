import { appState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js"
import { Pop } from "../Utils/Pop.js"
import { setText } from "../Utils/Writer.js"

function _drawBakcgroundImage() {
  let bgImage = appState.images
  // @ts-ignore
  document.querySelector('body').style.backgroundImage = `url(${bgImage.largeImgUrl})`
  // @ts-ignore
  setText('imgauthor', bgImage.author)

}



export class ImagesController {
  constructor() {
    console.log("HI")
    this.getSandboxImages()
    appState.on('images', _drawBakcgroundImage)
  }

  async getSandboxImages() {
    try {
      await imagesService.getSandboxImages()
    } catch (error) {
      console.error('getimages', error)
      Pop.error(error.message)
    }
  }

}