'use strict';
function departamentsService($resource,API) {
   return $resource(API + '/api/departaments/:id',{
     id:'@id'
   },{
     update:{
       method:'PUT'
     },
     getdepartaments:{
       method:'GET',
       url:API+"/api/departaments/find",
       isArray: true

     }

   });
}
departamentsService.$inject = ['$resource','API'];
angular.module('startUpApp')
  .factory('departamentsService', departamentsService);
