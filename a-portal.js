var extendDeep = AFRAME.utils.extendDeep;
var meshMixin = AFRAME.primitives.getMeshMixin();
AFRAME.registerPrimitive('a-portal', extendDeep({}, meshMixin, {
    defaultComponents: {
        geometry: {primitive: 'sphere', radius: 10},
        portal: {},
        material: {}
    },
    mappings: {
        to: 'portal.to',
		x: 'portal.x',
		y: 'portal.y',
        src: 'material.src' 
    }
}));

