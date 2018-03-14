'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        template: '<about></about>'
      });
  });
