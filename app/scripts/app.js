'use strict';

/**
 * @ngdoc overview
 * @name 100bestsolosApp
 * @description
 * # 100bestsolosApp
 *
 * Main module of the application.
 */
angular
  .module('100bestsolosApp', [
    'ngResource',
    'ngRoute',
	'perfect_scrollbar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'SolosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
