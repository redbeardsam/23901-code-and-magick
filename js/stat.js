'use strict';

window.renderStatistics = function (ctx, names, times){
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270); //рисую облака

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60); //рисую надписи

  var max = -1; //задаю переменную наибольшего времени

  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];  //переменная для поиска времени
    if (time > max) {
      max = time;
    }
  } //вычисляю наибольшее время

  var histogramHeight = 150; //px
  var step = histogramHeight / max; //высчитываю величину для нормирования гистограммы
  var barWidth = 40;  // px;
  var indent = barWidth + 50; // px;
  var initialX = 140; // px;
  var initialY = 240; // px;

  for(var i = 0; i < times.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(times[i].toFixed(0), initialX + indent * i, initialY - (step + 10));  //время игроков
    ctx.fillText(names[i], initialX + indent * i, initialY + 20); //имена игроков
      if (names[i] == 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
      }
    ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step); //столбцы
  } //рисую гистограмму
};
