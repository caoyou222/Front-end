var myApp = angular.module('myApp',[]);

myApp.controller('myController',function($scope) {
			$scope.dorms=[{name: 'FloMo',capacity: 470},
						  {name: 'Wilbur', capacity: 700},
						  {name: 'Stern', capacity: 600},
						  {name: 'Lag', capacity: 400}];
	});