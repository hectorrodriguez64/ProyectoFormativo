'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('FAQ', {
        url: '/FAQ',
        template: '<faq></faq>'
      })
      .state('forums', {
        url: '/forums',
        template: '<forums></forums>'
      })
      .state('help', {
        url: '/help',
        template: '<help></help>'
      });
  });
