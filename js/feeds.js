// ngResource necessary for interacting with RESTful server-side data resources
// angular-resource.js must be added to html
// TODO: Maybe remove ngSanitize? May not be needed
var app = angular.module('PersonalSite', ['ngResource', 'ngSanitize']);


app.controller('TwitterCtrl', function($scope, $resource, $http) {
	$http.get("twitter.php").then(function(response) {
		$scope.Tweets = response.data;
	});

});

	
app.controller('InstagramCtrl', function($scope, $resource, $http) {
	$http.get("instagram.php").then(function(response) {
		$scope.Pictures = response.data.entry_data.ProfilePage[0].user.media.nodes;
	});
});
	
	
app.controller('BibleCtrl', function($scope, $resource, $http) {
	$http.get("bible.php").then(function(response) {
		$scope.Scripture = response.data.votd;
	});
});

app.controller('PocketCtrl', function($scope, $resource, $http) {
	$http.get("pocket.php").then(function(response) {
		$scope.Articles = response.data.responseData.feed.entries;
	});
});

app.controller('MediumCtrl', function($scope, $resource, $http) {
	$http.get("medium.php").then(function(response) {
		$scope.Publications = response.data.responseData.feed.entries;
	});
});