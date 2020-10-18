'use strict';

{
  document.getElementById('open').addEventListener('click', () => {
    document.getElementById('tabletHambergermenu').classList.add('hide');
  });
  document.getElementById('close').addEventListener('click', () => {
    document.getElementById('tabletHambergermenu').classList.remove('hide');
  });
}

jQuery( window ).on( 'scroll', function() {
  if ( 500 < jQuery( this ).scrollTop() ) { // 1000px以上スクロールしたら
    jQuery('.tablet-header').addClass( 'm_fixed' );
  } else {
    jQuery('.tablet-header').removeClass( 'm_fixed' );
  }
  if ( 4800 < jQuery( this ).scrollTop() ) { // 1000px以上スクロールしたら
    jQuery('.tablet-header').addClass( 'none' );
  } else {
    jQuery('.tablet-header').removeClass( 'none' );
  }

  if ( 500 < jQuery( this ).scrollTop() ) { // 1000px以上スクロールしたら
    jQuery('.tablet-header-bottom').addClass( 'm_fixed' );
  } else {
    jQuery('.tablet-header-bottom').removeClass( 'm_fixed' );
  }
  if ( 4800 < jQuery( this ).scrollTop() ) { // 1000px以上スクロールしたら
    jQuery('.tablet-header-bottom').addClass( 'none' );
  } else {
    jQuery('.tablet-header-bottom').removeClass( 'none' );
  }
});
