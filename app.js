(function () {
	angular.module('myfirstangularapp', [])
	.controller('myfirstcontroller', function($scope) {
		$scope.name="Deepak kapoor";
		$scope.sayhello = function(){

			return "hello deepak";
		};
		// body...
	});
	// body...
})();
