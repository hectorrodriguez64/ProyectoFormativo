'use strict';
function usuariosService($resource,API){
  return $resource(API + '/api/users/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    },
    recoverPassword:{
			url:API+'/api/users/recuperarContrasena',
			method:'POST',
			params:{
				email:'@email'
			}
		}
  });
}
usuariosService.$inject = ['$resource','API'];
angular.module('startUpApp')
.factory('usuariosService',usuariosService);
