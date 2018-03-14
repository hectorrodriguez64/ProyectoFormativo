'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider

      .state('forbidden', {
        url: '/forbidden',
        template: '<forbidden></forbidden>'
      });
  });
