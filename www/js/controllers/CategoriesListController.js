/**
 * Created by jmorales on 13/3/16.
 */

angular.module('CategoryListModule', ['CategoryModel','CategoryServiceModule'])

//************** Categories Controller  ********************
  .controller('CategoriesListController', function ($scope, Category, CategoryService, categories, $ionicPlatform, $cordovaGoogleAnalytics) {


  //$ionicPlatform.ready(function () {
     //console.log('cordovaGoogleAnalytics.trackView - CategoriesList');
     //$cordovaGoogleAnalytics.trackView('CategoriesList Screen');
  //});


  $scope.toggleGroup = function(category) {
    console.log('category id: ' + category.id + ' category name: ' + category.name);

    showSubcategories(category.id);

    if ($scope.isGroupShown(category)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = category;
    }
  };

  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

  var initView = function(){

    $scope.categorieslist = categories;

    /*
    CategoryService.getCategories(0).then(function(){
      $scope.categorieslist = CategoryService.categories;
    },function(error){
      console.log('error on CategoryLisController ' +error.message.toString());
      $scope.categorieslist = [];
    });*/
  };

  var showSubcategories = function(categoryId){
    console.log('inside showSubcategories...' + categoryId);

    CategoryService.getSubCategories(categoryId).then(function(){
      $scope.subcategorieslist = CategoryService.subcategories;
      //console.log('OK promise: ' + $scope.subcategorieslist.length);
    },function(error){
      console.log('error on CategoryLisController ' + error.message.toString());
      $scope.subcategorieslist = [];
    });

    //$scope.$digest();

  };

  $scope.$on('$ionicView.loaded', function(){
    console.log('ionicView.loaded.......');
    $cordovaGoogleAnalytics.trackView('CategoriesList Screen');
    initView();
  });
})

.directive('backImage', function(){
  return function (scope, element, attrs){
    var url = attrs.backImage;
    var content = element.find('a');
    content.css({
      'background': 'url('+ url +')',
      'background-size' : 'cover'
    })
  }
});
