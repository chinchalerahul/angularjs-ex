app.service("userService", function($http){
	/*var url = "https://api.mongolab.com/api/1/databases/angularjs-intro/collections/users?apiKey=terrPcifZzn01_ImGsFOIZ96SwvSXgN9";*/
	var url = "http://www.filltext.com/?rows=100&fname={firstName}&lname={lastName}&company={business}";
	this.userInfo = function(){
		var response = $http.get(url);
		return response;
	};

});