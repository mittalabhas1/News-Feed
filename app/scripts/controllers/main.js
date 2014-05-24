'use strict';

angular.module('firebaseProjectApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    
    var newsFeed = new Firebase("https://news-feed.firebaseio.com");
	$scope.newslist = $firebase(newsFeed);
    $scope.temps = {};

    $scope.createNews = function(){
    	var newNews = {
    		'username': $scope.temps.name,
    		'feed': $scope.temps.newsText,
    		'comments': []
    	};

    	return newNews;
    }

    $scope.addNewsToNewsList = function(news){
		newsFeed.push(news);
    }

    $scope.addNews = function() {
    	var newNews = $scope.createNews();
    	$scope.addNewsToNewsList(newNews);
    	$scope.temps.newsText = '';
    }

    $scope.addComment = function(news, newsID) {
    	console.log(news);
    	newsFeed.newsID.comments.push({
    		'username': $scope.temps.name,
    		'comment': news.comments.newComment
    	});
    }

  });
