(function () {
	angular.module('Namecalulator', [])
	.controller('Namecalulatorcontroller', function($scope) {
		$scope.name="";
		$scope.totalvalue=0;

		$scope.displaynumeric = function(){

			var totalnamevalue=calculatenumeric($scope.name);
			$scope.totalvalue=totalnamevalue;
		};
		function calculatenumeric(string) {
			// body...
			var totalstringvalue=0;
			for(var i=0;i<string.length;i++)
			{

				totalstringvalue +=string.charCodeAt(i);
			}
			return totalstringvalue;
		}
		// body...
	});
	// body...
})();
