const data = {
   "mainTargets": {
     "Sonne": {
       "card": {
         "question": "Was genau passiert bei einer Sonnenfinsternis?",
         "answers": [{
           "Der Mond schiebt sich zwischen die Erde und die Sonne": "true"
           },
           {
           "Die Sonne verdunkelt sich": "false"
           },
           {
           "Die Erde dreht sich weg von der Sonne": "false"
           }
         ],
         "successMessage": "Richtig!",
         "nextTargetHint": "Your next target is at...."
       }
     },
     "Merkur": {
       "card": {
         "question": "Ist es auf dem Merkur heiß oder kalt?",
         "answers": [{
           "Kalt": "false"
           },
           {
           "Heiß": "false"
           },
           {
           "Auf der einen Seite heiß, auf der anderen kalt": "true"
           }
         ],
         "successMessage": "Merkur dreht sich nur sehr langsam um sich selbst, die Seite die zur Sonne zeigt ist extrem heiß, die andere extrem kalt",
         "nextTargetHint": "Your next target is at...."
       }
     },
     "Venus": {
       "card": {
         "question": "Wie wurde Venus früher von Seefahrern genannt?",
         "answers": [{
           "Morgenstern": "false"
           },
           {
           "Abenstern": "false"
           },
           {
           "Beides": "true"
           }
         ],
         "successMessage": "Je nach Jahreszeit ist Venus von der Erde aus morgens oder abends sehr hell sichtbar. Seefahrer früher wußten nicht, dass es der gleiche Himmelskörper ist.",
         "nextTargetHint": "Your next target is at...."
       }
     },
     "Erde": {
       "card": {
         "question": "Ist die Erde der einzige Planet in unserem Sonnensystem, der einen Mond hat?",
         "answers": [{
           "Nur Merkur und Venus haben keinen": "true"
           },
           {
           "Nur Erde, Jupiter und Saturn haben Monde": "false"
           },
           {
           "Nur die Erde hat einen": "false"
           }
         ],
         "successMessage": "Die Erde hat einen, der Mars zwei, Jupiter und Saturn sogar je über sechzig! Nur Merkur und Venus müssen ohne Monde auskommen, alle anderen Planeten haben mindestens einen Mond.",
         "nextTargetHint": "Your next target is at...."
       }
     },
     "Mars": {
       "card": {
         "question": "Wie heißt der höchste Berg auf dem Mars?",
         "answers": [{
           "Olympus Mons": "true"
            },
            {
            "Mount Everest": "false"
            },
            {
            "Mount Mars": "false"
            }
         ],
         "successMessage": "Olympus Mons ist der höchste Berg auf dem Mars. Er ist ungefähr zweieinhalb Mal so groß wie der Mount Everest",
         "nextTargetHint": "Your next target is at...."
       }
     },
     "Jupiter": {
       "card": {
         "question": "Was ist der Große Rote Fleck auf Jupiter?",
         "answers": [{
           "Ein Vulkan": "false"
            },
            {
            "Ein riesiger Sturm": "true"
            },
            {
            "Eine riesige Bergkette": "false"
            }
         ],
         "successMessage": "Der Große Rote Fleck ist ein riesiger Sturm auf Jupiter, der seit mindestens 350 Jahren wütet.",
         "nextTargetHint": "Your next target is at...."
       }
     },
     "Saturn": {
       "card": {
         "question": "Woraus bestehen die Saturnringe?",
         "answers": [{
           "Aus Gas": "false"
           },
           {
           "Aus Edelmetallen": "false"
           },
           {
           "Aus Eis- und Gesteinspartikeln": "true"
           }
         ],
         "successMessage": "Die Ringe des Saturn bestehen aus unzähligen kleinen Eis- und Gesteinspartikeln, die durch die Schwerkraft in eine Umlaufbahn um den Planeten gezogen wurden.",
         "nextTargetHint": "Your next target is at...."
       }
     },
     "Uranus": {
       "card": {
         "question": "Was ist ungewöhnlich an der Neigung von Uranus?",
         "answers": [{
           "Er steht auf dem Kopf": "false"
           },
           {
           "Er ist sehr stark zur Seite geneigt": "true"
           },
           {
           "Gar nichts": "false"
           }
         ],
         "successMessage": "Uranus ist auf die Seite geneigt, daher sieht es aus als würde sein Ring von oben nach unten gehen. Tatsächlich ist aber der ganze Planet gedreht",
         "nextTargetHint": "Your next target is at...."
       }
     },
     "Neptun": {
       "card": {
         "question": "Nach wem ist Neptun benannt?",
         "answers": [{
           "Dem römischen Gott des Meeres": "true"
           },
           {
           "Dem griechischen Gott des Krieges": "false"
           },
           {
           "Dem ägyptischen Gott des Wetters": "false"
           }
         ],
         "successMessage": "Er ist nach dem römischen Gott des Meeres benannt. Neptun gehört zu Gruppe der Eisriesen. Sein Kern ist umgeben von einem Mantel oder Ozean aus einer Mischung von Fels, Wasser, Ammoniak und Methan",
         "nextTargetHint": "Your next target is at...."
       }
     },
     "Pluto": {
       "card": {
         "question": "Ist Pluto ein Planet?",
         "answers": [{
           "Ja": "false"
           },
           {
           "Nein": "false"
           },
           {
           "Er war früher einer": "true"
           }
         ],
         "successMessage": "Pluto zählte bis 2006 zu den Planeten unseres Sonnensystems. Seither zählt er zu den neu entdeckten (und ähnlich kleinen) Zwergplaneten, und unser Sonnensystem hat nur noch 8 Planeten. Ansonsten müssten wir uns inzwischen schon über 12 Planeten merken",
         "nextTargetHint": "Your next target is at...."
       }
     },
   }
};

let finishedTargets = [];
let wrongAnswers = [];
let points = 0;
const cardsAsArray = Object.entries(data.mainTargets);

if(sessionStorage.getItem('finishedTargets')){
  finishedTargets = sessionStorage.getItem('finishedTargets');
  document.querySelector('.page').classList.add('is-active');
}
if(sessionStorage.getItem('wrongAnswers')){
  wrongAnswers = sessionStorage.getItem('wrongAnswers');
}
if(sessionStorage.getItem('points')){
  points += sessionStorage.getItem('points') * 1;
}

document.querySelector('.start').addEventListener('click', function () {
  document.querySelector('.page').classList.add('is-active');
});
document.querySelector('.points-counter').textContent = points;

// open modal with card data
document.addEventListener('click', function(e){
  const button = e.target.closest('[data-card-id]');
  if(button){
    document.querySelectorAll('.modal-content')[0].classList.remove('success');
    
    let cardId = button.dataset.cardId;
    const cardArrayFiltered = cardsAsArray.filter(([key]) => key.includes(cardId));
    const cardObject = Object.fromEntries(cardArrayFiltered);
    card = cardObject[cardId].card;
    
    // create answer buttons
    let answersHtml = '';
    i = 0;
    
    card.answers.forEach(answer => {
      let answerText = '',
          answerValue = '',
          answerIcon = '';
      i++;
      
      for (let [key, value] of Object.entries(answer)) {
        answerText = key;
        answerValue = value;
        if(value === 'true') {answerIcon = 'bi-emoji-smile'} else { answerIcon = 'bi-emoji-frown' };
      }
      let answerHtml = '<button type="button" class="btn btn-info" ' + 
      'data-success-state="' + answerValue +
      '" data-answer-id="' + cardId + '-' + i +  
      '" data-answer-group="' + cardId + '">' +
      answerText +
      '<i class="' + answerIcon + '"></i></button>';
      answersHtml  = answersHtml + answerHtml;
    });

    document.querySelector('.modal-title').textContent = card.question;
    document.querySelector('.modal-body.questions').innerHTML = answersHtml;
    document.querySelector('.modal-body.success-message').textContent = card.successMessage;
    document.querySelector('.modal-footer').innerHTML = card.nextTargetHint;
  }
});

//answer buttons click handling
document.addEventListener('click', function(e){
  const target = e.target.closest("[data-success-state]");
  if(target){
    target.classList.add(target.dataset.successState);
    if(target.dataset.successState === 'true') {
      target.closest('.modal-content').classList.add('success');
      

      
      //store successfully finishedTargets
      if(!finishedTargets.includes(target.dataset.answerGroup)){
        finishedTargets.push(target.dataset.answerGroup);
        sessionStorage.setItem('finishedTargets', finishedTargets);
        points += 20;

        if(finishedTargets.length === cardsAsArray.length){
          document.querySelector('.page').classList.add('is-finished');
        }
      }
    } else {
      if(!wrongAnswers.includes(target.dataset.answerId)){
        wrongAnswers.push(target.dataset.answerId);
        sessionStorage.setItem('wrongAnswers', wrongAnswers);
        points -= 5;
      }
    }
    sessionStorage.setItem('points', points);
    document.querySelector('.points-counter').textContent = points;
  }
});

//Reset
document.querySelector('.btn-reset').addEventListener('click', function(e){
  finishedTargets = [];
  wrongAnswers = [];
  points = 0;
  sessionStorage.setItem('finishedTargets', []);
  sessionStorage.setItem('wrongAnswers', []);
  sessionStorage.setItem('points', 0);
  document.querySelector('.points-counter').textContent = points;
  document.querySelector('.page').classList.remove('is-active','is-finished');
});
