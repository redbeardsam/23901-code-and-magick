'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var wizards = [
  {
    name: WIZARD_FIRST_NAMES[getRandomInt(0, 8)] + '\n' + WIZARD_SECOND_NAMES[getRandomInt(0, 8)],
    coatColor: COAT_COLOR[getRandomInt(0, 6)],
    eyesColor: EYES_COLOR[getRandomInt(0, 5)]

  },
  {
    name: WIZARD_FIRST_NAMES[getRandomInt(0, 8)] + '\n' + WIZARD_SECOND_NAMES[getRandomInt(0, 8)],
    coatColor: COAT_COLOR[getRandomInt(0, 6)],
    eyesColor: EYES_COLOR[getRandomInt(0, 5)]
  },
  {
    name: WIZARD_FIRST_NAMES[getRandomInt(0, 8)] + '\n' + WIZARD_SECOND_NAMES[getRandomInt(0, 8)],
    coatColor: COAT_COLOR[getRandomInt(0, 6)],
    eyesColor: EYES_COLOR[getRandomInt(0, 5)]
  },
  {
    name: WIZARD_FIRST_NAMES[getRandomInt(0, 8)] + '\n' + WIZARD_SECOND_NAMES[getRandomInt(0, 8)],
    coatColor: COAT_COLOR[getRandomInt(0, 6)],
    eyesColor: EYES_COLOR[getRandomInt(0, 5)]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
