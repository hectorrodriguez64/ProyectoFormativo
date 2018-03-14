'use strict';

angular.module('startUpApp', [
  'startUpApp.constants',
   'ngCookies',
   'ngResource',
   'ngSanitize',
   'ui.router',
   'ui.bootstrap',
   'satellizer',
   'ngMessages',
   'ngMaterial',
   'ngAria',
   'ngAnimate',
   'LocalStorageModule',
   'ngFileSaver',
   'ngFileUpload',
   'md.data.table',
   'toastr',
   'pdf'
  ])

   .constant('API','http://localhost:8080/BAKEND_SGEDI')

  /*
 +*  Estructura para la configuración de satellizer
 +*/
 .config(function(API, $authProvider){
    $authProvider.loginUrl = API + '/api/auth/login';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'startUpApp';
  })

  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/Not-Found');

    $locationProvider.html5Mode(true);

      })

    .config(function(localStorageServiceProvider){
		localStorageServiceProvider
		.setPrefix('LSstartUpApp')
		.setStorageType('localStorage');

  })
