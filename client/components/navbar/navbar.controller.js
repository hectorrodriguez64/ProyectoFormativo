'use strict';

class NavbarController {
  constructor(AuthService){
		  this.AuthService = AuthService;
		  this.isCollapsed = true;
  }
  $onInit(){
    if (true) {
      this.imgPerfil = this.AuthService.getImagePerfil();
      console.log("IMG Perfil ",this.imgPerfil);
    }
  }
  ocultarCollapse(){
   $('.navbar-collapse').collapse('hide');
                }

}

NavbarController.$inject = ['AuthService']
angular.module('startUpApp')
  .component('navbar', {
  	templateUrl: 'components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'vm'
  });
