angular.module('StoreDetailModule', ['StoreModel'])

  //************** Store Detail Controller  ********************
  .controller('StoreDetailController', function ($scope, $rootScope, $stateParams, storeObj, $cordovaGoogleAnalytics) {
    var initView = function(storeId){
      console.log('inside initView...');
      //$scope.article = articleObj;
      $scope.store = storeObj;

    };

    $scope.openStoreSite = function(storeUrl){
     console.log("STORE_URL:" +  storeUrl);
     window.open(storeUrl, '_system');
    };

    $scope.$on('$ionicView.loaded', function(){
      console.log('onicView.loaded......StoreDetailController.');
      var storeId = $stateParams.id;
      if($rootScope.isMobile){
        $cordovaGoogleAnalytics.trackView('StoreDetail Screen');
      }
      initView(storeId);
    });
  })
