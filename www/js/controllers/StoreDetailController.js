angular.module('StoreDetailModule', ['StoreModel'])

  //************** Store Detail Controller  ********************
  .controller('StoreDetailController', function ($scope, $stateParams, storeObj) {
    var initView = function(storeId){
      console.log('inside initView...');
      //$scope.article = articleObj;
      $scope.store = storeObj;

    };

    $scope.$on('$ionicView.loaded', function(){
      console.log('onicView.loaded......StoreDetailController.');
      var storeId = $stateParams.id;
      initView(storeId);
    });
  })
