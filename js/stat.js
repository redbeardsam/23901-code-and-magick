'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270); // рисую облака

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60); // рисую надписи

  var HISTOGRAM_HEIGHT = 150; // px
  var BAR_WIDTH = 40;  // px;
  var INITIAL_X = 140; // px;
  var INITIAL_Y = 240; // px;
  times.max = function () {
    return Math.max.apply(null, this);
  };
  var STEP = HISTOGRAM_HEIGHT / -times.max();

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var INDENT = BAR_WIDTH + 50; // px;
    var BAR_HEIGHT = time * STEP;
    var BAR_X = INITIAL_X + INDENT * i;
    ctx.fillStyle = 'black';
    ctx.fillText(time.toFixed(0), BAR_X, INITIAL_Y + BAR_HEIGHT - 10);  // время игроков
    ctx.fillText(name, BAR_X, INITIAL_Y + 20); // имена игроков
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(BAR_X, INITIAL_Y, BAR_WIDTH, BAR_HEIGHT); // столбцы
  } // рисую гистограмму
};
