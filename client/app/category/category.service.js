'use strict';
function categoryService($resource,API) {
   return $resource(API + '/api/category/:id',{
     id:'@id'
   },{
     update:{
       method:'PUT'
     }
   });
}
angular.module('startUpApp')
  .factory('categoryService', categoryService);
