window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("myLog").appendChild(node);
    }
  }
  console.log('hi');
  console.log('there');