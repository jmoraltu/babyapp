angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicPlatform, $ionicModal, $timeout, CRUDService, $rootScope, $ionicLoading, $ionicSideMenuDelegate, $ionicHistory, $state, pictureService, $cordovaGoogleAnalytics) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});


    $scope.toggleLeftSideMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
        console.log(' ************** $ionicSideMenuDelegate.toggleLeft ************** ');
        $scope.usermenu = CRUDService.getObject('userProfile');
    };

    $scope.$on('$ionicView.enter', function(){
      //$timeout($scope.openSignUpModal, 10);
      if(!$rootScope.isUserRegister){
        console.log('Register user enable');
        //$timeout($scope.openSignUpModal, 10);
      };
      console.log(' --------------------- AppCtrl --- $ionicView.enter ---------------------- ');
    });

     $scope.$on('modal.hidden', function() {
         $ionicHistory.nextViewOptions({
            disableBack: true
         });
         $state.go('app.dashboard');

          console.log(' ............. AppCtrl --- $ionicModal.hidden ................ ');
     });


    var isRegister = false;

    $ionicPlatform.ready(function () {

        if($rootScope.isMobile){
            console.log('register to Analytics with track ID UA-61933092-10');
            //$cordovaGoogleAnalytics.debugMode();
            $cordovaGoogleAnalytics.startTrackerWithId('UA-61933092-10');

            $scope.initPushNotification();

            $scope.registerUser();
        }

    });

    $scope.changeStatus = function(selectedItem){
        console.log('User has changed his status ' + selectedItem);
    }

    $scope.registerUser = function(){
      console.log('----------------- userProfile -----------------------');
      var userObj = CRUDService.getObject('userProfile');
      //console.log(userObj);
      isRegister = $.isEmptyObject(userObj);
      console.log(isRegister)

      if(!isRegister){
        $rootScope.isUserRegister = true;
        console.log('true User already registered');
      }else{
        $rootScope.isUserRegister = false;
        console.log('false user is not registered');
      }


      $ionicModal.fromTemplateUrl('templates/signup.html', {
        scope: $scope
      }).then(function($ionicModal) {
        $scope.signupmodal = $ionicModal;
      });

      // Triggered in the login modal to close it
      $scope.closeSignUpModal = function() {
        $scope.signupmodal.hide();
        //$state.go($state.current, {}, {reload: true});
      };

      // Open the login modal
      $scope.openSignUpModal = function() {
        $ionicPlatform.onHardwareBackButton(function() {
          ionic.Platform.exitApp();
        });
        $scope.signupmodal.show();
      };

      /*if(!$rootScope.isUserRegister){
        console.log('Register user enable');
        $timeout($scope.openSignUpModal, 10);
      };*/

      //for testing
      //$timeout($scope.openSignUpModal, 10);

      $scope.user = {};

      $scope.doSignUp = function(userObject) {
        console.log('User has being registered succesfully...');
        console.log('User username '+ $scope.user.username);
        console.log('User babysex ' + $scope.user.babysex);
        console.log('User pregnancyWeeks ' + $scope.user.pregnancyWeeks);
        console.log('User relatedProfile '+ $scope.user.relatedProfile);
        console.log('User birthdate '+ $scope.user.userBirthdate);
        console.log('User mobile '+ $scope.user.mobile);
        console.log('User zipcode '+ $scope.user.zipcode);
        console.log('User UUID ' + device.uuid);

        var birthdate = new Date($scope.user.userBirthdate);
        $scope.user.userBirthdate = birthdate.getDate() +'/'+(birthdate.getMonth()+1) +'/'+ birthdate.getFullYear();

        var URL_SET_USER_INFO = 'http://ws-app.quovasys.net:88/user.asmx/SetPrivateInfoByKey';

        var postData = {seckey : "ff15f69bed5f6241497d886bbd13dc4", keyid : device.uuid, userlang : "es", appid : "4", params : [{ value : $scope.user.zipcode, id : 1, name : "Postal+Code"},{value : $scope.user.userBirthdate, id : 6, name : "Birthday"},{value : $scope.user.username, id : 7, name : "Alias"},{ value : $scope.user.mobile, id : 10, name : "Phone"}]};

        $ionicLoading.show({
          template: 'Cargando...'
        });

        console.log(JSON.stringify(postData));

        var dataParam = {
          data:JSON.stringify(postData)
        };

        $.ajax({
                type: "POST",
                url: URL_SET_USER_INFO,
                data: dataParam,
                success: function(data, status){
                    console.log('sent user data to quo server');
                },
        });


        //$scope.user = CRUDService.getObject('userProfile');
        CRUDService.setObject('userProfile', $scope.user);

        $timeout(function() {
          $ionicLoading.hide();
          $scope.closeSignUpModal();
        }, 1000);

      };
    };


    $scope.initPushNotification = function () {

      var notificationOpenedCallback = function (jsonData) {
        console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
      };

      window.plugins.OneSignal.init("078b1984-7ecb-4e4e-8e03-9030c15a874a",
        {googleProjectNumber: "824214647219", autoRegister: true},
        notificationOpenedCallback);

      // Show an alert box if a notification comes in when the user is in your app.
      window.plugins.OneSignal.enableInAppAlertNotification(true);
    };

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })


  .controller('StoreCtrl', function ($scope, $stateParams) {
    var storeId = $stateParams.id;
    //var storeTitle = $stateParams.title;
    console.log('id: ' + storeId);
  })


  //.controller('AlbumCtrl', function ($scope, $ionicModal, $ionicBackdrop, $ionicSlideBoxDelegate, $ionicScrollDelegate) {
  .controller('AlbumCtrl', function ($scope, $ionicScrollDelegate ,$cordovaCamera, $cordovaImagePicker, $cordovaFile, CRUDService, pictureService,
                                     $ionicPlatform, $cordovaGoogleAnalytics) {

    $scope.allImages = [];
    $scope.objImages = [];
    $scope.pictureListObj = [];


    $scope.$on('$ionicView.enter', function(){
        $cordovaGoogleAnalytics.trackView('Album Screen');
        window.resolveLocalFileSystemURL(cordova.file.dataDirectory, $scope.onFileSystemSuccess, $scope.fail);
    });


    $scope.fail = function(error) {
         console.log("FAIIILLLLL: " + error.code);
    }

    $scope.onFileSystemSuccess = function(fileSystem){
        var directoryReader = fileSystem.createReader();
        console.log('fileSystem:' + fileSystem);
        directoryReader.readEntries(function (entries) {

            var i;

            console.log('entries.length:' + entries.length);

            for (i = 0; i < entries.length; i++) {
                //console.log('entries.name: ' + entries[i].name);
                //if (entries[i].name === "DCIM") {
                    //var dcimReader = entries[i].createReader();
                    //dcimReader.readEntries(onGetDCIM, fail);
                    //break; // remove this to traverse through all the folders and files
                //}
                console.log('IMAGE: ' + cordova.file.dataDirectory + entries[i].name);
                $scope.allImages.push(cordova.file.dataDirectory + entries[i].name);
            }
            $scope.$apply();
        }, function () {
            console.log("fail readEntries...");
        })
    }

    $scope.copyFileToTempLocation = function(sourcePath){
      var sourceDirectory = sourcePath.substring(0, sourcePath.lastIndexOf('/') + 1);
      var sourceFileName = sourcePath.substring(sourcePath.lastIndexOf('/') + 1, sourcePath.length);


     console.log('sourceDirectory: ' +sourceDirectory);
     console.log('cordova.file.dataDirectory: ' + cordova.file.dataDirectory);
     console.log('sourceFileName: ' + sourceFileName);

      $cordovaFile.copyFile(sourceDirectory, sourceFileName, cordova.file.dataDirectory, sourceFileName)
        .then(function(success) {
          console.dir('-----success------');
          $scope.fileName = cordova.file.dataDirectory + sourceFileName;

          console.log('sourcePath: ' + $scope.fileName);
          window.plugins.Base64.encodeFile($scope.fileName, function(base64){  // Encode URI to Base64 needed for contacts plugin
            // var imageObj = {src:base64};
            //var pictureObject = {data:base64 , uri:$scope.fileName};
            //$scope.allImages.push(base64);
            //pictureService.addPicture(pictureObject);
          });

          var imageObj = {filepath:$scope.fileName};
          var picturesList = CRUDService.getObject('picturesList');
          var isPictureListEmpty = $.isEmptyObject(picturesList);

          //pictureService.addPicture(imageObj);
          $scope.allImages.push($scope.fileName);

          //var pics = pictureService.getPictures().length;
          //console.log('Pics...' + pics);

        }, function(error) {
          console.dir(error);
        });
    }

    //Add Picture from Camera
    //Uses cordova camera plugin
    $scope.addPictureFromCamera = function(){
      console.log('addPictureFromCamera');

      //FILE_URI for file path
      //DATA_URL for base64 encoded string
      var options = {
        destinationType : Camera.DestinationType.FILE_URI,//Camera.DestinationType.NATIVE_URI,
        sourceType : Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
        allowEdit : false,
        encodingType: Camera.EncodingType.JPEG,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: true,
      };
      //Use Camera.DestinationType.NATIVE_URI, saveToPhotoAlbum: true and Source:Camera to store pictures on phone gallery
      $cordovaCamera.getPicture(options).then(function(sourcePath) {

        onImageSuccess(sourcePath);

        function onImageSuccess(sourcePath) {
          $scope.copyFileToTempLocation(sourcePath);
        }
      }, function(err) {
        console.log(err);
      });
    }

    //Add Picture from Photo Library
    //Uses cordova camera plugin
    $scope.addPictureFromGallery = function(){
      console.log('addPictureFromGallery');

      $scope.collection = {
        selectedImage : ''
      };

      var options = {
        maximumImagesCount: 10, // Max number of selected images, I'm using only one for this example
        sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
        encodingType: Camera.EncodingType.JPEG,
        width: 0,
        height: 300,
        quality: 80            // Higher is better
      };


      $cordovaImagePicker.getPictures(options).then(function (results) {
        console.log('executing cordovaImagePicker.getPictures');

        // Loop through acquired images
        for (var i = 0; i < results.length; i++) {
          //console.log('Image URI: ' + results[i]);   // Print image URI
          $scope.copyFileToTempLocation(results[i]);
        }
      }, function(error) {
        console.log('Error: ' + JSON.stringify(error));    // In case of error
      });
    }

    //Dont forget to add after the pictures have been added
    $ionicScrollDelegate.resize();
    $scope.zoomMin = 1;

  });
