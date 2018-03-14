'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tipos-documentos', {
        url: '/tipos-documentos',
        template: '<tipos-documentos></tipos-documentos>'
      });
  });
