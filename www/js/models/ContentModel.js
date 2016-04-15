/**
 * Created by jmorales on 13/3/16.
 */
angular.module('ContentModel', [])

.factory('Content', function () {

  function Content(id, externalId, title, description, dateContent, category,categoryId, thumbnail, image, video, source){
      this.id = id;
      this.externalId = externalId;
      this.title = title;
      this.description = description;
      this.dateContent = dateContent;
      this.category = category;
      this.categoryId = categoryId;
      this.thumbnail = thumbnail;
      this.image = image;
      this.video = video;
      this.source = source;
  }

  Content.build = function(data){
        if(!data)
            return null;
        return new Content(data.id, data.externalId, data.title, data.description, data.dateContent, data.category, data.categoryId, data.thumbnail, data.image,  data.video, data.source);
    }

  Content.prototype.toJson = function(){
    return angular.toJson(this);
  }

  Content.fromJsonSource = function(data){
    if(angular.isArray(data)){
      return data.map(Content.build).filter(Boolean);
    }

    return Content.build(data);
  }

  return Content;
})
