import { Application } from "stimulus"
window.Stimulus = Application.start()

import ButtonController from "./controllers/button_controller.js"
Stimulus.register("button", ButtonController)
