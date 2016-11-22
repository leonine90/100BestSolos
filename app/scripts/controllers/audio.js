angular.module('100bestsolosApp')
  .controller('AudioCtrl', ['$scope','solosFactory', function ($scope,solosFactory) {
      
      $scope.audioPlay = function(){
          var songNo = toString(solosFactory.getSolo)
          try { $('.no'+toString(solo.no)).currentTime=0; } catch(e) {} $('.no'+toString(solo.no)).play();
      }
      $scope.audioPause = function(){
          try { $('.no'+toString(solo.no)).currentTime=0; } catch(e) {} $('.no'+toString(solo.no)).pause();
      }
      
  }]);