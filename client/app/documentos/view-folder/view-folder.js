'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('view-folder', {
        url: '/view-folder',
        template: '<view-folder></view-folder>',
        parent:'dashboard-user'
      });
  });
