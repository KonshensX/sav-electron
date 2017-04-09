var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'PostController',
        templateUrl: 'views/posts.html'
      })
      .when('/posts', {
        controller: 'PostController',
        template: '<h1>Work u goddamn piece of code</h1>'
      })
      .when('/addPost', {
        tempalteUrl: 'views/addPost.html'
      })
      .otherwise({redirectTo: '/'})
});




app.controller ('PostController', function ($scope, $http, $interval) {

    $scope.loading = true;

    $scope.posts = [];

    $scope.getposts = function () {

        $http({
            method: 'GET',
            url: 'http://localhost:2020/posts'
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch(function (erro) {
            console.error(erro);
        });

    }

});
