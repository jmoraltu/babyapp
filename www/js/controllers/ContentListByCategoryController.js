/**
 * Created by jmorales on 15/3/16.
 */

angular.module('ContentListByCategoryModule', ['CategoryModel', 'ContentModel', 'ContentServiceModule'])

  //************** ContentList By Cayegory Controller  ********************
  .controller('ContentListByCategoryController', function ($scope, $stateParams, ContentService) {

    var initView = function(categoryId){


      ContentService.getContentArticles(categoryId).then(function(){
        $scope.contentArticlesList = ContentService.contentArticles;
      },function(error){
        console.log('error on CategoryLisController ' +error.message.toString());
        $scope.contentArticlesList = [];
      });
      /*
      var content1 = Content.build({"id":"1", "externalId":"000", "title":"Comer y beber sano durante el embarazo", "description":"La dieta ha de ser variada y equilibrada. Lo importante es tomar alimentos ricos en nutrientes y vitaminas como ácido fólico, hierro, calcio y yodo, pero no en grasas. La dieta ha de ser variada a base de verduras, frutas, cereales, lácteos y legumbres, sin olvidar el aporte diario de proteínas de carne y pescado.",
        "dateContent":"12/03/2016", "category":"Salud", "categoryId":"11","thumbnail":"./img/icons/icon1.png", "image":"./img/pic1.jpg", "video":"", "source":"babycenter"});

      var content2 = Content.build({"id":"2", "externalId":"000", "title":"Tomar los suplementos vitamínicos recomendados", "description":"Para complementar una dieta sana el médico nos recomendará determinados complementos vitamínicos que incluyan ácido fólico, junto a otros suplementos vitamínicos y de minerales también beneficiosos para el embarazo, como hierro, yodo, calcio… De este modo ayudamos al feto a desarrollarse adecuadamente evitando carencias que podrían causar complicaciones tanto para el bebé (bajo peso, espina bífida...) como a la madre (anemia, preeclampsia...).",
        "dateContent":"12/03/2016", "category":"Salud", "categoryId":"11","thumbnail":"./img/icons/icon2.png", "image":"./img/itembg2.jpg", "video":"", "source":"babycenter"});

      var content3 = Content.build({"id":"3", "externalId":"000", "title":"Cuidar nuestra piel", "description":"Durante el embarazo es fundamental aplicarnos cremas solares protectoras para evitar las manchas en la piel y las quemaduras. Debido a la acción de las hormonas, la piel de la embarazada sufre alteraciones como la hiperpigmentación. También son importantes las cremas antiestrías, que previenen la aparición de esas cicatrices con el estiramiento de nuestra piel, con especial atención durante los meses finales, cuando la piel se estira a ritmo muy rápido.",
        "dateContent":"12/03/2016", "category":"Salud", "categoryId":"11", "thumbnail":"./img/icons/icon3.png", "image":"./img/itembg2.jpg", "video":"", "source":"babycenter"});

      var contentList = [content1, content2, content3];

      $scope.contentArticlesList = contentList;*/

    };

    $scope.$on('$ionicView.loaded', function(){
      console.log('onicView.loaded ContentDetailModule.......');
      var categoryId = $stateParams.id;
      console.log('categoryId: ' + categoryId);
      initView(categoryId);
    });
  })
