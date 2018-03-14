'use strict';
function countriesService($resource,API) {
   return $resource(API + '/api/countries/:id',{
     id:'@id'
   },{
     update:{
       method:'PUT'
     }
   });
}
countriesService.$inject = ['$resource','API'];
angular.module('startUpApp')
  .factory('countriesService', countriesService);
