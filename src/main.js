import angular from 'angular';
import MainComponent from './main.component';

angular.module('app', [])
  .component('appMain', MainComponent);

angular.element(document).ready(function () {
  const appNode = document.querySelector('#app');
  appNode.innerHTML = '<app-main></app-main>';
  angular.bootstrap(appNode, ['app']);
});
