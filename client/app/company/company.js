'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('company-list', {
        url: '/company-list',
        template: '<company-list></company-list>'
      })
      .state('company-create', {
        url: '/company-create',
        template: '<company-create></company-create>'
      })
      .state('company-update', {
        url: '/company-update',
        template: '<company-update></company-update>'
      });
  });
