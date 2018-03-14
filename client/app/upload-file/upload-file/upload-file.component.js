'use strict';

(function() {

    class MainController {

        constructor($q, $state, Upload, API) {
            this.$q = $q;
            this.$state = $state;
            this.Upload = Upload;
            this.API = API;
        }

        $onInit() {

        }

        create(from) {
            this.Upload.upload({
                url: this.API + '/api/upload',
                data: {
                  file: this.file,
                  'idUser':4
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

    }

    angular.module('startUpApp')
        .component('uploadFile', {
            templateUrl: 'app/upload-file/upload-file/upload-file.html',
            controller: MainController,
            controllerAs: 'vm'
        });

})();
