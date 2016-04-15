/**
 * Created by jmorales on 17/3/16.
 */
angular.module('WeeklyContentModel', [])

  .factory('WeeklyContent', function () {

    function WeeklyContent(id, externalId, title, description, currentweek, thumbnail, image, video, babyinfo, bodyinfo, advices, question, answer){
      this.id = id;
      this.externalId = externalId;
      this.title = title;
      this.description = description;
      this.currentweek = currentweek;
      this.thumbnail = thumbnail;
      this.image = image;
      this.video = video;
      this.babyinfo = babyinfo;
      this.bodyinfo = bodyinfo;
      this.advices = advices;
      this.question = question;
      this.answer = answer;
    }

    WeeklyContent.build = function(data){
      if(!data)
        return null;
      return new WeeklyContent(data.id, data.externalId, data.title, data.description, data.currentweek, data.thumbnail, data.image,  data.video, data.babyinfo, data.bodyinfo, data.advices, data.question, data.answer);
    }

    WeeklyContent.prototype.toJson = function(){
      return angular.toJson(this);
    }

    WeeklyContent.fromJsonSource = function(data){
      if(angular.isArray(data)){
        return data.map(WeeklyContent.build).filter(Boolean);
      }

      return WeeklyContent.build(data);
    }

    return WeeklyContent;
  })
