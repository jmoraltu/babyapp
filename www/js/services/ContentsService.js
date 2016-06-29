/**
 * Created by jmorales on 15/3/16.
 */

angular.module('ContentServiceModule', ['ContentModel'])

  .factory('ContentService', function($http, $q, Content) {
    var contentService = {};


    contentService.contentArticles = [];
    //categoryService.selectedCategory = null;

    contentService.getContentArticles = function (categoryId) {
      var deferred = $q.defer();
      if (contentService.contentArticles.length > 0) {
        deferred.resolve(contentService.contentArticles);
      } else {
        //var resolveIfFinished = function(){};
        $http.get('url', {}).then(function (response) {
          console.log('Trying to get data from url....');
          contentService.contentArticles = Content.build(response.data)
          for (var i = 0; i < response.data.length; i++) {
            contentService.contentArticles.push(Content.build(response.data[i]));
          }
          deferred.resolve(contentService.contentArticles);
        }, function (error) {
          console.log('error on URL or internet conn:' + error.toString());
          contentService.contentArticles = getContentArticlesByCategoryFromLocal(categoryId);
          console.log('ARRAY SIZE:' + contentService.contentArticles.length);
          deferred.resolve(contentService.contentArticles);
        });
      }
      return deferred.promise;
    };

    contentService.getArticleById = function(articleId){

      for(var i= 0; contentService.contentArticles.length ; i++){
        if(contentService.contentArticles[i].id == articleId){
          return contentService.contentArticles[i];
        }
      }
    };


    var getContentArticlesByCategoryFromLocal = function(categoryId){

      var content1 = Content.build({"id":"1", "externalId":"000", "title":"Comer y beber sano durante el embarazo", "description":"La dieta ha de ser variada y equilibrada. Lo importante es tomar alimentos ricos en nutrientes y vitaminas como ácido fólico, hierro, calcio y yodo, pero no en grasas. La dieta ha de ser variada a base de verduras, frutas, cereales, lácteos y legumbres, sin olvidar el aporte diario de proteínas de carne y pescado.",
        "dateContent":"12/03/2016", "category":"Salud", "categoryId":"11","thumbnail":"./img/icons/icon1.png", "image":"./img/pic1.jpg", "video":"", "source":"babycenter"});

      var content2 = Content.build({"id":"2", "externalId":"000", "title":"Tomar los suplementos vitamínicos recomendados para garantizar la salud de tu bebe antes y durante el perioddo de embarazo, así tu bebé crecerá sano y fuerte", "description":"Para complementar una dieta sana el médico nos recomendará determinados complementos vitamínicos que incluyan ácido fólico, junto a otros suplementos vitamínicos y de minerales también beneficiosos para el embarazo, como hierro, yodo, calcio… De este modo ayudamos al feto a desarrollarse adecuadamente evitando carencias que podrían causar complicaciones tanto para el bebé (bajo peso, espina bífida...) como a la madre (anemia, preeclampsia...).",
        "dateContent":"12/03/2016", "category":"Salud", "categoryId":"11","thumbnail":"./img/icons/icon2.png", "image":"./img/pic2.jpg", "video":"", "source":"babycenter"});

      var content3 = Content.build({"id":"3", "externalId":"000", "title":"Cuidar nuestra piel", "description":"Durante el embarazo es fundamental aplicarnos cremas solares protectoras para evitar las manchas en la piel y las quemaduras. Debido a la acción de las hormonas, la piel de la embarazada sufre alteraciones como la hiperpigmentación. También son importantes las cremas antiestrías, que previenen la aparición de esas cicatrices con el estiramiento de nuestra piel, con especial atención durante los meses finales, cuando la piel se estira a ritmo muy rápido.",
        "dateContent":"12/03/2016", "category":"Salud", "categoryId":"11", "thumbnail":"./img/icons/icon3.png", "image":"./img/pic3.jpg", "video":"", "source":"babycenter"});

      var content4 = Content.build({"id":"4", "externalId":"000", "title":"Aumento de peso en el embarazo", "description":"El aumento de peso apropiado durante el embarazo dependerá de cuánto pesabas antes de quedar embarazada y de lo proporcionado que esté tu peso con tu altura. La relación entre el peso y la altura se expresa por medio de una cifra conocida como el Índice de Masa Corporal o IMC. Te mostramos aquí la guía para el aumento de peso durante el embarazo del Instituto de Medicina de los Estados Unidos. Las directrices más recientes son de mayo de 2009.",
        "dateContent":"12/03/2016", "category":"Salud", "categoryId":"11", "thumbnail":"./img/icons/icon3.png", "image":"./img/pic9.jpg", "video":"", "source":"babycenter"});

      var content5 = Content.build({"id":"5", "externalId":"000", "title":"¿La obesidad afecta como se mide, escucha y siente al bebé?", "description":"El sobrepeso puede, hasta cierto punto, afectar las pruebas de ultrasonido (ecografías), las mediciones del tamaño del útero, las auscultaciones del corazón del bebé y hasta la percepción de sus movimientos, pero estas posibles dificultades no representan grandes problemas de los que debamos preocuparnos. En lo que se refiere a los ultrasonidos, tu prueba de ultrasonido del nivel 2 deberá realizarse entre las semanas 18 y 20. Si el examen no genera resultados adecuados, se puede repetir más adelante, pero en mi experiencia este examen ha funcionado bien con las mujeres de talla grande. ",
        "dateContent":"12/03/2016", "category":"Salud", "categoryId":"11", "thumbnail":"./img/icons/icon3.png", "image":"./img/pic9.jpg", "video":"", "source":"babycenter"});

      var articles = [content1, content2, content3, content4, content5];

      return articles;
    }


    return contentService;
  })

