'use strict';
(function(){

class DocumentosComponent {
  constructor(documentosService, $state, Upload, API, AuthService, foldersService, categoryService, $timeout) {
    this.documentosService = documentosService;
    this.$state = $state;
    this.Upload = Upload;
    this.API = API;
    this.AuthService = AuthService;
    this.myDocuments = undefined;
    this.mySharedDocuments = undefined;
    this.myFolders = undefined;
    this.mySharedFolders = undefined;
    this.foldersService = foldersService;
    this.categoryService = categoryService;
    this.categories = undefined;
    this.uploadStatus = null;
    this.$timeout = $timeout;
    this.fileInfo = {file: undefined,idUser:undefined, idCategory:undefined};
    this.newFolder = {
      name:undefined,
      usersId:{
        id:undefined
      }
    };

  }

  $onInit(){
    console.log('cargo asdfs');
    this.getMyDocuments();
    this.getMySharedDocuments();
    this.getMyFolders();
    this.getMySharedFolders();
    this.getCategories();
  }
  success(desserts) {
    this.desserts = this.desserts;
  }

  getCategories(){
    this.categoryService.query().$promise
    .then(res =>{
      this.categories = res;
      console.log('categorias ',this.categories);
    })
  }

  create(from) {
      this.Upload.upload({
          url: this.API + '/api/upload_documents/documents',
          data: {
            file: this.file,
            'idDocuments':1
            /*'idUsuario': this.AuthService.idUsuario();*/
          }
      }).then(function(resp) {
          console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
          console.log('OK');
      }, function(resp) {
          console.log('Error status: ' + resp.status);
      }, function(evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      });
  }

  getMyDocuments(){
    this.documentosService.traerMisDocumentos({idUsuario: this.AuthService.idUsuario()}).$promise
    .then(response =>{
      this.myDocuments = response;
      console.log('Mis documentos subidos ', this.myDocuments);
    })
    .catch(err =>{
      console.log(err);
    })
  }

  getMySharedDocuments(){
    this.documentosService.traerMisDocumentosCompartidos({idUsuario: this.AuthService.idUsuario()}).$promise
    .then(response =>{
      this.mySharedDocuments = response;
      console.log('Mis documentos compartidos ', this.myDocuments);
    })
    .catch(err =>{
      console.log(err);
    })
  }

  getMyFolders(){
    this.foldersService.getMyFolders({idUsuario: this.AuthService.idUsuario()}).$promise
    .then(response =>{
      this.myFolders = response;
      console.log('Mis carpetas creadas ', this.myFolders)
    })
    .catch(err => {
      console.log(err);
    })
  }

  getMySharedFolders(){
    this.foldersService.getMySharedFolders({idUser: this.AuthService.idUsuario()}).$promise
    .then(response =>{
      this.mySharedFolders = response;
      console.log('Mis carpetas compartidas ', this.mySharedFolders)
    })
    .catch(err => {
      console.log(err);
    })
  }

  createNewFolder(){
    if (this.newFolder.name) {
      this.newFolder.usersId.id = this.AuthService.idUsuario();
      this.foldersService.save(this.newFolder).$promise
      .then(response =>{
        console.log('se creo la carpeta');
        $('#createFolderModal').modal('hide');
        this.newFolder.name = undefined;
        this.getMyFolders();
      })
    }

  }

  uploadDocument(){
    if ( this.fileInfo.file ) {
      this.fileInfo["format"] = this.fileInfo.file.name.split('.').pop();
      this.fileInfo["name"] = this.fileInfo.file.name;
      this.fileInfo["weight"] = this.fileInfo.file.size;
      this.fileInfo["fileString"] = this.fileInfo.file.name;
      this.fileInfo["folio"] = 0;
      this.fileInfo["idUser"] = this.AuthService.idUsuario();
      console.log('info ',this.fileInfo);

      this.Upload.upload({
          url: this.API + '/api/upload/documents',
          data: this.fileInfo
      }).then((resp) => {
          console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
          console.log(resp);
          this.uploadStatus = true;
          this.$timeout(() => {
            $('#uploadFileModal').modal('hide');
          }, 3000);

          this.fileInfo = {file: undefined,idUser:undefined, idCategory:undefined};
          this.getMyDocuments();


      }, (resp) => {
          console.log('Error status: ' + resp.status);
          this.uploadStatus = false;
          console.log('Error al subir ', this.uploadStatus);
      }, function(evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      });
    }

  }

  openDocument(documentId){
    localStorage.setItem("documentToView", documentId);
      this.$state.go("view-document");
  }

  openFolder(folderId){
    localStorage.setItem("folderToOpen", folderId);
    this.$state.go("view-folder");
  }


}

angular.module('startUpApp')
  .component('documentos', {
    templateUrl: 'app/documentos/documentos.html',
    controller: DocumentosComponent,
    controllerAs: 'vm'
  });

})();
