'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ciudades', {
        url: '/ciudades',
        template: '<ciudades></ciudades>'
      });
  });
