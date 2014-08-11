app.controller("activeMenuController", function($scope, $state){
	
	$scope.isActive = function(stateName){
		if($state.current.name == stateName){
			return true;
		}
	}
});