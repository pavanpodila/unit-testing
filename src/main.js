import angular from 'angular';
import Shell from './shell/shell';
import LoansService from './core/loans.service';
import '../node_modules/bootstrap/scss/bootstrap-flex.scss';
import 'angular-route';

angular.module('app', ['ngRoute'])
    .component('shell', Shell)
    .service('loansService', LoansService)
    .config(($routeProvider, $locationProvider)=>{
        $routeProvider.when('/', {
            template: ''
        })
        $locationProvider.html5Mode(true);
    });

document.body.innerHTML = '<shell></shell>';
angular.bootstrap(document.body, ['app']);
