/**
 * Created by jmorales on 14/3/16.
 */
/**
 * Created by jmorales on 13/3/16.
 */

angular.module('SubcategoryListModule', ['CategoryModel'])

  //************** Categories Controller  ********************
  .controller('SubcategoriesListController', function ($scope, $stateParams, Category, $cordovaGoogleAnalytics) {



    var initView = function(categoryId){
      console.log('inside initView...');

      $scope.subcategorieslist = null;
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

        $scope.subcategorieslist = [category11, category12, category13, category14, category15, category16, category17, category18, category19];
      }

      else if(categoryId == "2")
      {
        //Subcategorias de Alimentación (CategoryId:2)
        var category21 = Category.build({"id":"21", "name":"Comida sana", "description": "Comida Sana", "isParent":"false", "parentCategoryId":"2", "thumbnail":"./img/itembg1.jpg"});
        var category22 = Category.build({"id":"22", "name":"Recetas", "description":"Recetas", "isParent":"false", "parentCategoryId":"2", "thumbnail":"./img/itembg2.jpg"});
        var category23 = Category.build({"id":"23", "name":"Bebidas", "description":"Bebidas", "isParent":"false", "parentCategoryId":"2", "thumbnail":"./img/itembg1.jpg"});
        var category24 = Category.build({"id":"24", "name":"Control de peso", "description":"Control de peso", "isParent":"false", "parentCategoryId":"2", "thumbnail":"./img/itembg2.jpg"});
        var category25 = Category.build({"id":"25", "name":"Alimentación semanal", "description":"Alimentación", "isParent":"false", "parentCategoryId":"2", "thumbnail":"./img/itembg1.jpg"});

        $scope.subcategorieslist = [category21, category22, category23, category24, category25];
      }
      else if(categoryId == "3")
      {
        //Subcategorias de Relaciones (CategoryId:3)
        var category31 = Category.build({"id":"31", "name":"Comida sana", "description": "Comida Sana", "isParent":"false", "parentCategoryId":"3", "thumbnail":"./img/itembg1.jpg"});
        var category32 = Category.build({"id":"32", "name":"Recetas", "description":"Recetas", "isParent":"false", "parentCategoryId":"3", "thumbnail":"./img/itembg2.jpg"});
        var category33 = Category.build({"id":"33", "name":"Bebidas", "description":"Bebidas", "isParent":"false", "parentCategoryId":"3", "thumbnail":"./img/itembg1.jpg"});
        var category34 = Category.build({"id":"34", "name":"Control de peso", "description":"Control de peso", "isParent":"false", "parentCategoryId":"3", "thumbnail":"./img/itembg2.jpg"});

        $scope.subcategorieslist = [category31, category32, category33, category34];
      }
      else {
        var category41 = Category.build({"id":"41", "name":"Subcategory 1", "description": "Comida Sana", "isParent":"false", "parentCategoryId":"3", "thumbnail":"./img/itembg1.jpg"});
        var category42 = Category.build({"id":"42", "name":"Subcategory 2", "description":"Recetas", "isParent":"false", "parentCategoryId":"3", "thumbnail":"./img/itembg2.jpg"});
        var category43 = Category.build({"id":"43", "name":"Subcategory 3", "description":"Bebidas", "isParent":"false", "parentCategoryId":"3", "thumbnail":"./img/itembg1.jpg"});
        var category44 = Category.build({"id":"44", "name":"Subcategory 4", "description":"Control de peso", "isParent":"false", "parentCategoryId":"3", "thumbnail":"./img/itembg2.jpg"});
        $scope.subcategorieslist = [category41, category42, category43, category44];
      }

      //$scope.subcategorieslist = [category11, category12, category13, category14, category15, category16, category17, category18, category19, category21, category22, category23, category24, category25, category31, category32, category33, category34];

      console.log('subcategorieslist' + $scope.subcategorieslist.length);

    };

    $scope.$on('$ionicView.loaded', function(){
      console.log('onicView.loaded subcategory.......');
      var categoryId = $stateParams.id;
      console.log('categoryId: ' + categoryId);
      $cordovaGoogleAnalytics.trackView('SubcategoryList Screen');
      initView(categoryId);
    });
  })

  .directive('backImage', function(){
    return function (scope, element, attrs){
      var url = attrs.backImage;
      var content = element.find('a');
      content.css({
        'background': 'url('+ url +')',
        'background-size' : 'cover'
      })
    }
  });
