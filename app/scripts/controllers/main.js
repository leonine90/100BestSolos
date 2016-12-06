'use strict';


angular.module('100bestsolosApp')
  .controller('SolosCtrl', ['$scope','solosFactory', function ($scope,solosFactory) {
      
      $scope.solos = solosFactory.getSolos();
	  $scope.number = ["1","2","3","4","5"];
	  $scope.playSolo = function(i){
			document.getElementById(i).play();
	  };
      $scope.pauseSolo = function(i){
			document.getElementById(i).pause();
      };
	  
      
      $scope.filterText = '';
  }]);
