'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('servicios', {
        url: '/servicios',
        template: '<servicios></servicios>'
      });
  });
