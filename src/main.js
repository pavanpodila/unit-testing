import '../node_modules/bootstrap/scss/bootstrap-flex.scss';

import angular from 'angular';
import 'angular-route';

import Shell from './shell/shell';
import Dashboard from './dashboard/dashboard';
import Loan from './loan/loan';
import ProgressIndicator from './core/progress-indicator/progress-indicator';

import LoansService from './core/loans.service';

angular.module('app', ['ngRoute'])
    .component('shell', Shell)
    .component('dashboard', Dashboard)
    .component('loan', Loan)
    .component('progressIndicator', ProgressIndicator)
    .service('loansService', LoansService)
    .constant('env', {
        title: 'e-Portal',
        apiUrl: 'http://localhost:3000'
    })
    .config(($routeProvider, $locationProvider)=>{
        $routeProvider.when('/', {
            template: '<dashboard></dashboard>'
        })
        .when('/loan/:id', {
            template: '<loan></loan>'
        });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });

document.body.innerHTML = '<shell></shell>';
angular.bootstrap(document.body, ['app']);
