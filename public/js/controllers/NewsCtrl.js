angular.module('NewsCtrl', []).controller('NewsController', ['$scope', '$location', '$http', '$window', 'news', function($scope, $location, $http, $window, news, $news) {


	var news_items = news.get().
  success(function(data, status, headers, config) {
    $scope.news_items = data;

  });
	

}]);
