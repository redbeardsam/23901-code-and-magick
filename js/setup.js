'use strict';

function showUserDialog() {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
  return showUserDialog;
}
showUserDialog();

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

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
WIZARD_FIRST_NAMES = shuffle(WIZARD_FIRST_NAMES);
WIZARD_SECOND_NAMES = shuffle(WIZARD_SECOND_NAMES);
COAT_COLOR = shuffle(COAT_COLOR);
EYES_COLOR = shuffle(EYES_COLOR);

function getRandomWizardName() {
  return WIZARD_FIRST_NAMES.pop() + ' ' + WIZARD_SECOND_NAMES.pop();
}

function getRandomWizard() {
  var randomWizard = {
    name: getRandomWizardName(),
    coatColor: COAT_COLOR.pop(),
    eyesColor: EYES_COLOR.pop()
  };
  return randomWizard;
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
