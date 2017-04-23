'use strict';

function showUserDialog() {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
  return userDialog;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

var wizardFirstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSecondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
wizardFirstNames = shuffle(wizardFirstNames);
wizardSecondNames = shuffle(wizardSecondNames);
coatColor = shuffle(coatColor);
eyesColor = shuffle(eyesColor);

function getRandomWizardName() {
  return wizardFirstNames.pop() + ' ' + wizardSecondNames.pop();
}

function getRandomWizard() {
  return {
    name: getRandomWizardName(),
    coatColor: coatColor.pop(),
    eyesColor: eyesColor.pop()
  };
}

function getWizards(countWizard) {
  var wizards = [];
  for (var i = 0; i < countWizard; i++) {
    wizards.push(getRandomWizard());
  }
  return wizards;
}
var WIZARDS = getWizards(4);

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

function renderWizardsList() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < WIZARDS.length; i++) {
    fragment.appendChild(renderWizard(WIZARDS[i]));
  }
  similarListElement.appendChild(fragment);
  return fragment;
}

renderWizardsList();
showUserDialog();
