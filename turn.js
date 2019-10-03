AFRAME.registerComponent('turn', {

  tick: (function () {
	const SPEED = 0.025;
	const ANGLE = Math.PI / 2;
	var rig = document.querySelector('#rig');
	var cam = document.querySelector('a-camera');
	var rot = cam.object3D.rotation.y;

	if (Math.abs(rot) > ANGLE) {
		if (rot > 0) {
		rig.object3D.rotation.y = rig.object3D.rotation.y + SPEED;
		}
		else {
		rig.object3D.rotation.y = rig.object3D.rotation.y - SPEED;
}
	}
  })
});

