'use strict';


angular.module('100bestsolosApp')
  .controller('SolosCtrl', ['$scope','solosFactory', function ($scope,solosFactory) {
      
      $scope.solos = solosFactory.getSolos();
      $scope.playing = 0;
	  $scope.playSolo = function(i){
		  	for(var n=1;n<=100;n++){
				document.getElementById(n).pause();
			};
			document.getElementById(i).play();
			$scope.playing = i;
	  };
      $scope.pauseSolo = function(i){
			document.getElementById(i).pause();
			$scope.playing = 0;
      };
	  
      
      $scope.filterText = '';
  }]);
