'use strict';
  function documentosService($resource,API){
      return $resource(API + '/api/documents/:id',{
        id:'@id'
      },{
        update:{
          method:'PUT'
        },
        traerMisDocumentos:{
          method:'GET',
          url:API + '/api/documents/traerMisDocumentos',
          isArray: true
        },
        traerMisDocumentosCompartidos:{
          method:'GET',
          url:API + '/api/documents/traerMisDocumentosCompartidos',
          isArray: true
        },
        compartirDocumento:{
          method:'POST',
          url:API + '/api/documents/compartirDocumento',
          params:{idUsuarioPropietario: "@idUsuarioPropietario", idUsuario: "@idUsuario", idDocumento: "@idDocumento"}
        },
        findByFolder:{
          method:'GET',
          url:API + '/api/documents/findByFolder',
          isArray: true,
          params:{folderId: "@folderId"}
        }
      });
  }
  documentosService.$inject = ['$resource','API'];
  angular.module('startUpApp')
    .factory('documentosService', documentosService);


