'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('packages', {
        url: '/packages',
        template: '<packages></packages>'
      });
  });
