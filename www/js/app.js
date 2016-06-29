// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova', 'ion-floating-menu', 'CategoryListModule','SubcategoryListModule', 'ContentDetailModule','ContentListByCategoryModule','CategoryServiceModule','ContentServiceModule','DashboardModule','WeeklyContentServiceModule','WeekByWeekModule','StoresServiceModule','StoresListModule','StoreDetailModule','ProfileModule'])

.run(function ($ionicPlatform, $rootScope) {

    $rootScope.mobileAndTabletcheck = function() {
          console.log('inside window.mobileAndTabletcheck');

          var check = false;
          (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
          return check;
    }


  $ionicPlatform.ready(function () {

    $rootScope.isMobile = true;

    if($rootScope.mobileAndTabletcheck()){
        console.log('We are in a mobile device');
        $rootScope.isMobile = true;
         //Device information
        console.log('Device info');
        console.log(device.platform);
        console.log(device.uuid);
        console.log(device.model);
        console.log(device.cordova);
    }else{
        $rootScope.isMobile = false;
       console.log('We are in a desktop');
    }


    if($rootScope.isMobile){
         console.log('Activando AdMob on mobile device');
         //Setting AdMob banner and Interstitial configuration
        if(AdMob) {

          console.log('Creating AdMob banner....');
          var admobid = {};
          if( /(android)/i.test(navigator.userAgent) ) {
            admobid = { // for Android
              banner: 'ca-app-pub-6869992474017983/9375997553',
              interstitial: 'ca-app-pub-6869992474017983/1657046752'
            };
          } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
            admobid = { // for iOS
              banner: 'ca-app-pub-6869992474017983/4806197152',
              interstitial: 'ca-app-pub-6869992474017983/7563979554'
            };
          } else {
            admobid = { // for Windows Phone
              banner: 'ca-app-pub-6869992474017983/8878394753',
              interstitial: 'ca-app-pub-6869992474017983/1355127956'
            };
          }

          AdMob.createBanner({
            adId: admobid.banner,
            isTesting: true,
            overlap: false,
            offsetTopBar: false,
            position: AdMob.AD_POSITION.BOTTOM_CENTER,
            adSize: AdMob.AD_SIZE.SMART_BANNER,
            bgColor: 'black'
          });
        }
        else {
          console.log("No Admob plugin found");
        }
    }



    var appId = 4;

    var URL_REGISTER = 'http://ws-app.quovasys.net:88/user.asmx/RegisterKey';

    if($rootScope.isMobile){
        var postData = {
            keyid :device.uuid,
            appid:appId,
            seckey:"babyapp-seckey-value"
          };


        $.ajax({
            type: "POST",
            url: URL_REGISTER,
            data: postData,
            success: function(data, status){
              console.log('sent to server');
            },
        });
      }



    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.navBar.alignTitle('center');
    $ionicConfigProvider.views.swipeBackEnabled(false);
    $ionicConfigProvider.backButton.previousTitleText(false);
    $ionicConfigProvider.backButton.text('');

  $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })
    .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileController'
        }
      }
    })

    .state('app.temporalpage', {
      url: '/temporalpage',
      views: {
        'menuContent': {
            templateUrl: 'templates/temporalpage.html'
        }
      }
    })

  .state('app.toolslist', {
    url: '/toolslist',
    views: {
      'menuContent': {
        templateUrl: 'templates/toolslist.html'
      }
    }
  })

    .state('app.tooldetail', {
      url: '/tooldetail/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/tooldetail.html'
        }
      }
    })


    .state('app.album', {
      url: '/album',
      views: {
        'menuContent': {
          templateUrl: 'templates/album.html',
          controller: 'AlbumCtrl'
        }
      }
    })

    .state('app.storeslist', {
      url: '/storeslist',
      views: {
        'menuContent': {
          templateUrl: 'templates/storeslist.html',
          controller: 'StoresListController'
        }
      }
    })

  .state('app.storedetail', {
    url: '/storedetail/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/storedetail.html',
        controller: 'StoreDetailController',
        resolve:{
            storeObj : function ($stateParams, StoresService){
              return StoresService.getStoreById($stateParams.id);
            }
        }
      }
    }
  })
    .state('app.dashboard', {
      url: '/dashboard',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/dashboard.html',
          controller: 'DashboardController',
          resolve:{
            weeklycontents : function (WeeklyContentService){
              return WeeklyContentService.getWeeklyContents();
            },
            userObj : function(CRUDService){
                return CRUDService.getObject('userProfile');
            }
          }
        }
      }
    })


    .state('app.weekbyweek', {
      url: '/weekbyweek/:id',
      cache: true,
      views: {
        'menuContent': {
          templateUrl: 'templates/weekbyweek.html',
          controller: 'WeekByWeekController',
          resolve:{
            /*weeklyObj : function ($stateParams, WeeklyContentService){
              return WeeklyContentService.getWeeklyContentByWeek($stateParams.id);
            },*/
            weeklycontents : function (WeeklyContentService) {
              return WeeklyContentService.getWeeklyContents();
            }
          }
        }
      }
    })

.state('app.categorieslist', {
      url: '/categoriesList',
      views: {
        'menuContent': {
          templateUrl: 'templates/categoriesList.html',
          controller: 'CategoriesListController',
          resolve:{
            categories : function(CategoryService){
              return CategoryService.getCategories(0);
            }
          }
        }
      }
    })

    .state('app.subcategorieslist', {
      url: '/subcategorieslist/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/subcategoriesList.html',
          controller: 'SubcategoriesListController'
        }
      }
    })

    .state('app.contentlistbycategory', {
      url: '/contentlistbycategory/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/contentlistbycategory.html',
          controller: 'ContentListByCategoryController'
        }
      }
    })

    .state('app.contentdetail', {
      url: '/contentdetail/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/contentdetail.html',
          controller: 'ContentDetailController',
          resolve:{
            articleObj : function($stateParams, ContentService){
              return ContentService.getArticleById($stateParams.id)
            }
          }
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
    //var userObj = CRUDService.getObject('userProfile');
    //var isRegister = $.isEmptyObject(userObj);
    //if(!isRegister)
       // $urlRouterProvider.otherwise('/app/temporalpage');
    //else
        $urlRouterProvider.otherwise('/app/dashboard');
});
