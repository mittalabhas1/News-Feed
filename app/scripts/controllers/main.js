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
    	};

    	return newNews;
    }

    $scope.addNewsToNewsList = function(news){
    	$scope.newslist.$add(news);
    }

    $scope.addNews = function() {
    	var newNews = $scope.createNews();
    	$scope.addNewsToNewsList(newNews);
    	$scope.temps.newsText = '';
    }

    $scope.addComment = function(news, newsId) {
    	var comment = {
    		'username': $scope.temps.name,
    		'comment': news.newComment
    	};
    	if(typeof news.comments == 'undefined')
    		news.comments = [];

    	news.newComment = '';
    	delete news.newComment;

		news.comments.push(comment);
		$scope.newslist.$save(newsId);
    }

    $scope.likePost = function(news, newsId) {
    	var like = {
    		'username': $scope.temps.name
    	};
    	if(typeof news.likes == 'undefined')
    		news.likes = [];

    	news.likes.push(like);
    	$scope.newslist.$save(newsId);
    }

    $scope.toogleComments = function(news){
    	news.showComments = !news.showComments;
    }

  });
