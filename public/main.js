'use strict';

(function() {

  var socket = io('/main');

  socket.on('connect', onConnect);

  function onConnect(){
    console.log('connect ' + socket.id);
  }

})();
