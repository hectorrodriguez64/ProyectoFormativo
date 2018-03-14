'use strict';

(function(){

class LoginComponent {
  constructor(authService,usuariosService, $scope) {  
    this.recuperarPass = false;
    this.authService = authService;
    this.$scope = $scope;
    this.usuariosService = usuariosService;
     this.users = {
      email:"",
      password:""
    };
  }

  /*onInit(){
    $('#pwdModal').modal('hide');
  }*/

  login(){
    console.log('DATOS DE LOGIN ',this.user);
    this.authService.login(this.user);
  }

  recuperarContrasena(){
      if(this.emailSendPass != undefined && this.emailSendPass != ''){
        this.message = '';
        this.usuariosService.recoverPassword({email: this.emailSendPass}).$promise
          .then(res => {
            this.finalMessage = 'La nueva contraseña ha sido enviada a su correo';
            setInterval(() => {
              this.finalMessage = '';
              this.$scope.$apply();
            }, 3000);
          })
          .catch(err => {
            this.finalMessage = err.data;
          })
      }else{
        this.message = 'Debe ingresar su correo';
      }
  }
}

LoginComponent.$inject = ['AuthService','usuariosService', '$scope'];
angular.module('startUpApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent,
    controllerAs: 'vm'
  });
})();
