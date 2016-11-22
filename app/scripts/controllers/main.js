'use strict';


angular.module('100bestsolosApp')
  .controller('SolosCtrl', ['$scope','solosFactory', function ($scope,solosFactory) {
      
      $scope.solos = solosFactory.getSolos();
      
  }]);
