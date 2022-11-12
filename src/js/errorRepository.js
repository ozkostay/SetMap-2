// import { forEach } from "core-js/core/array";

export default class ErrorRepository {
  constructor() {
    this.errorsList = new Map();
  }

  add(key, words) {
    this.errorsList.set(key, words);
  }

  translate(code) {
    let toReturn = 'Unknown error';
    if (this.errorsList.has(code)) {
      toReturn = this.errorsList.get(code);
    }
    return toReturn;
  }
}
