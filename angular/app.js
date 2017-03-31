var app = angular.module('myApp', []);

app.controller ('searchController', function ($scope) {

    $scope.values = [
      {
        name: "mohammed",
        age: 11
      },
      {
        name: "yasser",
        age: 32
      },
      {
        name: "Sandoukhan",
        age: 22
      }
    ];

    $scope.add = function () {
        $scope.values.push({
          name: $scope.person.name,
          age: $scope.person.age
         });
    }
});
