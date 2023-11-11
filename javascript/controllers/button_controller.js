import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["blueButton"]

  connect() {
    console.log("emmas button", this.blueButtonTarget);
  }
  changeButton() {
    this.blueButtonTarget.innerText = "EMma is the best";
  }
}
