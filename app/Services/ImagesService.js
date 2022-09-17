import { appState } from "../AppState.js"
import { Image } from "../Models/Image.js";
import { SandboxServer } from "./AxiosService.js"

class ImagesService {
  async getSandboxImages() {
    const res = await SandboxServer.get('/images')
    // console.log('getsandboxImages', res.data);
    // @ts-ignore
    appState.images = new Image(res.data)
    // console.log(appState.images);
  }



}

export const imagesService = new ImagesService