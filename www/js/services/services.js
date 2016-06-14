/**
 * Created by jmorales on 11/3/16.
 */
angular.module('starter.services', [])

  .service('pictureService', function(CRUDService) {
    var picturesList = [];

    console.log('.......pictureService.......');
    var addPicture = function(newPicture) {
        console.log('.......CRUDService.getObject.......');
        //console.log('Picture from object: ' + newPicture.uri);
        picturesList = CRUDService.getObject('picturesList');

        var isPictureListEmpty = $.isEmptyObject(picturesList);

        if(isPictureListEmpty){
            CRUDService.setObject('picturesList', picturesList);
            console.log('isPictureListEmpty');
        }
        else{
            console.log('isPictureListEmpty NOT');
        }
        /*
        if(isPictureListEmpty){
            console.log('.......isPictureListEmpty.......');
            picturesList.unshift(newPicture);
            CRUDService.setObject('tarotMessages', picturesList);
        }*/

        console.log('.......unshift....... ' + picturesList);
        console.log('newPicture.filepath: ' + newPicture.filepath);
        picturesList.unshift(newPicture);
        console.log('.......picturesList.......');
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
