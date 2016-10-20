var app = angular.module('MyComptaApp',[]);
app.controller('usersCtrl', function ($scope,$http){
   $http({
      method:"GET",
      url:"json/users.json"
   }).then(function(response){
      $scope.users = response.data.records;
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

//afiche la modale filtrer
app.controller("filtrerCtr", function($scope){
    $scope.showContent = true;    
});

//transforme l'id du payeur en username
app.controller('covertIdCtrl', function ($scope,$http){
   $http({
      method:"GET",
      url:"json/users.json"
   }).then(function(response){
      $scope.name = response.data.records.username;
   });
});