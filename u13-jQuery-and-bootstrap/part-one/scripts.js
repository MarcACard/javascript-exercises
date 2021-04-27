// #1
$('document').ready(() => {
  console.log('Let’s get ready to party with jQuery!');
})

// #2 
$('article img').addClass('image-center');

// #3
$('p:last-of-type').remove();

// #4 
const rndPixelSize = Math.round(Math.random() * 100);
$('#title').css('font-size', rndPixelSize + 'px');

// #5
$('aside ol').append('<li>Time to mow the lawnz</li>')

// #6
$('aside ol').replaceWith('<p>Sorry that list was a lie.</p>');

// #7
$('input').change(function(){
  let red = $('.form-control').eq(0).val();
  let green = $('.form-control').eq(1).val();
  let blue = $('.form-control').eq(2).val();
  $('body').css('background-color', `rgb(${red},${green},${blue})`)
})

// #8
$('img').click(function(){
  $(this).remove()
})