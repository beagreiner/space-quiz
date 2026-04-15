const data = {
  "mainTargets": {
    "Merkur": {
      "card": {
        "question": "Is Mercury hot or cold?",
        "answers": [{
          "Cold": "false"
        },
        {
          "Hot": "false"
        },
        {
          "Hot on one side and cold on the other": "true"
        }],
        "successMessage": "Mercury rotates very slowly. The side facing the Sun becomes extremely hot, while the other side becomes extremely cold.",
        "nextTargetHint": "Your next clue is at the bakery"
      }
    },
    "Venus": {
      "card": {
        "question": "What did sailors in the past call Venus?",
        "answers": [{
          "Morning Star": "false"
        },
        {
          "Evening Star": "false"
        },
        {
          "Both": "true"
        }],
        "successMessage": "Depending on the season, Venus can be seen very brightly from Earth either in the morning or in the evening. Sailors long ago did not realize it was the same celestial object.",
        "nextTargetHint": "Take a look at the advertisement column at the other side of the plaza. The next clue is there."
      }
    },
    "Erde": {
      "card": {
        "question": "Is Earth the only planet in our solar system that has a moon?",
        "answers": [{
          "Only Mercury and Venus have none": "true"
        },
        {
          "Only Earth, Jupiter and Saturn have moons": "false"
        },
        {
          "Only Earth has a moon": "false"
        }],
        "successMessage": "Earth has one moon, Mars has two, and Jupiter and Saturn each have more than sixty! Only Mercury and Venus have no moons — all the other planets have at least one.",
        "nextTargetHint": "Look for a house with a large fish pond to find the next clue."
      }
    },
    "Mars": {
      "card": {
        "question": "What is the highest mountain on Mars called?",
        "answers": [{
          "Olympus Mons": "true"
        },
        {
          "Mount Everest": "false"
        },
        {
          "Mount Mars": "false"
        }],
        "successMessage": "Olympus Mons is the highest mountain on Mars. It is about two and a half times taller than Mount Everest.",
        "nextTargetHint": "Find a garden with many garden gnomes. The next clue is there."
      }
    },
    "Jupiter": {
      "card": {
        "question": "What is the Great Red Spot on Jupiter?",
        "answers": [{
          "A volcano": "false"
        },
        {
          "A giant storm": "true"
        },
        {
          "A huge mountain range": "false"
        }],
        "successMessage": "The Great Red Spot is a massive storm on Jupiter that has been raging for at least 350 years.",
        "nextTargetHint": "Your next clue is at the church"
      }
    },
    "Saturn": {
      "card": {
        "question": "What are Saturn’s rings made of?",
        "answers": [{
          "Gas": "false"
        },
        {
          "Precious metals": "false"
        },
        {
          "Ice and rock particles": "true"
        }],
        "successMessage": "Saturn’s rings consist of countless small particles of ice and rock that are held in orbit around the planet by gravity.",
        "nextTargetHint": "Find the largest oak tree behind the church. Your next clue is there."
      }
    },
    "Uranus": {
      "card": {
        "question": "Why does Uranus look turquoise?",
        "answers": [{
          "Its surface is made of water": "false"
        },
        {
          "Because of methane gas in its atmosphere": "true"
        },
        {
          "Because moss grows on its rocks": "false"
        }],
        "successMessage": "The blue color of Neptune and Uranus comes from methane in their atmospheres. Methane absorbs the red part of sunlight, which makes the planets appear blue.",
        "nextTargetHint": "Your next clue is at the playground"
      }
    },
    "Neptun": {
      "card": {
        "question": "Who is Neptune named after?",
        "answers": [{
          "The Roman god of the sea": "true"
        },
        {
          "The Greek god of war": "false"
        },
        {
          "The Egyptian god of weather": "false"
        }],
        "successMessage": "It is named after the Roman god of the sea. Neptune belongs to the group of ice giants. Its core is surrounded by a mantle or ocean made of rock, water, ammonia, and methane.",
        "nextTargetHint": "Well done! Search around the playground, the treasure is hidden here somewhere"
      }
    }
  }
};

let finishedTargets = JSON.parse(sessionStorage.getItem('finishedTargets')) || [];
let wrongAnswers = JSON.parse(sessionStorage.getItem('wrongAnswers')) || [];
let points = parseInt(sessionStorage.getItem('points') || 0);
const cardsAsArray = Object.entries(data.mainTargets);

if(sessionStorage.getItem('finishedTargets')){
  finishedTargets = JSON.parse(sessionStorage.getItem('finishedTargets'));
} else {
  document.querySelector('.screen--directions').classList.add('active')
}

if(sessionStorage.getItem('wrongAnswers')){
  wrongAnswers = JSON.parse(sessionStorage.getItem('wrongAnswers'));
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

    document.querySelectorAll('[cursor-listener]').forEach(el=>{
      el.removeAttribute('cursor-listener');
    });

    const planet = marker.querySelector('[data-card-id]');
    planet.setAttribute('cursor-listener','');
  });

  marker.addEventListener('markerLost', () => {
    const planet = marker.querySelector('[data-card-id]');
    planet.removeAttribute('cursor-listener');
  });
});

// open modal with card data
const modalEl = document.getElementById('planetModal');
const modal = new bootstrap.Modal(modalEl);

openModal = function openModal(cardId) {
  document.querySelectorAll('.modal-content')[0].classList.remove('success');
  document.querySelector('[cursor]').setAttribute('raycaster','enabled:false');

  const card = data.mainTargets[cardId].card;
  
  // create answer buttons
  let answersHtml = '';
  let i = 0;
  
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

  modal.show();
}

modalEl.addEventListener('hidden.bs.modal', () => {
  console.log('modal closed');

  // re-enable the cursor / raycaster if you disabled it earlier
  const cursor = document.querySelector('[cursor]');
  if (cursor) {
    cursor.setAttribute('raycaster', 'enabled: true');
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
        sessionStorage.setItem('finishedTargets', JSON.stringify(finishedTargets));
        points += 20;

        if(finishedTargets.length === cardsAsArray.length){
          document.querySelector('.page').classList.add('is-finished');
        }
      }
    } else {
      if(!wrongAnswers.includes(target.dataset.answerId)){
        wrongAnswers.push(target.dataset.answerId);
        sessionStorage.setItem('wrongAnswers', JSON.stringify(wrongAnswers));
        points -= 5;
      }
    }
    sessionStorage.setItem('points', points);
    document.querySelector('.points-counter').textContent = points;
  }
});

//close directions
document.querySelector('.screen--directions .btn-close').addEventListener('click', function(){
  document.querySelector('.screen--directions').classList.remove('active')
});

//Reset
document.querySelector('.btn-reset').addEventListener('click', function(e){
  finishedTargets = [];
  wrongAnswers = [];
  points = 0;
  sessionStorage.setItem('finishedTargets', JSON.stringify([]));
  sessionStorage.setItem('wrongAnswers', JSON.stringify([]));
  sessionStorage.setItem('points', 0);
  document.querySelector('.points-counter').textContent = points;
  document.querySelector('.page').classList.remove('is-finished');
});
