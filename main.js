$(document).ready( function( e ) {
  $( '#square' ).on({
    mouseenter: function( e ) {
      gameStart();
    },
    mouseleave: function( e ) {
      gameEnd();
    }
  });
});

function gameStart() {
  animateSquare();
}

function gameEnd() {
  alert( 'The game has ended.' );
}

function animateSquare() {

}