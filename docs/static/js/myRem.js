/**
 * Created by FDD on 2017/1/29.
 */
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if(clientWidth>=640){
        // docEl.style.fontSize = '100px';
        docEl.style.fontSize = 100 * (clientWidth / 1366) + 'px';
      }else{
        docEl.style.fontSize = 100 * (clientWidth / 1366) + 'px';
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
