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
  $( '#square' ).stop();
  alert( 'The game has ended.' );
}

function animateSquare() {
  const $square = $( '#square' );
  var oldPosition = $square.offset(),
    newPosition = moveSquare( $( '#container' ) ),
    movementSpeed = calculateSpeed( [oldPosition.top, oldPosition.left], newPosition);

    $square.animate({
      left: newPosition[0],
      top: newPosition[1]
    },
    movementSpeed,
    function() {
      animateSquare();
    })
}

function moveSquare( $container ) {
  var containerWidth = ( $container.width() - 100 ),
    containerHeight = ( $container.height() - 100 ),
    newWidth = Math.floor( Math.random() * containerWidth ),
    newHeight = Math.floor( Math.random() * containerHeight);

    return [newWidth, newHeight];
}

function calculateSpeed ( previousPosition, nextPosition ) {
  var xCoordinate = Math.abs( previousPosition[0] - nextPosition[0] ),
    yCoordinate = Math.abs( previousPosition[1] - nextPosition[1] ),
    largerValue = xCoordinate > yCoordinate ? xCoordinate : yCoordinate,
    speedModifier = 0.1,
    speed = Math.ceil( largerValue/speedModifier );

    return speed;
}