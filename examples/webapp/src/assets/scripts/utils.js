/**
 * Created by FDD on 2017/2/7.
 */
export default class Utils {
  consoleDrag (currentEle, aliasEle, contentEle) {
    let dragObj = {}
    $('body').on('mousedown', currentEle, function (e) {
      e.preventDefault()
      dragObj.down = true
      dragObj.top = aliasEle[0].offsetTop
      dragObj.y = e.clientY
    }).on('mousemove', function (e) {
      if (!dragObj.down) {
        return
      }
      let y = e.clientY
      if (window.lib['flexible']) {
        console.log(parseFloat(contentEle.css('bottom')))
        let ooo = (parseFloat(contentEle.css('bottom')) + (dragObj.y - y)) / window.lib['flexible']['rem'] + 'rem'
        contentEle[0].style.bottom = aliasEle[0].style.height = ooo
      } else {
        let rem = parseFloat(window.document.documentElement.style.fontSize)
        console.log(rem)
      }
    }).on('mouseup', function () {
      delete dragObj.down
    })
  }
}
