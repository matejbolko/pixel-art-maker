// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const id = document.getElementById('pixelCanvas')
const whiteColor = '#ffffff'
let h
let w
let color
const $ = window.$

function makeGrid (x, y, canvas) {
  for (var i = 0; i < x; i++) {
    $(canvas).append('<tr></tr>')
    for (var j = 0; j < y; j++) {
      $('tr:last').append('<td></td>')
    }
  }
}

$('#pixelCanvas').on('click', 'td', function (event) {
  // let text = $(this).text()
  // alert( 'Handler for .click() called.' + text);
  let currentColor = $(this).css('background-color')
  currentColor = rgb2hex(currentColor)
  if (currentColor === color) {
    $(event.target).css('background-color', whiteColor)
  } else {
    $(event.target).css('background-color', color)
  }
})

$('#colorPicker').change(function () {
  color = $(this).val()
  // alert( 'color: ' + color);
})

// clear button
$('#clear').click(function () {
  $('td').css('background-color', whiteColor)
})

function rgb2hex (rgb) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)
  return (rgb && rgb.length === 4) ? '#' +
  ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
  ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
  ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : ''
}

$(document).ready(function () {
  console.log('ready!')
  $('#sizePicker').submit(function (event) {
    $(id).empty()
    h = $('#inputHeight').val()
    w = $('#inputWeight').val()
    color = $('#colorPicker').val() // default color
    event.preventDefault()
    // console.log('READ DATA h: '+h+' w: '+w+' color: '+color);
    makeGrid(h, w, id)
  })
})
