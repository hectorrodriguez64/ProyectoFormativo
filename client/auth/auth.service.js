'use strict';

AuthService.$inject = ['$auth', '$state', 'localStorageService','toastr'];
angular.module("startUpApp")
  .factory('AuthService', AuthService);


function AuthService($auth, $state,localStorageService,toastr) {
  var Auth = {
    login: login,
    isAuthenticated: isAuthenticated,
    logout: logout,
    isAdmin: isAdmin,
    isUser: isUser,
    isEmpl: isEmpl,
    datosUsuario: datosUsuario,
    idUsuario: idUsuario,
    idDocuments: idDocuments,
    getRoles: getRoles,
    getImagePerfil: getImagePerfil,
    getDocuments: getDocuments

  };

  function login(user, collback) {
    $auth.login(user)
      .then(response => {
        console.log("Acaba de iniciar seccion", response);
        toastr.success('Acaba de iniciar correctamente',{
  progressBar: true,
  closeButton: true
});

        $state.go('dashboard-user');
      })
      .catch(err => {
        toastr.error('Error of login',{
      progressBar: true,
      closeButton: true

    });
        console.log("Error de login vuelvalo a intentar", err);
        $state.go('login');
      })
  }

  function datosUsuario() {
    if (Auth.isAuthenticated()) {

      return $auth.getPayload().users;
    }
  }

  function idUsuario() {
    if (Auth.isAuthenticated()) {
      return $auth.getPayload().sub;
    } else {
      return null;
    }
  }

  function idDocuments() {
    if (Auth.isAuthenticated()) {
      return $auth.getPayload().sub;
    } else {
      return null;
    }
  }

  function getImagePerfil(){
  if($auth.isAuthenticated()){
    return  $auth.getPayload().avatar;
  }
}

function getDocuments(){
if($auth.isAuthenticated()){
  return  $auth.getPayload().file;
}
}
  function logout() {
    if (Auth.isAuthenticated()) {
      $auth.logout()
        .then(response => {
          $state.go("main");
          console.log("Gracias por usar nuestros servicios");
        })
    }
  }


  function isAuthenticated() {
    if ($auth.isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }

  function isAdmin() {
    if (Auth.isAuthenticated()) {
      if ($auth.getPayload().roles.indexOf("ADMIN") !== -1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  function isUser() {
    if (Auth.isAuthenticated()) {
      if ($auth.getPayload().roles.indexOf("USER") !== -1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  function isEmpl() {
    if (Auth.isAuthenticated()) {
      if ($auth.getPayload().roles.indexOf("EMPL") !== -1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  function getRoles() {
    if (Auth.isAuthenticated()) {
      return $auth.getPayload().roles;
    } else {
      return false;
    }
  }

  return Auth;
}
