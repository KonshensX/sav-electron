var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/posts', {
        controller: 'PostsController',
        templateUrl: 'partials/posts.html'
      })
      .when('/', {
        tempalteUrl: 'partials/index.html'
      })
      .otherwise({redirectTo: '/'})
})

app.controller ('searchController', function ($scope, $http, $interval) {

    $scope.loading = true

    $scope.values = $http({
        method: 'GET',
        url: 'http://localhost:8080/posts'
      }).then((response) => {
        setTimeout(function () {
          console.log(response.data)
          $scope.values = response.data
          $scope.loading = false
        }, 2000)
      })

    $scope.add = function () {
        $scope.values.push({
          name: $scope.person.name,
          age: $scope.person.age
         });
    }

    $scope.getData = function () {
      $http({
        method: 'GET',
        url: 'http:// localhost:8080'
      }).then((response) => {
        console.log(response.data)
        $scope.values = response.data
      })
    }
});
