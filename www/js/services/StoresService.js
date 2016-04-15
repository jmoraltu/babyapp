/**
 * Created by jmorales on 1/4/16.
 */

angular.module('StoresServiceModule', ['StoreModel'])

  .factory('StoresService', function($http, $q, Store) {
    var storesService = {};

    storesService.stores = [];

    storesService.getStores = function () {
      var deferred = $q.defer();
      if (storesService.stores.length > 0) {
        deferred.resolve(storesService.stores);
      } else {
          $http.get('url', {}).then(function (response) {
          console.log('Trying to get data from url....');
          storesService.stores = Store.build(response.data)
          for (var i = 0; i < response.data.length; i++) {
            storesService.stores.push(Store.build(response.data[i]));
          }
          deferred.resolve(storesService.stores);
        }, function (error) {
          console.log('error on URL or internet conn:' + error.toString());
          storesService.stores = getStoresFromLocal();
          console.log('STORES ARRAY SIZE:' + storesService.stores.length);
          deferred.resolve(storesService.stores);
        });
      }
      return deferred.promise;
    };


    storesService.getStoreById = function(storeId){
      for(var i= 0; storesService.stores.length ; i++){
        if(storesService.stores[i].id == storeId){
          return storesService.stores[i];
        }
      }
    };


    var getStoresFromLocal = function(){

      var store1 = Store.build({"id":"1", "name":"Interflora", "description":"Envía flores online con la calidad Interflora", "storeUrl":"http://www.interflora.es", "thumbnail":"./img/stores/interflora.jpg", "image":"./img/stores/interflora.jpg"});

      var store2 = Store.build({"id":"2", "name":"Dexeus", "description":"Dedicados a mejorar y proteger la salud de la mujer", "storeUrl":"http://www.dexeus.com", "thumbnail":"./img/stores/dexeus-icon.png", "image":"./img/stores/dexeus-icon.png"});

      var store3 = Store.build({"id":"3", "name":"FIATC", "description":"Expertos en seguros. Llevamos más de ochenta años asegurando a las personas y su patrimonio.", "storeUrl":"https://www.fiatc.es/", "thumbnail":"./img/stores/fiatc.png", "image":"./img/stores/fiatc.png"});

      var store4 = Store.build({"id":"4", "name":"Babies R Us", "description": "Ropa y accesorios para niños y bebés, ropa para los más pequeños", "storeUrl":"http://www.babiesrus.com/", "thumbnail":"./img/stores/babiesrus-icon.jpg", "image":"./img/stores/babiesrus-icon.jpg"});

      var stores = [store1, store2, store3, store4];

      return stores;
    };

    return storesService;
  });
