AFRAME.registerComponent('portal', {
// coordinates are set by x y rotation on the surface of 12m sphere.
schema: {
    to: {type: 'string'},
	x: {type: 'float'},
	y: {type: 'float'}
},
init: function () {
    var el = this.el;
	var data = this.data;

	var base = this.el;
	var target = document.createElement('a-sphere');
    target.setAttribute('animation', {property: 'rotation', to: '0 360 0', loop: true, dur: 10000, easing: 'linear'});

	base.appendChild(target);
	target.object3D.scale.x = 12;
	target.object3D.scale.y = 12;
	target.object3D.scale.z = 12;
	target.object3D.position.z = -100;

	target.setAttribute('material', {src: data.src});
	
	// set base rotation
	base.object3D.rotation.x = data.x;
	base.object3D.rotation.y = data.y;
	
	// get target's world position
	
	var w_pos = target.object3D.getWorldPosition();

},
update: function () {
	var data = this.data;
	var el = this.el.querySelector('a-sphere');
	var flag = false;
	var timer;

    var parel = this.el.parentEl;
	// get element to dissapear gradualy
    var sky = parel.querySelector('a-sky');
      
	el.addEventListener('mouseenter', () => {
		flag = true;
	if (parel.getAttribute('visible')) {
		setTimeout(changeScene, 800);
        timer = setInterval(function () {
	    sky.components.material.material.opacity = sky.components.material.material.opacity * 0.9;
		el.object3D.scale.x = el.object3D.scale.x * 1.1;
		el.object3D.scale.y = el.object3D.scale.y * 1.1;
		el.object3D.scale.z = el.object3D.scale.z * 1.1;
	    if (sky.components.material.material.opacity < 0.1) {
		    clearInterval(timer);
		    sky.components.material.material.opacity = 1;
	    } 
    }, 42);
	}
      });
	el.addEventListener('mouseleave', () => {
	flag = false;
		el.object3D.scale.x = 12;
		el.object3D.scale.y = 12;
		el.object3D.scale.z = 12;
	    clearInterval(timer);
	    sky.components.material.material.opacity = 1;
      });
    function changeScene() {
		if (flag) {
			flag = false;

			var toel = document.getElementById(data.to);
			
			toel.object3D.scale.x = 1;
			toel.object3D.scale.y = 1;
			toel.object3D.scale.z = 1;
			toel.setAttribute('visible', 'true');

			// get the entity out of the way
			parel.object3D.scale.x = 0;
			parel.object3D.scale.y = 0;
			parel.object3D.scale.z = 0;
			
			document.getElementById(parel.id).setAttribute('visible', 'false');

			el.object3D.scale.x = 1;
			el.object3D.scale.y = 1;
			el.object3D.scale.z = 1;
		};
    }
	    
}
});

