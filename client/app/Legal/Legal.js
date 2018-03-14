'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('privacy', {
        url: '/privacy',
        template: '<privacy></privacy>'
      })
      .state('terms-service', {
        url: '/terms-service',
        template: '<terms-service></terms-service>'
      })
      .state('terms-use', {
        url: '/terms-use',
        template: '<terms-use></terms-use>'
      });
  });
