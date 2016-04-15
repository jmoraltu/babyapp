// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova', 'ion-floating-menu', 'CategoryListModule','SubcategoryListModule', 'ContentDetailModule','ContentListByCategoryModule','CategoryServiceModule','ContentServiceModule','DashboardModule','WeeklyContentServiceModule','WeekByWeekModule','StoresServiceModule','StoresListModule','StoreDetailModule','ProfileModule'])

.run(function ($ionicPlatform) {


  $ionicPlatform.ready(function () {


    //Device information
    console.log('Device info');
    console.log(device.platform);
    console.log(device.uuid);
    console.log(device.model);
    console.log(device.cordova);


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
      /*
      AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: true
      });*/
    }
    else {
      console.log("No Admob plugin found");
    }

    var appId = 3;

    /*
    $scope.registerUser = function() {
      var URL_REGISTER = 'http://ws-app.quovasys.net:88/user.asmx/RegisterKey';

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
    }*/

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
