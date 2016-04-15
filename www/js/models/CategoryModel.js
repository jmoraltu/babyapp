/**
 * Created by jmorales on 13/3/16.
 */
angular.module('CategoryModel', [])

  .factory('Category', function () {

    function Category(id, name, description, isParent, parentCategoryId, thumbnail){
      this.id = id;
      this.name = name;
      this.description = description;
      this.isParent = isParent;
      this.parentCategoryId = parentCategoryId;
      this.thumbnail = thumbnail;
    }

    Category.build = function(data){
      if(!data)
        return null;
      return new Category(data.id, data.name, data.description, data.isParent, data.parentCategoryId, data.thumbnail);
    }

    Category.prototype.toJson = function(){
      return angular.toJson(this);
    }

    Category.fromJsonSource = function(data){
      if(angular.isArray(data)){
        return data.map(Category.build).filter(Boolean);
      }

      return Category.build(data);
    }

    return Category;
  })
