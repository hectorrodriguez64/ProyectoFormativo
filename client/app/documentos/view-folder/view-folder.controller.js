'use strict';
(function(){

class ViewFolderComponent {
  constructor(foldersService, categoryService, AuthService, Upload, API, documentosService, $state, usuariosService) {
    this.foldersService = foldersService;
    this.folder = undefined;
    this.documents= [];
    this.categoryService = categoryService;
    this.AuthService = AuthService;
    this.Upload = Upload;
    this.documentosService = documentosService;
    this.API = API;
    this.fileInfo = {file: undefined,idUser:undefined, idCategory:undefined};
    this.$state = $state;
    this.usuariosService = usuariosService;
  }

  $onInit(){
  	console.log('param ', localStorage.getItem('folderToOpen'));
  	this.getFolder();
  	this.getCategories();
  }

  openDocument(documentId){
    localStorage.setItem("documentToView", documentId);
      this.$state.go("view-document");
  }

  findUsers(query){
    console.log(query);
    if(query.length > 0){
      return this.usuariosService.query({email:query, idUsers: this.AuthService.idUsuario()}).$promise
      .then(res =>{
        return res;
      })
      .catch(err =>{
        return [];
      })
    }else{
      return [];
    }
  }

  

  getFolder(){
  	this.foldersService.get({id: localStorage.getItem('folderToOpen')}).$promise
  	.then(res =>{

  		this.folder = res;
      this.getDocuments(res.id);

  	})
  }

  compartirCarpeta(user){
    this.foldersService.compartirCarpeta({idUsuarioPropietario: this.AuthService.idUsuario(), idUsuario: user.id, idCarpeta: this.folder.id}).$promise
      .then(res => {
        console.log('La carpeta se ha compartido correctamente');
        alert('OK');
        $('#shareFolderModal').modal('hide');
      })
      .catch(err => {
        console.log("err ", err);
      })
  }

  getDocuments(folderId){
  	this.documentosService.findByFolder({folderId: folderId}).$promise
  	.then(res =>{

  		this.documents = res;
      console.log(this.documents);

  	})
  }

  getCategories(){
    this.categoryService.query().$promise
    .then(res =>{
      this.categories = res;
      console.log('categorias ',this.categories);
    })
  }

  uploadDocument(){
    if ( this.fileInfo.file ) {
      this.fileInfo["format"] = this.fileInfo.file.name.split('.').pop();
      this.fileInfo["name"] = this.fileInfo.file.name;
      this.fileInfo["weight"] = this.fileInfo.file.size;
      this.fileInfo["fileString"] = this.fileInfo.file.name;
      this.fileInfo["folio"] = 0;
      this.fileInfo["idUser"] = this.AuthService.idUsuario();
      this.fileInfo["idFolder"] = this.folder.id;
      console.log('info ',this.fileInfo);

      this.Upload.upload({
          url: this.API + '/api/upload/documents',
          data: this.fileInfo
      }).then((resp) => {
          console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
          console.log(resp);
          this.getDocuments(this.folder.id);
          $('#uploadFileModal').modal('hide');
          this.fileInfo = {file: undefined,idUser:undefined, idCategory:undefined};
          this.getMyDocuments();
      }, function(resp) {
          console.log('Error status: ' + resp.status);
      }, function(evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      });
    }

    
  }


  deleteFolder(){
    this.foldersService.remove({id:this.folder.id}).$promise
      .then(res => {
        $('#deleteFolderModal').modal('hide');
        this.$state.go('documentos');
      })
  }


}

angular.module('startUpApp')
  .component('viewFolder', {
    templateUrl: 'app/documentos/view-folder/view-folder.html',
    controller: ViewFolderComponent,
    controllerAs:'vm'
  });

})();
