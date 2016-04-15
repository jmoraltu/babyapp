/**
 * Created by jmorales on 13/3/16.
 */
angular.module('UserModel', [])

.factory('User', function () {

  function User(id, username, profilePicture, userBirthdate, zipcode, relatedProfile, pregnancyWeeks, dueDate, babysex, mobilePhone, status){
      this.id = id;
      this.username = username;
      this.profilePicture = profilePicture;
      this.userBirthdate = userBirthdate;
      this.zipcode = zipcode;
      this.relatedProfile = relatedProfile;
      this.pregnancyWeeks = pregnancyWeeks;
      this.dueDate = dueDate;
      this.babysex = babysex;
      this.mobile = mobile;
      this.status = status;
  }

  User.build = function(data){
        if(!data)
            return null;
        return new User(data.id, data.username, data.profilePicture, data.userBirthdate, data.zipcode, data.relatedProfile, data.pregnancyWeeks, data.dueDate, data.babysex, data.mobile, data.status);
  }

  User.prototype.toJson = function(){
    return angular.toJson(this);
  }

  User.fromJsonSource = function(data){
    if(angular.isArray(data)){
      return data.map(User.build).filter(Boolean);
    }

    return User.build(data);
  }

  return User;
})
