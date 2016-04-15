/**
 * Created by jmorales on 11/3/16.
 */
angular.module('starter.services', [])

  .service('pictureService', function(CRUDService) {
    var picturesList = [];

    console.log('.......pictureService.......');
    var addPicture = function(newPicture) {
        console.log('.......addPicture.......');
        console.log('Picture from object: ' + newPicture.uri);
        picturesList = CRUDService.getObject('picturesList');
        picturesList.unshift(newPicture);
        CRUDService.setObject('picturesList', picturesList);
    };

    var getPictures = function(){
        picturesList = CRUDService.getObject('picturesList');
        return picturesList;
    };
    return {
      addPicture: addPicture,
      getPictures: getPictures
    };
  })

  .factory('CRUDService', ['$window', function($window) {
    return {
      set: function(key, value) {
        $window.localStorage[key] = value;
      },
      get: function(key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },
      setObject: function(key, value) {
        $window.localStorage[key] = JSON.stringify(value);
      },
      getObject: function(key) {
        return JSON.parse($window.localStorage[key] || '{}');
      }
    }
  }]);
