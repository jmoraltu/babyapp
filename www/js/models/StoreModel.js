/**
 * Created by jmorales on 1/4/16.
 */
/**
 * Created by jmorales on 13/3/16.
 */
angular.module('StoreModel', [])

  .factory('Store', function () {

    function Store(id, name, description, thumbnail, storeUrl, image){
      this.id = id;
      this.name = name;
      this.description = description;
      this.thumbnail = thumbnail;
      this.storeUrl = storeUrl;
      this.image = image;
    }

    Store.build = function(data){
      if(!data)
        return null;
      return new Store(data.id, data.name, data.description, data.thumbnail, data.storeUrl, data.image);
    }

    Store.prototype.toJson = function(){
      return angular.toJson(this);
    }

    Store.fromJsonSource = function(data){
      if(angular.isArray(data)){
        return data.map(Store.build).filter(Boolean);
      }

      return Store.build(data);
    }

    return Store;
  })
