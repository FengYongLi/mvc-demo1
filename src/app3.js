import $ from 'jquery'
import '/app3.css'

const html = `
  <section id="app3">
    <div class="square"></div>
  </section>
`
const $element = $(html).prependTo($('.page'))

const $square = $('#app3 .square')

const localKey = 'zzz'
//yes no undefined 三种状态
//1. localStorage.getItem(localKey) === 'yes' 
// 说明添加了 active，所以是 true 返回localStorage.getItem(localKey)就行
//2. 如果不等于 'yes'呢？有两种情况，要么是 'no'，要么是 undefined
// 说明没有添加 active 是默认状态
//const active = localStorage.getItem(localKey) === 'yes' ? true :false
//所以可以写成下边这样
const active = localStorage.getItem(localKey) === 'yes'

//if (active) {
//$square.addClass('active')
//} else {
//$square.removeClass('active')
//}
//上边代码改为下边代码
//toggleClass 接受两个参数 一个是字符串，一个是布尔值
$square.toggleClass('active', active)


$square.on('click', () => {
  if ($square.hasClass('active')) {
    $square.removeClass('active')
    localStorage.setItem(localKey, 'no')
  } else {
    $square.addClass('active')
    localStorage.setItem(localKey, 'yes')
  }
})