app.controller("homeController", function($scope, userService){
	$scope.page = {
		title:"Welcome to Home", 
		body:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	};
	
	//get data from userService
	userService.userInfo().then(function(response){
		//success
		$scope.userDetails = response.data;		
	}, function(reason){
		//failure
		alert("Error : "+reason.status);
	});
});
