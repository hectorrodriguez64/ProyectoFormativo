'use strict';
(function(){

class ViewDocumentComponent {
  constructor(documentosService, $sce, $state, usuariosService, AuthService) {
    this.documentosService = documentosService;
    this.$sce = $sce;
    this.$state = $state;
    this.usuariosService = usuariosService;
    this.AuthService = AuthService;
    this.userShare = undefined;
  }

  $onInit(){
    console.log('Estamos en el modulo de ver documento');
  	this.documentosService.get({id: localStorage.getItem('documentToView')}).$promise
  	.then(res => {
  		this.document = res;
  		console.log(this.document);
  		if(this.document.format == "pdf"){
  			this.url = this.$sce.trustAsResourceUrl('../../../assets/documentos/'+this.document.file);
  		}else{
  			this.url = this.$sce.trustAsResourceUrl("http://docs.google.com/gview?url=http://192.168.0.27:9000/assets/documentos/"+this.file.name+"&embedded=true");
  			console.log(this.url);
  		}
  	})
  	.catch(err => {
  		console.log(err);
  	})
  }

  deleteFile(){
  	this.documentosService.delete(this.document).$promise
  	.then(res => {
  		console.log('Documento eliminado');
  		this.$state.go('documentos');
  	})
  	.catch(err => {
  		console.log('Err');
  	})
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

  shareDocument(user){

  	this.documentosService.compartirDocumento({idUsuarioPropietario: this.AuthService.idUsuario(), idUsuario: user.id, idDocumento: this.document.id})
  	.$promise.then(res =>{
  		console.log('Documento compartido');
  		$('#shareDocumentModal').modal('hide');
  	})
  }
}

angular.module('startUpApp')
  .component('viewDocument', {
    templateUrl: 'app/documentos/view-document/view-document.html',
    controller: ViewDocumentComponent,
    controllerAs: 'vm'
  });

})();
