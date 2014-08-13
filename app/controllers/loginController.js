app.controller("loginController", function($scope){
	$scope.page = {
		title:"Login", 
		body:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage"
	};
	$scope.user = {
		username : "",
		password : ""
	}
	$scope.loginSubmit = function(isValid){
		if(isValid){
			//valid
			alert(isValid);
		}else{
			//invalid
			//alert(isValid);
		}
	};
});