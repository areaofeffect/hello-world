AFRAME.registerComponent('vidhandler', { 
  // ... 

  init: function () { 

    // Set up initial state and variables. 
    this.toggle = false; 
    this.vid = document.querySelector("#vid"); 
    this.vid.pause(); 
  }, 

  tick:function() { 
    if(this.el.object3D.visible == true) { 
      if(!this.toggle) { 
        this.toggle = true; 
        this.vid.play(); } 
      }
      else { 
        this.toggle = false; 
        this.vid.pause(); 
      } 
    } 
  });