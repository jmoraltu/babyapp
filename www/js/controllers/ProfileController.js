angular.module('ProfileModule', ['UserModel'])
.controller('ProfileController', function($scope, $timeout, $stateParams, CRUDService, $ionicModal, $ionicLoading, $state, $ionicSideMenuDelegate) {

            $scope.$on('$ionicView.enter', function(){
                       console.log("ionicView.enter");
                       $scope.user = CRUDService.getObject('userProfile');

            });

            $scope.$on('modal.hidden', function() {
                       console.log("ionicView.enter");
                       $scope.user = null;
                       $state.go($state.current, {}, {reload: true});
                       console.log('editprofilepmodal.hidden ProfileCtrl');
            });

            $scope.$on('$ionicView.beforeEnter', function(){
                       $scope.user = null;
                      console.log("beforeEnter");
            });

            //---------------------------------------------//
            // Edit profile modal window configuration
            //---------------------------------------------//
            $ionicModal.fromTemplateUrl('templates/editProfile.html', {
                                        scope: $scope
                                        }).then(function($ionicModal) {
                                                $scope.editprofilepmodal = $ionicModal;
                                        });

            // Triggered in the login modal to close it
            $scope.closeEditProfileModal = function() {
                $scope.editprofilepmodal.hide();
            };

            // Open the login modal
            $scope.openEditProfileModal = function() {
                $scope.user = CRUDService.getObject('userProfile');
                console.log("openEditProfileModal:" + $scope.user.userBirthdate);

                var datestring = $scope.user.userBirthdate;
                var digits = datestring.split('/')
                $scope.user.userBirthdate = new Date(digits[2],digits[1]-1, digits[0]);
                console.log("openEditProfileModal:" + $scope.user.userBirthdate);

                $scope.editprofilepmodal.show();
            };

            $scope.$on('editprofilepmodal.hidden', function() {
                    console.log('editprofilepmodal.hidden from appcontroller');
            });

        $scope.user = {};

        $scope.updateUserProfile = function(userObject) {
            console.log('User has being registered succesfully...');
            console.log('User username '+ $scope.user.username);
            console.log('User babysex ' + $scope.user.babysex);
            console.log('User pregnancyWeeks ' + $scope.user.pregnancyWeeks);
            console.log('User relatedProfile '+ $scope.user.relatedProfile);
            console.log('User birthdate '+ $scope.user.userBirthdate);
            console.log('User mobile '+ $scope.user.mobile);
            console.log('User zipcode '+ $scope.user.zipcode);
            console.log('User status '+ $scope.user.status);
            console.log('User UUID ' + device.uuid);

            var birthdate = new Date($scope.user.userBirthdate);
            $scope.user.userBirthdate = birthdate.getDate() +'/'+(birthdate.getMonth()+1) +'/'+ birthdate.getFullYear();

            var URL_SET_USER_INFO = 'http://ws-app.quovasys.net:88/user.asmx/SetPrivateInfoByKey';

            $ionicLoading.show({
              template: 'Cargando...'
            });

            //$scope.user = CRUDService.getObject('userProfile');
            CRUDService.setObject('userProfile', $scope.user);


            $timeout(function() {
              $ionicLoading.hide();
              $scope.closeEditProfileModal();
            }, 1000);

          };


        $scope.toggleLeftSideMenu = function() {
            $ionicSideMenuDelegate.toggleLeft();
            console.log(' ************** $ionicSideMenuDelegate.toggleLeft ************** ');
            $scope.usermenu = CRUDService.getObject('userProfile');
        };
})
