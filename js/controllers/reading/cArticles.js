/**
 * Created by guoyinfeng on 4/2/15.
 */
(function () {
  'use strict';
  function ctrlArticles ($scope, $http) {
    $scope.initialization = function () {
      $http.get('json/reading/articles.json')
        .success(function (data, status, headers, config) {
          $scope.articles = data;
          console.log('$scope.articles', $scope.articles);
        })
        .error(function (data, status, headers, config) {
        });
    };
  }

  angular.module('websites').controller('CtrlArticles', ['$scope', '$http', ctrlArticles]);
}());