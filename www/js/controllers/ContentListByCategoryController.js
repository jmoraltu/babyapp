/**
 * Created by jmorales on 15/3/16.
 */

angular.module('ContentListByCategoryModule', ['CategoryModel', 'ContentModel', 'ContentServiceModule'])

  //************** ContentList By Cayegory Controller  ********************
  .controller('ContentListByCategoryController', function ($scope, $rootScope, $stateParams, ContentService, $cordovaGoogleAnalytics) {

    var initView = function(categoryId){


      ContentService.getContentArticles(categoryId).then(function(){
        $scope.contentArticlesList = ContentService.contentArticles;
      },function(error){
        console.log('error on CategoryLisController ' +error.message.toString());
        $scope.contentArticlesList = [];
      });

    };

    $scope.$on('$ionicView.loaded', function(){
      console.log('onicView.loaded ContentDetailModule.......');
      var categoryId = $stateParams.id;
      console.log('categoryId: ' + categoryId);
      if($rootScope.isMobile){
        $cordovaGoogleAnalytics.trackView('ContentListByCategory Screen');
      }
      initView(categoryId);
    });
  })
