var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $window) {
  $scope.name = 'World';
  $scope.data = $window.data;
});