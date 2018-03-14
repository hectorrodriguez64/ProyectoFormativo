'use strict';
function ciudadesService($resource,API) {
   return $resource(API + '/api/cities/:id',{
     id:'@id'
   },{
     update:{
       method:'PUT'
     },
     getCiudades:{
       method:'GET',
       url:API+"/api/cities/find",
       isArray: true

     }
   });
}
ciudadesService.$inject = ['$resource','API'];
angular.module('startUpApp')
  .factory('ciudadesService', ciudadesService);
