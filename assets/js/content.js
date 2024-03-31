// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });  

  let $container = $('#image-container');
let $status = $('#status');
let $progress = $('progress');

let supportsProgress = $progress[0] &&
  // IE does not support progress
  $progress[0].toString().indexOf('Unknown') === -1;

let loadedImageCount, imageCount;

$('#add').click( function() {
  // add new images
  let items = getItems();
  $container.prepend( $(items) );
  // use ImagesLoaded
  $container.imagesLoaded()
    .progress( onProgress )
    .always( onAlways );
  // reset progress counter
  imageCount = $container.find('img').length;
  resetProgress();
  updateProgress( 0 );
});

// reset container
$('#reset').click( function() {
  $container.empty();
});

// -----  ----- //

// return doc fragment with
function getItems() {
  let items = '';
  for ( let i = 0; i < 7; i++ ) {
    items += getImageItem();
  }
  return items;
}

// return an <li> with a <img> in it
function getImageItem() {
  let item = '<li class="is-loading">';
  let size = Math.random() * 3 + 1;
  let width = Math.random() * 110 + 100;
  width = Math.round( width * size );
  let height = Math.round( 140 * size );
  let rando = Math.ceil( Math.random() * 1000 );
  // 10% chance of broken image src
  // random parameter to prevent cached images
  let src = rando < 100 ? `//foo/broken-${rando}.jpg` :
    // use picsum.photos for great random images
    `https://picsum.photos/${width}/${height}/?${rando}`;
  item += `<img src="${src}" /></li>`;
  return item;
}

// -----  ----- //

function resetProgress() {
  $status.css({ opacity: 1 });
  loadedImageCount = 0;
  if ( supportsProgress ) {
    $progress.attr( 'max', imageCount );
  }
}

function updateProgress( value ) {
  if ( supportsProgress ) {
    $progress.attr( 'value', value );
  } else {
    // if you don't support progress elem
    $status.text( value + ' / ' + imageCount );
  }
}

// triggered after each item is loaded
function onProgress( imgLoad, image ) {
  // change class if the image is loaded or broken
  let $item = $( image.img ).parent();
  $item.removeClass('is-loading');
  if ( !image.isLoaded ) {
    $item.addClass('is-broken');
  }
  // update progress element
  loadedImageCount++;
  updateProgress( loadedImageCount );
}

// hide status when done
function onAlways() {
  $status.css({ opacity: 0 });
}

  