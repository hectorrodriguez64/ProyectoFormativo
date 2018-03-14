'use strict';
function companyService($resource,API){
    return $resource(API + '/api/company/:id',{
      id:'@id'
    },{
      update:{
        method:'PUT'
      }
      


    });
}
companyService.$inject = ['$resource','API'];
angular.module('startUpApp')
  .factory('companyService',companyService);
