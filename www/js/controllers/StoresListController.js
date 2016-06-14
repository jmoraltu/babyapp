/**
 * Created by jmorales on 1/4/16.
 */

angular.module('StoresListModule', ['StoreModel','StoresServiceModule'])

  //************** Stores Controller  ********************
  .controller('StoresListController', function ($scope, Store, StoresService, $ionicPlatform, $cordovaGoogleAnalytics) {

    var initView = function(){
    //$scope.storeslist = StoresService.getStores();


    StoresService.getStores().then(function(){
        $scope.storeslist = StoresService.stores;
        console.log('StoresListModule.length.......' + $scope.storeslist.length);
    },function(error){
      console.log('error on CategoryLisController ' + error.message.toString());
    });


    };

    $scope.$on('$ionicView.loaded', function(){
      $cordovaGoogleAnalytics.trackView('StoresList Screen');
      console.log('StoresListModule.loaded.......');
      initView();
    });
  })
