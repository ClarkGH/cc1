$(document).ready( function( e ) {
  $( '#square' ).on({
    mouseenter: function ( e ) {
      alert( 'the game has began' );
    },
    mouseleave: function ( e ) {
      alert( 'the game has ended' )
    }
  });
});