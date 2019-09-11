AFRAME.registerComponent('aim', {

  init: function () {
    var el = this.el;
    var text = document.createElement('a-text');
    text.setAttribute('value', "0 0");
    text.setAttribute('position', "0 0 9.5");
    text.setAttribute('color', "purple");
    el.appendChild(text);
    
  },
  tick: (function () {
    var text = this.el.querySelector('a-text');
    // var rot_x = Math.round(this.el.object3D.rotation.x * 180 / Math.PI);
    var pos_x = Math.round(this.el.object3D.getWorldPosition().x * 100) / 100
    var pos_y = Math.round(this.el.object3D.getWorldPosition().y * 100) / 100
    var pos_z = Math.round(this.el.object3D.getWorldPosition().z * 100) / 100
    text.setAttribute('value', pos_x + ' ' + pos_y + ' ' + pos_z);
  })
});

