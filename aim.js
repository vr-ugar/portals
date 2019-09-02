AFRAME.registerComponent('aim', {

  init: function () {
    var el = this.el;
    var text = document.createElement('a-text');
    text.setAttribute('value', "0 0");
    text.setAttribute('position', "0 0 -1");
    text.setAttribute('color', "purple");
    el.appendChild(text);
    
  },
  tick: (function () {
    var text = this.el.querySelector('a-text');
    // var rot_x = Math.round(this.el.object3D.rotation.x * 180 / Math.PI);
    var rot_x = Math.round(this.el.object3D.rotation.x * 100) / 100
    var rot_y = Math.round(this.el.object3D.rotation.y * 100) / 100
    text.setAttribute('value', rot_x + ' ' + rot_y);
  })
});

