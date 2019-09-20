'use strict';

(function() {

  var socket = io('/main2');

  socket.on('connect', onConnect);

  function onConnect(){
    console.log('connect ' + socket.id);
  }

})();
