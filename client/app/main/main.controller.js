'use strict';

(function() {

  class MainController {

    constructor($http) {
      this.$http = $http;
      this.awesomeThings = [];
    }

    $onInit(){
      $('.Iconup').click(function(){
        $('body,html').animate({
          scrollTop:'0px'
        },300);
      });
      $(window).scroll(function(){
        if($(this).scrollTop()>0){
          $('.Iconup').slideDown(300);

        }else{
          $('.Iconup').slideDown(300);
        }
      });
    }
      formsubmit(){
      this.el;
      this.error = Math.random() > 0.5;
      if(this.error) {
        this.validaColor = "has-success";
        this.validaColorDiv = ["form-control-feedback", "glyphicon", "glyphicon-ok"];
        this.el = "<label class='control-label' for='inputSuccess2'> Registro exitoso</label>";
      }else {
        this.validaColor = "has-error";
        this.validaColorDiv = ["form-control-feedback", "glyphicon", "glyphicon-remove"];
        this.el = "<label class='control-label' for='inputSuccess2'> El Mensaje No se pudo Enviar</label>";
      }
    }
  }

  angular.module('startUpApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'vm'
    });
})();
