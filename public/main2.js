'use strict';

(function() {

  var socket = io('/main2');

  socket.on('connect', onConnect);

  function onConnect(){
    console.log('connect ' + socket.id);
  }

})();
This looks like a JavaScript file. Click this bar to format it.No 4
