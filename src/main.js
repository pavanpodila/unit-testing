import '../node_modules/bootstrap/scss/bootstrap-flex.scss';

import angular from 'angular';
import 'angular-route';

import Shell from './shell/shell';
import Dashboard from './dashboard';
import Loan from './loan';

import LoansService from './core/loans.service';

angular.module('app', ['ngRoute'])
    .component('shell', Shell)
    .component('dashboard', Dashboard)
    .component('loan', Loan)
    .service('loansService', LoansService)
    .config(($routeProvider, $locationProvider)=>{
        $routeProvider.when('/', {
            template: '<dashboard></dashboard>'
        })
        .when('/loan/:id', {
            template: '<loan></loan>'
        });

        $locationProvider.html5Mode(true);
    });

document.body.innerHTML = '<shell></shell>';
angular.bootstrap(document.body, ['app']);
