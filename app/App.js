import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesTimeController } from "./Controllers/QuotesTimeController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  imagesController = new ImagesController()
  quotesController = new QuotesTimeController()
  weatherController = new WeatherController()
  tasksController = new TasksController()
}

window["app"] = new App();
