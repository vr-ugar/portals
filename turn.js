AFRAME.registerComponent('turn', {

  init: function () {
    var el = this.el;
    var text = document.createElement('a-text');
    text.setAttribute('value', "0");
    text.setAttribute('position', "0 0 9.5");
    text.setAttribute('color', "black");
    el.appendChild(text);
    
  },
  tick: (function () {
	var rig = document.querySelector('#rig');
    var text = this.el.querySelector('a-text');

	var q = new THREE.Quaternion();
	var rotation = new THREE.Euler();
	this.el.object3D.getWorldQuaternion(q);
	rotation.setFromQuaternion(q);
	var rot = rotation.z - rig.object3D.rotation.y

    text.setAttribute('value', Math.round(rot * 100) / 100);
	if (Math.abs(rotation.z) > Math.PI / 2) {
		if (rot > 0) {
		rig.object3D.rotation.y = rig.object3D.rotation.y + 0.1;
		}
	}
  })
});

