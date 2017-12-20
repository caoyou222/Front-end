var myApp = angular.module('myApp',[]);

angular.
  module('myApp').
	component('dormList',{
		template:
			'<ul>'
				+ '<li ng-repeat="dorm in $ctrl.dorms">{{dorm}}</li>'
			+ '</ul>',		
		controller: function myController() {
			this.dorms = ['FloMo','Wilbur','Stern','Lag'];
		}
	});
		