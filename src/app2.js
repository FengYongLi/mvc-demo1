import './app2.css'
import $ from 'jquery'

const html = `
  <section id="app2">
    <ol class="tabBar">
      <li>left</li>
      <li>right</li>
    </ol>
    <ol class="tabContent">
      <li>内容1</li>
      <li>内容2</li>
    </ol>
  </section>
`
const $element = $(html).prependTo($('.page'))

const $tabBar = $('#app2 .tabBar')
const $tabContent = $('#app2 .tabContent')

const localKey = 'xxx'
const index = localStorage.getItem(localKey) || 0
$tabBar.on('click', 'li', e => {
  const $li = $(e.currentTarget)
  $li
    .addClass('selected')
    .siblings()
    .removeClass('selected')
  const index = $li.index()
  localStorage.setItem(localKey, index)

  $tabContent.children()
    .eq(index).addClass('active')
    .siblings().removeClass('active')
})
$tabBar.children().eq(index).trigger('click')