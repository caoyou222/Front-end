var myApp = angular.module('myApp',[]);

myApp.controller('myController', function ($scope) {
		$scope.dorms=[{name: 'FloMo',capacity: 470},
                      {name: 'Wilbur', capacity: 700},
					  {name: 'Stern', capacity: 600},
					  {name: 'Lag', capacity: 400}];
	});


myApp.controller('uciController', function ($scope) {
		$scope.dorms=[{name: 'Middle Earth',capacity: 1500},
                      {name: 'Mesa Court', capacity: 1200}];
	});
