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
         "nextTargetHint": "Geht bei auf der Gans nach rechts weiter bis zum Ende. Dort findet ihr den nächsten Hinweis"
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
         "nextTargetHint": "Geht bei auf der Gans nach rechts weiter bis zum Ende. Dort findet ihr den nächsten Hinweis"
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
         "nextTargetHint": "Geht nach rechts auf den Akeleiweg. Dort ist der nächste Hinweis"
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
         "nextTargetHint": "Geht nach links auf den Fuchsienweg und findet den nächsten Hinweis"
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
         "nextTargetHint": "Geht weiter auf dem Fuchsienweg bis ihr an den Rosmarinweg kommt. Dort kommt der nächste Hinweis"
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
         "nextTargetHint": "Vom Fuchsienweg aus müsst ihr nach links auf dem Rosmarinweg. Kurz bevor die Straße zu Ende ist kommt ein kleiner Weg zwischen den Häuser nach rechts. Dort findet ihr einen Hinweis"
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
         "nextTargetHint": "Geht den Weg bis zum Ende. An der Ecke zu In den Ringelgärten kommt der nächste Hinweis"
       }
     },
     "Uranus": {
       "card": {
         "question": "Warum sieht Uranus türkis aus?",
         "answers": [{
           "Seine Oberfläche besteht aus Wasser": "false"
           },
           {
           "Wegen dem Methangas in der Atmosphäre": "true"
           },
           {
           "Auf seinen Felsen wächst Moos": "false"
           }
         ],
         "successMessage": "Die blaue Farbe bei Neptun und Uranus kommt von dem Methan in der Atmosphäre der beiden Planeten. Methan verschluckt den roten Anteil des Lichts, so dass der Planet blau erscheint.",
         "nextTargetHint": "Biegt nach rechts ab. der nächste Hinweis kommt am Begonienweg"
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
         "nextTargetHint": "Geht nach rechts auf den Begonienweg. Der nächste Hinweis kommt am Krokusweg"
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
         "nextTargetHint": "Geschafft! Ihr habt alle Fragen beantwortet. Der Schatz ist am Spielplatz am Krokusweg versteckt"
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

const markers = document.querySelectorAll('a-marker');
markers.forEach(marker => {
  marker.addEventListener('markerFound', () => {
    console.log('Marker found!', marker);

    const planet = marker.querySelector('[data-card-id]');
    planet.setAttribute('cursor-listener', '');
    console.log('planet', planet);
  });

  marker.addEventListener('markerLost', () => {
    const planet = marker.querySelector('[data-card-id]');
    planet.removeAttribute('cursor-listener');
  });
});

// open modal with card data
openModal = function openModal(cardId) {
  document.querySelectorAll('.modal-content')[0].classList.remove('success');

  const cardArrayFiltered = cardsAsArray.filter(([key]) => key.includes(cardId));
  const cardObject = Object.fromEntries(cardArrayFiltered);
  card = cardObject[cardId].card;

  console.log(card);
  
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

  const modalEl = document.getElementById('planetModal');
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
}

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
