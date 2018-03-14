'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('documentos-update', {
        url: '/documentos-update',
        template: '<documentos-update></documentos-update>'
      });
  });
