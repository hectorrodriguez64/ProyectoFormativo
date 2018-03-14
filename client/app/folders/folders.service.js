'use strict';
function foldersService($resource,API) {
   return $resource(API + '/api/folders/:id',{
     id:'@id'
   },{
     update:{
       method:'PUT'
     },
     getMyFolders:{
      method:'GET',
      url: API + '/api/folders/getMyFolders',
      isArray: true
     },
     getMySharedFolders:{
      method:'GET',
      url: API + '/api/folders/getMySharedFolders',
      isArray: true
     },
     compartirCarpeta:{
      method:'POST',
          url:API + '/api/folders/compartirCarpeta',
          params:{idUsuarioPropietario: "@idUsuarioPropietario", idUsuario: "@idUsuario", idCarpeta: "@idCarpeta"}
     }
   });
}
angular.module('startUpApp')
  .factory('foldersService', foldersService);
