/**
 * Created by jmorales on 15/3/16.
 */

angular.module('WeeklyContentServiceModule', ['WeeklyContentModel'])

  .factory('WeeklyContentService', function($http, $q, WeeklyContent) {
    var weeklyContentService = {};


    weeklyContentService.weeklyContents = [];
    //categoryService.selectedCategory = null;

    weeklyContentService.getWeeklyContents = function () {
      var deferred = $q.defer();
      if (weeklyContentService.weeklyContents.length > 0) {
        deferred.resolve(weeklyContentService.weeklyContents);
      } else {
        //var resolveIfFinished = function(){};
        $http.get('url', {}).then(function (response) {
          console.log('Trying to get data from url....');
          weeklyContentService.weeklyContents = WeeklyContent.build(response.data)
          for (var i = 0; i < response.data.length; i++) {
            weeklyContentService.weeklyContents.push(WeeklyContent.build(response.data[i]));
          }
          deferred.resolve(weeklyContentService.weeklyContents);
        }, function (error) {
          console.log('error on URL or internet conn:' + error.toString());
          weeklyContentService.weeklyContents = getWeeklyContentsFromLocal();
          console.log('ARRAY SIZE:' + weeklyContentService.weeklyContents.length);
          deferred.resolve(weeklyContentService.weeklyContents);
        });
      }
      return deferred.promise;
    };

    weeklyContentService.getWeeklyContentById = function(articleId){

      for(var i= 0; weeklyContentService.weeklyContents.length ; i++){
        if(weeklyContentService.weeklyContents[i].id == articleId){
          return weeklyContentService.weeklyContents[i];
        }
      }
    };

    weeklyContentService.getWeeklyContentByWeek = function(currentWeek){

      console.log("weeklyContentService getWeeklyContentByWeek");
      for(var i= 0; weeklyContentService.weeklyContents.length ; i++){
        console.log('week: ' +weeklyContentService.weeklyContents[i].currentweek);

        if(weeklyContentService.weeklyContents[i].currentweek == currentWeek){
          return weeklyContentService.weeklyContents[i];
        }
      }
    };


    var getWeeklyContentsFromLocal = function(){

      //function WeeklyContent(id, externalId, title, description, currentweek, thumbnail, image, video, babyinfo, bodyinfo, advices, question){
      var contentweek4 = WeeklyContent.build({"id":"4", "externalId":"000", "title":"Semana 4",
        "description":"Está creciendo el saco amniótico, la bolsa en la que el bebé estará flotando en líquido amniótico",
        "currentweek":"4","thumbnail":"./img/weeks/week4/week4.jpg", "image":"./img/weeks/week4.jpg", "video":"",
        "babyinfo":"<div class='row'><div class='col col-50'><img src=\"./img/weeks/week4/week4.jpg\" width='100%' height='150px'></div><div class='col col-50'><img src=\"./img/weeks/week4/week4_simil.png\" width='100%' height='150px'></div></div>" +
        "<p>Aunque todavía ni siquiera sepas con seguridad que estás embarazada, se calcula que ésta es la cuarta semana de tu embarazo porque se empieza a contar desde el primer día de tu último periodo menstrual. Si crees que puedes estar embarazada, al final de esta semana ya podrás confirmarlo con una prueba de embarazo.</p>",
        "bodyinfo":"<p>Este es un buen momento para empezar a tomar un suplemento vitamínico que contenga ácido fólico, si todavía no lo estás haciendo. El ácido fólico ayuda a proteger a tu bebé de defectos congénitos en el cerebro y la médula espinal, como la espina bífida. Tu suplemento diario debe tener 400mg de ácido fólico.</p>" +
        "<p>También, aunque te parezca extraño, es un buen momento para empezar una rutina de ejercicio suave. El ejercicio te ayuda a desarrollar buen tono muscular, fuerza y resistencia, todas ellas cualidades que te ayudarán durante el embarazo.</p>" +
        "<p>Nada más saber que estás embarazada lo mejor es llamar al doctor para concertar tu primera cita prenatal. Es posible que tarden en darte una fecha pero si estás tomando alguna medicación, aunque sea de las que se venden sin receta, o alguna hierba, debes preguntarle por teléfono si puedes seguir tomándola.</p>" +
        "<p>Algo que les vendrá muy bien tanto a tu bebé como a ti, son las vitaminas prenatales, que se venden sin receta. Pero no tomes más dosis de las indicadas porque esto podría dañar al bebé.</p>",
        "advices":"En esta etapa tan especial, trata de hacer cosas que disfrutes y que te hagan sentir bien. Por ejemplo podrías darte un baño con agua tibia y burbujas aromatizantes, tumbarte en el sofá a leer una revista o un libro, o bien, simplemente cerrar los ojos y relajarte",
        "question":"¿Por qué puedes sangrar un poco al inicio?",
        "answer" :"Después de la fecundación, cuando el bebé es todavía una bolita muy, muy pequeña, llega al útero desde la trompa de Falopio (donde se unió al espermatozoide de tu pareja) y se implanta allí para que empiece a crecer la placenta. Durante este proceso algunas venitas se pueden romper haciendo que sangres un poco. Estas pequeñas pérdidas al comienzo del embarazo se llaman sangrado de implantación. "
      });

      var contentweek5 = WeeklyContent.build({"id":"5", "externalId":"000", "title":"Semana 5",
        "description":"La placenta primitiva y el cordón umbilical, que llevan oxígeno a tu bebé, han empezado a funcionar.",
        "currentweek":"5","thumbnail":"./img/weeks/week5/week5.jpg", "image":"./img/weeks/week5.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week5/week5.jpg\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week5/week5_simil.png\" width='100%' height='100%'></div></div>" +
        "<p>En estas primeras semanas de embarazo quizás estés un poquito asustada con la perspectiva de ser mamá, y tengas muchas preguntas e incluso sentimientos contradictorios. Pero ya verás como a medida que pasen las semanas todo irá encajando en su lugar</p>" +
        "<p>Tu bebé ya tiene el tamaño de una semilla de sésamo. En este momento está formado de tres capas de células (el ectodermo, el mesodermo y el endodermo) que más tarde formarán todos sus órganos y tejidos</p>" +
        "<p>En la capa superior (ectodermo) se está empezando a desarrollar el tubo neural (del que saldrán el cerebro, la médula espinal, los nervios y la columna vertebral). De esta capa también saldrán su piel, pelo, uñas, glándulas mamarias y sudoríferas, y el esmalte de sus dientes</p>" +
        "<p>En la capa del medio (mesodermo) se están formando el corazón y el sistema circulatorio. Durante esta semana el pequeño corazón se divide en cámaras y empieza a latir y bombear sangre. El mesodermo también forma los músculos y los huesos de tu bebé.</p>",
        "bodyinfo" : "<p>En estas primeras semanas de embarazo están ocurriendo muchas cosas dentro de tu cuerpo, aunque nadie pueda darse cuenta. </p>" +
        "<p>Las hormonas del embarazo ya han entrado en funcionamiento y puede que sientas náuseas, cansancio y que estés orinando bastante más de lo normal (cada hora y a veces incluso de noche).</p>" +
        "<p>El cansancio mejorará si te tomas las cosas con más calma y descansas lo suficiente. Para las náuseas hay algunos trucos que pueden ayudarte, como por ejemplo tomar unas galletitas en la cama antes de levantarte. </p>" +
        "<p>Con respecto a las ganas de orinar, por el momento no puedes hacer gran cosa, pero si evitas beber muchos líquidos antes de acostarte, te levantarás menos por la noche.</p>",
        "advices" :"",
        "question":"¿Por qué sube tu temperatura?",
        "answer" :"<p>Lo que eleva ligeramente la temperatura de tu cuerpo es la progesterona, y el nivel de esta hormona se mantiene alto para que la placenta y el útero puedan crecer adecuadamente.</p>" +
        "<p>Si después de ovular no quedas embarazada, el nivel de progesterona desciende para poder empezar el ciclo de nuevo. Precisamente hay un método para concebir que consiste en tomarte la temperatura corporal todos los días a la misma hora. </p>" +
        "<p>Una temperatura más elevada, entre medio y un grado más de lo normal, indica que se ha producido la ovulación. Después de la ovulación, si no ha habido embarazo, la temperatura vuelve a su nivel normal.</p>"
      });

      var contentweek6 = WeeklyContent.build({"id":"6", "externalId":"000", "title":"Semana 6",
        "description":"A mediados de esta semana, ¡empezará a mover las piernas y los brazos!",
        "currentweek":"6","thumbnail":"./img/weeks/week6/week6.jpg", "image":"./img/weeks/week6.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week6/week6.jpg\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week6/week6_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>Si pudieras ver a tu bebé te darías cuenta de que tiene una cabeza muy grande en comparación al cuerpo, y que ya hay manchas oscuras donde luego tendrá la nariz y los ojos y huecos donde luego tendrá las orejas. Y es que es en esta semana en la que ya están tomando forma la nariz, la boca y las orejas.</p>" +
        "<p>Ahora tiene el tamaño de una lenteja y de momento sus piernas y brazos no sobresalen mucho.</p>" +
        "<p>El corazón del bebé está creciendo también, late entre 100 y 160 veces por minuto y envía sangre a todo su pequeño ser. Sus intestinos se están desarrollando y ha aparecido un bultito de tejido donde luego crecerán los pulmones. También se están formando su cerebro, músculos y huesos.</p>" +
        "<p>Todavía no se distinguen bien los dedos, pero pronto se verán. El cuello también empieza a marcarse y, aunque parezca increíble, la lengua y las cuerdas vocales ya están desarrollándose</p>" +
        "<p>A mediados de esta semana, empezará a mover las piernas y brazos pero todavía habrá que esperar varias semanas hasta que puedas sentir sus pataditas.</p>" ,
        "bodyinfo" :"<p>Es posible que estés sintiendo cambios de humor constantes, lo cual es uno de los efectos de las hormonas del embarazo: te levantas feliz por la mañana y a la hora del almuerzo estás triste, luego te alegras de nuevo, después te pones de mal humor...y puede incluso que se te salten las lágrimas por cualquier cosa que antes no te hubiera afectado. </p>" +
        "<p>Aunque esto puede ser muy desconcertante, especialmente si eres una persona que suele controlar sus emociones, es bastante normal en los primeros meses del embarazo. </p>" +
        "<p>Más adelante puede que estos cambios de humor se suavicen un poco, pero de alguna forma estarán presentes durante toda la gestación.</p>" +
        "<p>Sin embargo, estas emociones tan contradictorias no se deben sólo a los altos niveles de hormonas que circulan por tu sangre. También tienen que ver con el hecho de que toda tu vida va a cambiar, y claro, esto puede afectar las emociones de cualquiera.</p>" +
        "<p>Tener algunas pérdidas de sangre (encontrar manchitas de color marrón o rojo oscuro en tu ropa interior o en el papel higiénico después de ir al baño) es bastante común al comienzo del embarazo, pero algunas veces puede indicar un problema. </p>",
        "advices" :"",
        "question":"¿Por qué suceden los abortos?",
        "answer" :"<p>La mayoría de los abortos espontáneos se producen porque no se consigue que la configuración de los cromosomas sea la correcta. Esto ocurre porque el proceso de creación de un bebé es bastante complicado y a veces la naturaleza comete errores. </p>"
      });

      var contentweek7 = WeeklyContent.build({"id":"7", "externalId":"000", "title":"Semana 7",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"7","thumbnail":"./img/weeks/week7/week7.jpg", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week7/week7.jpg\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });


      //REPETIDOS LOS CONTENIDOS

      var contentweek8 = WeeklyContent.build({"id":"8", "externalId":"000", "title":"Semana 8",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"8","thumbnail":"./img/weeks/week8/week8.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week8/week8.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });

      var contentweek9 = WeeklyContent.build({"id":"9", "externalId":"000", "title":"Semana 9",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"9","thumbnail":"./img/weeks/week9/week9.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week9/week9.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });

      var contentweek10 = WeeklyContent.build({"id":"10", "externalId":"000", "title":"Semana 10",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"10","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });

      var contentweek11 = WeeklyContent.build({"id":"11", "externalId":"000", "title":"Semana 11",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"11","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });

      var contentweek12 = WeeklyContent.build({"id":"12", "externalId":"000", "title":"Semana 12",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"12","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });

      var contentweek13 = WeeklyContent.build({"id":"13", "externalId":"000", "title":"Semana 13",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"13","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });

      var contentweek14 = WeeklyContent.build({"id":"14", "externalId":"000", "title":"Semana 14",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"14","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });

        var contentweek15 = WeeklyContent.build({"id":"15", "externalId":"000", "title":"Semana 15",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"15","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });


        var contentweek16 = WeeklyContent.build({"id":"16", "externalId":"000", "title":"Semana 16",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"16","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });


        var contentweek17 = WeeklyContent.build({"id":"17", "externalId":"000", "title":"Semana 17",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"17","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });


        var contentweek18 = WeeklyContent.build({"id":"18", "externalId":"000", "title":"Semana 18",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"18","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });


        var contentweek19 = WeeklyContent.build({"id":"19", "externalId":"000", "title":"Semana 19",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"19","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });

        var contentweek20 = WeeklyContent.build({"id":"20", "externalId":"000", "title":"Semana 20",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"20","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });

        var contentweek21 = WeeklyContent.build({"id":"21", "externalId":"000", "title":"Semana 21",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"21","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });


        var contentweek22 = WeeklyContent.build({"id":"22", "externalId":"000", "title":"Semana 22",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"22","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });


        var contentweek23 = WeeklyContent.build({"id":"23", "externalId":"000", "title":"Semana 23",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"23","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });


        var contentweek24 = WeeklyContent.build({"id":"24", "externalId":"000", "title":"Semana 24",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"24","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });


        var contentweek25 = WeeklyContent.build({"id":"25", "externalId":"000", "title":"Semana 25",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"25","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });


        var contentweek26 = WeeklyContent.build({"id":"26", "externalId":"000", "title":"Semana 26",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"26","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });

        var contentweek27 = WeeklyContent.build({"id":"27", "externalId":"000", "title":"Semana 27",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"27","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });

        var contentweek28 = WeeklyContent.build({"id":"28", "externalId":"000", "title":"Semana 28",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"28","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });


        var contentweek29 = WeeklyContent.build({"id":"29", "externalId":"000", "title":"Semana 29",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"29","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });

        var contentweek30 = WeeklyContent.build({"id":"30", "externalId":"000", "title":"Semana 30",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"30","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });

        var contentweek31 = WeeklyContent.build({"id":"31", "externalId":"000", "title":"Semana 31",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"31","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });

        var contentweek32 = WeeklyContent.build({"id":"32", "externalId":"000", "title":"Semana 32",
        "description":"Cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.",
        "currentweek":"32","thumbnail":"./img/weeks/week10/week10.png", "image":"./img/weeks/week7.jpg", "video":"",
        "babyinfo" : "<div class='row'><div class='col col-50'><img src=\"./img/weeks/week10/week10.png\" width='100%' height='100%'></div><div class='col col-50'><img src=\"./img/weeks/week7/week7_simil.jpg\" width='100%' height='100%'></div></div>" +
        "<p>A tu bebé ya se le empiezan a distinguir sus manos y sus pies, aunque parecen pequeñas patas de pato porque tienen una membrana entre los dedos. </p>" +
        "<p>Esta semana ya tiene el tamaño de un garbanzo. Se le pueden ver más claramente los rasgos del rostro: ya tiene párpados, los ojos han adquirido un poco de color, y está empezando a asomar la nariz. </p>" +
        "<p>Se le transparentan las venas detrás de la piel, que es fina como un pergamino. Si lo vieras de cerca, pensarías que tiene una colita pero en realidad es el último hueso de la columna vertebral, que ahora sobresale un poco. Este bultito desaparecerá en unas semanas.</p>" +
        "<p>En el cerebro de tu bebé están creciendo los dos hemisferios, y su hígado está produciendo glóbulos rojos, hasta que se forme la médula espinal, que se encargará de este trabajo.</p>" +
        "<p>También tiene ya el apéndice y el páncreas, que en el futuro producirá la hormona insulina, que ayuda con la digestión.</p>" +
        "<p>Aunque el bebé es ahora sólo una bolita, se mueve bastante. Todavía no lo sientes, pero en unas semanas, cuando sea lo bastante grande para rozar las paredes del útero, comenzarás a notar sus movimientos.</p>",
        "bodyinfo" :"<p>Si estás teniendo náuseas, ya sabrás lo desagradables que son. Hay algunas mujeres que sólo sienten náuseas y hay otras que tienen náuseas con vómitos.</p>" +
        "<p>Algunas las tienen por la mañana, y otras durante todo el día, pero lo cierto es que casi el 75 por ciento de las mujeres padecen náuseas durante el embarazo, generalmente en el primer trimestre. A partir del segundo trimestre lo normal es que se calmen y comiences a estar mejor.</p>" +
        "<p>Aunque las náuseas son muy comunes, si tienes tanto malestar que no puedes ni siquiera tolerar líquidos durante 24 horas, debes hablar con tu doctor. Hay algunos medicamentos que te pueden ayudar. Un remedio natural que a algunas mujeres les ayuda es el jengibre, pero antes de tomarlo debes consultar con tu doctor. </p>" +
        "<p>Y si eres una de las afortunadas mujeres que no tienen náuseas y te estás sintiendo bien, disfruta de tu buena suerte y no te preocupes, porque eso no quiere decir que algo anda mal con el bebé.</p>" +
        "<p></p>",
        "advices" :"",
        "question":"¿Cómo se conciben los mellizos o gemelos?",
        "answer" :"<p>Los mellizos vienen de dos óvulos que se han fecundado por dos espermatozoides e implantado en el útero al mismo tiempo. En los últimos años es más común tener mellizos debido a los tratamientos de fertilidad que se están haciendo a mujeres de más edad.</p>" +
        "<p>¿Hay alguien en tu familia que tenga mellizos? Tener mellizos en la familia también aumenta las posibilidades.</p>" +
        "<p>Los gemelos son menos comunes. Vienen cuando un sólo óvulo fecundado se divide en dos. Esto suele ocurrir entre cuatro y ocho días después de la fecundación. Los gemelos son idénticos, \"como dos gotas de agua\", según solemos decir.</p>"
      });

      var weeklyarticles = [contentweek4, contentweek5, contentweek6, contentweek7, contentweek8, contentweek9, contentweek10, contentweek11, contentweek12, contentweek13, contentweek14, contentweek15, contentweek16, contentweek17, contentweek18, contentweek19, contentweek20, contentweek21, contentweek22, contentweek23, contentweek24, contentweek25, contentweek26, contentweek27, contentweek28, contentweek29, contentweek30, contentweek31, contentweek32];

      return weeklyarticles;
    }


    return weeklyContentService;
  })

