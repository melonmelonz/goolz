function loadRom(n,o){var e=new XMLHttpRequest;e.open("GET",n),e.responseType="arraybuffer",e.onload=function(){o(e.response)},e.send()}
