# marcel-plugin-threejs
A [MARCEL](https://github.com/Zenika/MARCEL) plugin to display a 3D object.
This plugin use:
  - [Three.js](http://threejs.org/)
  - [GLTFLoader](https://github.com/mrdoob/three.js/blob/master/examples/webgl_loader_gltf.html)

The plugin should be able to load any asset that use the glTF2.0 format. 
For now, only light might not be handle. For this reason you can define an Ambient light color which will act as a global illumination.

TODO:
  - Handle animations
  - Find a better way to handle lights.
