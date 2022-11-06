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
    this.errorsList.forEach((element, index) => {
      if (index === code) {
        toReturn = element;
      }
    });
    return toReturn;
  }
}
