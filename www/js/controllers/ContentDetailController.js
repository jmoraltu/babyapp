/**
 * Created by jmorales on 14/3/16.
 */
angular.module('ContentDetailModule', ['ContentModel'])

  //************** Content Detail Controller  ********************
  .controller('ContentDetailController', function ($scope, $rootScope, $stateParams, articleObj,$cordovaGoogleAnalytics) {
    var initView = function(categoryId){
      console.log('inside initView...');


      $scope.article = articleObj;

    };

    $scope.$on('$ionicView.loaded', function(){
      console.log('onicView.loaded......ContentDetailController.');
      var categoryId = $stateParams.id;
      if($rootScope.isMobile){
        $cordovaGoogleAnalytics.trackView('ContentDetail Screen');
      }
      initView(categoryId);
    });
  })
