var app = angular.module('MyComptaApp',['ngAnimate']);


app.controller('usersCtrl', function ($scope,$http){
   $http({
      method:"GET",
      url:"json/users.json"
   }).then(function(response){
      $scope.users = response.data.records;
      $scope.tabUsers = [];
      for ($user in $scope.users) {
        $scope.tabUsers[$scope.users[$user].Id] = $scope.users[$user].username;
      }

   });
});


app.controller('depensesCtrl', function ($scope,$http){
   $http({
      method:"GET",
      url:"json/depenses.json"
   }).then(function(response){
      $scope.depenses = response.data.records;
   });
});



//afiche les modales de la nav
app.controller('dislplayNav', function($scope) {

    $scope.showFilter = false;
    $scope.showFilterFunc = function() {
        $scope.showFilter = !$scope.showFilter;
    }

    $scope.showNew = false;
    $scope.showNewFunc = function() {
        $scope.showNew = !$scope.showNew;
    }

    $scope.showFind = false;
    $scope.showFindFunc = function() {
        $scope.showFind = !$scope.showFind;
    }

});



/*
//transforme l'id du payeur en username
app.controller('covertIdCtrl', function ($scope,$http){
   $http({
      method:"GET",
      url:"json/users.json","json/depenses.json"
   }).then(function(response){
      $scope.name = response.data.records.username;
   });
});*/