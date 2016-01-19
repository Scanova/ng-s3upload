angular.module('ngS3upload.config').
  constant('ngS3Config', {
    theme: 'bootstrap2',
    imgFormats: ['jpg', 'jpeg', 'png', 'gif','apng', 'svg', 'bmp', 'ico', 'bmp', 'dib']
  }).
  value('ngS3UploadConfig', {}).
  config(['$compileProvider', function($compileProvider){
    if (angular.isDefined($compileProvider.urlSanitizationWhitelist)) {
      $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|data):/);
    } else {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|data):/);
    }
  }]);
