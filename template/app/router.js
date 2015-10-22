'use strict';

angular.module('applicationApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve: {
        	controller : function($ocLazyLoad){
        		return $ocLazyLoad.load("app/main/main.controller.js");
        	}	
        } 
      })
      .state('login', {
      	url: '/login',
      	templateUrl: 'app/account/login/login.html',
      	controller: 'LoginCtrl',
        resolve: {
        	controller : function($ocLazyLoad){
        		return $ocLazyLoad.load("app/account/login/login.controller.js");
        	}	
        } 
      })
  });