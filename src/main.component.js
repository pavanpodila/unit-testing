import template from './main.tpl.html';

/* @ngInject */
class MainController {
  /* @ngInject */
  constructor() {
    this.counter = 0;
  }
  
  increaseCounter() {
    this.counter++;
  }

  decreaseCounter() {
    this.counter--;
  }  
}

export default {
  template,
  controller: MainController,
  controllerAs: 'MainController'
};
