angular.module('news', [])

// super simple service
// each function returns a promise object
	.factory('news', ['$http',function($http) {
		return {
		get : function() {
			return $http.get('/api/news');
		}
	}
}]);