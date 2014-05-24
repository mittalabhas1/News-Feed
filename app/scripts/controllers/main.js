'use strict';

angular.module('firebaseProjectApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    
    var newsFeed = new Firebase("https://news-feed.firebaseio.com");
	$scope.newslist = $firebase(newsFeed);
    $scope.temps = {};

    $scope.createNews = function(){
    	var newNews = {
    		'name': $scope.temps.name,
    		'text': $scope.temps.newsText
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

  });
