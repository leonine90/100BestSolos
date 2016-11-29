'use strict';


angular.module('100bestsolosApp')
  .controller('SolosCtrl', ['$scope','solosFactory', function ($scope,solosFactory) {
      
      $scope.solos = solosFactory.getSolos();
      
      $scope.playSolo = function(){
          document.getElementById('song').play();
      }
      $scope.pauseSolo = function(){
          document.getElementById('song').pause();
      }
      $scope.playNg2 = function () {
         var audio = document.getElementById("song");
         audio.load();
         audio.play();
      };
      
      $scope.filterText = '';
  }]);
