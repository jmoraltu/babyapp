/**
 * Created by jmorales on 16/3/16.
 */
angular.module('DashboardModule', ['WeeklyContentModel','WeeklyContentServiceModule'])

  //************** Dashboard Controller  ********************
  .controller('DashboardController', function ($scope, $rootScope, $state, $location, $ionicPlatform, weeklycontents, CRUDService, userObj, $ionicModal, $ionicLoading, $ionicHistory, $cordovaGoogleAnalytics) {

    $ionicPlatform.ready(function () {
         console.log('cordovaGoogleAnalytics.trackView - Home Screen');
         $cordovaGoogleAnalytics.trackView('Home Screen');
    });


    $ionicModal.fromTemplateUrl('templates/updatestatus.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(statusmodal) {
        $scope.statusmodal = statusmodal;
    });
    //DashboardController

    $scope.openStatusModal = function() {
        console.log("openStatusModal.....");
        $scope.statusmodal.show();
    };

    $scope.userstatuslist = ['Estoy contenta',
                             'Me siento plena',
                             'Amo a mi bebe',
                             'Ya ha nacido mi bebé'];

    $scope.statusData = {'current':'Estoy contenta'};

    $scope.closeStatusModal = function(item) {
        //$scope.userstatus = "Has cambiado el estado...";

        console.log("closeStatusModal.....");
        //console.log("Nuevo estado:" + $scope.status.current);
        console.log("Nuevo estado:" + item);
        $scope.userstatus = item;
        //console.log("Nuevo estado:" + status.close);
        $scope.statusmodal.hide();
    };


    $scope.data = {};
    //$scope.user = CRUDService.getObject('userProfile');

    $scope.$on('modal.hidden', function() {
        //$state.go($state.current, {}, {reload: true});
         $ionicHistory.nextViewOptions({
            disableBack: true
         });
         $state.go('app.dashboard',{}, {reload: true});
         //setupSlider();
         console.log(' ............. DashboardModule --- $ionicModal.hidden ................ ');
    });

    var initView = function(categoryId){
      console.log('inside initView DashboardController...');
      //$scope.user = CRUDService.getObject('userProfile');

      $scope.userstatus = "Estoy contenta(o)";
      $scope.weeklycontents = weeklycontents;
      console.log($scope.weeklycontents.length);
    };

    var setupSlider = function(){
      $scope.user = CRUDService.getObject('userProfile');
      var weekNum;
      var isRegister = $.isEmptyObject($scope.user);
      if(!isRegister){
        weekNum = $scope.user.pregnancyWeeks - 4;
        console.log('$scope.user.pregnancyWeeks----');
      }else{
        console.log('Estoy contenta ....');
        //$scope.user.status = "Estoy contenta(o)";
        weekNum =  4;
      }

      console.log('inside setupSlider');

      $scope.data.sliderOptions = {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true,
        initialSlide : weekNum,
        direction: 'horizontal',
        pagination: false,
        speed: 300
      };
      $scope.data.sliderDelegate = null;

      $scope.$watch('data.sliderDelegate', function(newEval, oldEval){

        console.log('sliderDelegate $watch');
        if(newEval != null){
            $scope.data.sliderDelegate.on('slideChangeEnd', function(){
            console.log($scope.data.currentPage);
            $scope.data.currentPage = $scope.data.sliderDelegate.activeIndex;
          });

          //
          $scope.data.sliderDelegate.on('tap', function(){
            console.log('tap tap');
            console.log($scope.data.sliderDelegate.activeIndex);
            weekNum = $scope.data.sliderDelegate.activeIndex + 3;
            $ionicLoading.show({
                template: 'Cargando...'
            });
            $state.go('app.weekbyweek',{id:weekNum});
            //$state.go('app.weekbyweek', {id: $scope.data.sliderDelegate.activeIndex});
          });
        }
      })
    };

    $scope.$on('$ionicView.enter', function(){
         console.log('$ionicView.enter..............');
         var days = Math.floor(22/7);
         console.log('cantidad de semanas: ' + days);
         $scope.user = CRUDService.getObject('userProfile');
    });

    //Array position = weeknum - 4  for example to show week 10 weekNum mast be 6
    //var weekNum = 6;//userObj.pregnancyWeeks;
    //$scope.user = CRUDService.getObject('userProfile');
    //weekNum = $scope.user.pregnancyWeeks;
    //console.log('onicView......FUERA----------------.' + weekNum);


    $scope.$on('$ionicView.loaded', function(){
      //weekNum = $scope.user.pregnancyWeeks;
      //$scope.user = userObj;//CRUDService.getObject('userProfile');
      console.log('onicView.loaded......DashboardController.');
      initView();
    });

    $scope.redirectToView = function(view){
       /*$ionicLoading.show({
          template: 'Cargando...'
        });*/
      if(view == 'weekbyweek'){
        //$state.go('app.weekbyweek',{id:weekNum});
          $state.go('app.weekbyweek');
      }else{
        $state.go('app.' + view);
      }
    }

    $scope.showWeekDetail = function(weekNum){
        console.log('showWeekDetail.weekNum: ' + weekNum);
        $state.go('app.weekbyweek',{id:weekNum});
        //$state.go('app.weekbyweek');
    }


    setupSlider();
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
    }
  });
