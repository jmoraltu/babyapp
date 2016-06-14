/**
 * Created by jmorales on 21/3/16.
 */
angular.module('WeekByWeekModule', ['WeeklyContentModel','WeeklyContentServiceModule'])

  //************** WeekByWeek Controller  ********************
  .controller('WeekByWeekController', function ($scope, weeklycontents, $location, $anchorScroll, $ionicScrollDelegate, $stateParams, WeeklyContentService, CRUDService, $ionicLoading, $cordovaGoogleAnalytics) {

    //$anchorScroll.yOffset = 300;

    $scope.data = {};

    var initView = function(){

      $ionicLoading.hide();
      //console.log(weeklyObj.title);
      //$scope.weeklyContent = weeklyObj;

      //$scope.weeklyContent = WeeklyContentService.getWeeklyContentByWeek(user.pregnancyWeeks);
      $scope.weeklycontents = weeklycontents;
    };


    var setupSlider = function(){

      console.log('inside setupSlider');

      $scope.data.sliderOptions = {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        initialSlide : weekNum,
        direction: 'horizontal',
        paginationType:'bullets',
        speed: 200,
        paginationHide: true
      };
      $scope.data.sliderDelegate = null;

      $scope.$watch('data.sliderDelegate', function(newEval, oldEval){

        console.log('sliderDelegate $watch');
        if(newEval != null){
          $scope.data.sliderDelegate.on('slideChangeEnd', function(){
            console.log($scope.data.currentPage);
            $scope.data.currentPage = $scope.data.sliderDelegate.activeIndex;
          });

          $scope.data.sliderDelegate.on('Tap', function(){
            console.log('tap tap tap');
            console.log($scope.data.sliderDelegate.activeIndex);
            //$scope.data.currentPage = $scope.data.sliderDelegate.activeIndex;
          });
        }
      })
    };

    $scope.scrollToAnchorWithinCurrentPage = function(anchor)
    {
      $location.hash(anchor);
      var handle = $ionicScrollDelegate.$getByHandle('content');
      handle.anchorScroll();
    };

    $scope.gotoAnchor = function(anchor) {
      var newHash = anchor;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash(anchor);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };

    $scope.$on('$ionicView.loaded', function(){
      console.log('onicView.loaded......WeekByWeekController.');
      $cordovaGoogleAnalytics.trackView('WeekByWeek Content Screen');

      initView();
    });

    var user = CRUDService.getObject('userProfile');
    //var weekNum = user.pregnancyWeeks - 4;
    var weekNum = $stateParams.id - 4;

    setupSlider();

    $scope.toggleItem = function(item) {
      if ($scope.isItemShown(item)) {
        $scope.shownItem = null;
      } else {
        $scope.shownItem = item;
      }
    };
    $scope.isItemShown = function(item) {
      return $scope.shownItem === item;
    };

  })
  .directive('backImage', function(){
    return function (scope, element, attrs){
      var url = attrs.backImage;
      var content = element.find('ion-content');
      content.css({
        'background': 'url('+ url +')',
        'background-size' : 'contain',
        'background-repeat': 'no-repeat',
        /*'background-attachment': 'fixed',*/
        'background-position': 'top',
      })
    }});
