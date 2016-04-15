/**
 * Created by jmorales on 15/3/16.
 */
angular.module('CategoryServiceModule', ['CategoryModel'])

.factory('CategoryService', function($http, $q, Category){
  var categoryService = {};

  categoryService.categories = [];
  categoryService.subcategories = [];
  categoryService.selectedCategory = null;

  categoryService.getCategories = function(categoryId){
    var deferred = $q.defer();
    if(categoryService.categories.length > 0){
      deferred.resolve(categoryService.categories);
    } else {
      //var resolveIfFinished = function(){};
      $http.get('url',{}).then(function(response){
        console.log('Trying to get data from url....');
        categoryService.categories = Category.build(response.data)
        for(var i=0; i<response.data.length; i++){
          categoryService.categories.push(Category.build(response.data[i]));
        }
        deferred.resolve(categoryService.categories);
      }, function(error){
        console.log('error on URL or internet conn:' + error.toString());
        getCategoriesFromLocal(categoryId);
        console.log('ARRAY SIZE:' + categoryService.categories.length);
        deferred.resolve(categoryService.categories);
      });
    }
    return deferred.promise;
  };


  categoryService.getSubCategories = function(categoryId){
    var deferred = $q.defer();

    $http.get('url',{}).then(function(response){
      console.log('Trying to get data from url....');
      categoryService.subcategories = Category.build(response.data)
      for(var i=0; i< response.data.length; i++){
        categoryService.subcategories.push(Category.build(response.data[i]));
      }
      deferred.resolve(categoryService.subcategories);
    }, function(error){
      console.log('error on URL or internet conn:' + error.toString());
      categoryService.subcategories = getSubCategoriesFromLocal(categoryId);
      console.log('ARRAY SIZE: ' + categoryService.subcategories.length);
      deferred.resolve(categoryService.subcategories);
    });

    return deferred.promise;
  };


   var getCategoriesFromLocal = function(categoryId){

     console.log('inside getCategoriesFromLocal...' + categoryId);
     // function Category(id, name, description, thumbnail){
     var category1 = Category.build({"id":"1", "name":"Salud", "description":"Salud de la embarazada", "isParent":"true", "parentCategoryId":"0", "thumbnail":"./img/itembg1.jpg" });
     var category2 = Category.build({"id":"2", "name":"Alimentación", "description":"Consejos alimenticios", "isParent":"true", "parentCategoryId":"0", "thumbnail":"./img/itembg2.jpg" });
     var category3 = Category.build({"id":"3", "name":"Relaciones", "description":"Consejos alimenticios", "isParent":"true", "parentCategoryId":"0", "thumbnail":"./img/itembg1.jpg" });
     var category4 = Category.build({"id":"4", "name":"Moda", "description":"Consejos de moda", "isParent":"true", "parentCategoryId":"0", "thumbnail":"./img/itembg2.jpg" });
     var category5 = Category.build({"id":"5", "name":"Ocio", "description":"Tiempo libre", "isParent":"true", "parentCategoryId":"0", "thumbnail":"./img/itembg1.jpg" });
     var category6 = Category.build({"id":"6", "name":"Prepárandose para el parto", "isParent":"true", "parentCategoryId":"0", "description":"Prepárandose para el parto", "thumbnail":"./img/itembg2.jpg" });
     var category7 = Category.build({"id":"7", "name":"Prepárandose para el bebé", "isParent":"true", "parentCategoryId":"0", "description":"Prepárandose para el bebé", "thumbnail":"./img/itembg1.jpg" });
     var category8 = Category.build({"id":"8", "name":"Sabías que", "description":"Sabías que", "isParent":"true", "parentCategoryId":"0", "thumbnail":"./img/itembg2.jpg" });
     categoryService.categories = [category1, category2, category3, category4, category5, category6, category7, category8];
     return categoryService.categories;

  };

  var getSubCategoriesFromLocal = function(categoryId){

    console.log('inside getSubCategoriesFromLocal...');
    console.log('TIPO DE DATO ' + typeof categoryId);

    var subcategorieslist = [];
    //Salud
    if(categoryId == "1"){
      //Subcategorias de Salud (CategoryId:1)
      var category11 = Category.build({"id":"11", "name":"Dormir", "description":"Dormir", "isParent":"false", "parentCategoryId":"1", "thumbnail":"./img/itembg1.jpg"});
      var category12 = Category.build({"id":"12", "name":"Fumar", "description":"Fumar", "isParent":"false", "parentCategoryId":"1", "thumbnail":"./img/itembg3.jpg"});
      var category13 = Category.build({"id":"13", "name":"Complicaciones", "description":"Complicaciones", "isParent":"false", "parentCategoryId":"1", "thumbnail":"./img/itembg4.jpg"});
      var category14 = Category.build({"id":"14", "name":"Ejercicio - Yoga", "description":"Ejercicio - Yoga", "isParent":"false", "parentCategoryId":"1", "thumbnail":"./img/itembg1.jpg"});
      var category15 = Category.build({"id":"15", "name":"Actividades de riesgo", "description":"Actividades de riesgo", "isParent":"false", "parentCategoryId":"1", "thumbnail":"./img/itembg3.jpg"});
      var category16 = Category.build({"id":"16", "name":"Medicinas y cuidados", "description":"Medicamentos", "isParent":"false", "parentCategoryId":"1", "thumbnail":"./img/itembg4.jpg"});
      var category17 = Category.build({"id":"17", "name":"Síntomas, molestias, dolores", "description":"Síntomas", "isParent":"false", "parentCategoryId":"1", "thumbnail":"./img/itembg1.jpg"});
      var category18 = Category.build({"id":"18", "name":"Pruebas médicas", "description":"Pruebas médicas", "isParent":"false", "parentCategoryId":"1", "thumbnail":"./img/itembg3.jpg"});
      var category19 = Category.build({"id":"19", "name":"Belleza", "description":"Belleza", "isParent":"false", "parentCategoryId":"1", "thumbnail":"./img/itembg4.jpg"});

      subcategorieslist = [category11, category12, category13, category14, category15, category16, category17, category18, category19];
      //console.log('categoryId 1 categoryService.subcategories: ' + categoryService.subcategories.length);
    }

    //Alimentación
    else if(categoryId == "2")
    {
      //Subcategorias de Alimentación (CategoryId:2)
      var category21 = Category.build({"id":"21", "name":"Comida sana", "description": "Comida Sana", "isParent":"false", "parentCategoryId":"2", "thumbnail":"./img/itembg1.jpg"});
      var category22 = Category.build({"id":"22", "name":"Recetas", "description":"Recetas", "isParent":"false", "parentCategoryId":"2", "thumbnail":"./img/itembg2.jpg"});
      var category23 = Category.build({"id":"23", "name":"Bebidas", "description":"Bebidas", "isParent":"false", "parentCategoryId":"2", "thumbnail":"./img/itembg1.jpg"});
      var category24 = Category.build({"id":"24", "name":"Control de peso", "description":"Control de peso", "isParent":"false", "parentCategoryId":"2", "thumbnail":"./img/itembg2.jpg"});
      var category25 = Category.build({"id":"25", "name":"Alimentación semanal", "description":"Alimentación", "isParent":"false", "parentCategoryId":"2", "thumbnail":"./img/itembg1.jpg"});

      subcategorieslist = [category21, category22, category23, category24, category25];
      //console.log('categoryId 2 categoryService.subcategories: ' + categoryService.subcategories.length);
    }

    //Relaciones
    else if(categoryId == "3")
    {
      //Subcategorias de Relaciones (CategoryId:3)
      var category31 = Category.build({"id":"31", "name":"Subcategory 3.1", "description": "Comida Sana", "isParent":"false", "parentCategoryId":"3", "thumbnail":"./img/itembg1.jpg"});
      var category32 = Category.build({"id":"32", "name":"Subcategory 3.2", "description":"Recetas", "isParent":"false", "parentCategoryId":"3", "thumbnail":"./img/itembg2.jpg"});
      var category33 = Category.build({"id":"33", "name":"Subcategory 3.3", "description":"Bebidas", "isParent":"false", "parentCategoryId":"3", "thumbnail":"./img/itembg1.jpg"});
      var category34 = Category.build({"id":"34", "name":"Subcategory 3.4", "description":"Control de peso", "isParent":"false", "parentCategoryId":"3", "thumbnail":"./img/itembg2.jpg"});

      subcategorieslist = [category31, category32, category33, category34];
      //console.log('categoryId 3 categoryService.subcategories: ' + categoryService.subcategories.length);
    }
    //Wild card
    else {
      console.log('inside WILD CARD option');
      var category41 = Category.build({"id":"41", "name":"Subcategory n.1", "description": "Comida Sana", "isParent":"false", "parentCategoryId":"3", "thumbnail":"./img/itembg1.jpg"});
      var category42 = Category.build({"id":"42", "name":"Subcategory n.2", "description":"Recetas", "isParent":"false", "parentCategoryId":"3", "thumbnail":"./img/itembg2.jpg"});
      var category43 = Category.build({"id":"43", "name":"Subcategory n.3", "description":"Bebidas", "isParent":"false", "parentCategoryId":"3", "thumbnail":"./img/itembg1.jpg"});
      var category44 = Category.build({"id":"44", "name":"Subcategory n.4", "description":"Control de peso", "isParent":"false", "parentCategoryId":"3", "thumbnail":"./img/itembg2.jpg"});

      subcategorieslist = [category41, category42, category43, category44];
    }

    return subcategorieslist;
  };

  return categoryService;
})
