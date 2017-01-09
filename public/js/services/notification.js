angular.module('notification', [])

// super simple service
// each function returns a promise object
	.factory('notification', ['$http',function($http) {
		return {
		get : function() {
			return $http.get('/api/notification');
		}
	}
}]);