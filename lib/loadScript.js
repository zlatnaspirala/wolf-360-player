//elemental scripts

INCLUDE.SCRIPT("lib/threejs/dat.gui.min.js");

INCLUDE.SCRIPT("lib/threejs/GeometryUtils.js");

INCLUDE.SCRIPT("res/resource.audio");

INCLUDE.SCRIPT("lib/math.js");

INCLUDE.SCRIPT("lib/audio/audio.js");

INCLUDE.SCRIPT("lib/update.js");

// INCLUDE.SCRIPT("lib/stars.js");

// INCLUDE.SCRIPT("lib/star.js");

// INCLUDE.SCRIPT("lib/Projector.js");

INCLUDE.SCRIPT("js/mirror.js");

INCLUDE.SCRIPT("lib/events/keyboard.js");

INCLUDE.SCRIPT("lib/loaders/BlendCharacter.js");

INCLUDE.SCRIPT("lib/loaders/BlendCharacterGui.js");

if (PROGRAM.STREAM_TEXTURE == true) {
  INCLUDE.SCRIPT("lib/rtc/checkCamera.js");
  INCLUDE.SCRIPT("lib/rtc/initStream.js");
}

INCLUDE.SCRIPT("lib/AnimationClipCreator.js");

if (PROGRAM.DDSLoader == true) {
  INCLUDE.SCRIPT("lib/loaders/DDSLoader.js");
}

if (PROGRAM.OBJLoader == true) {
  INCLUDE.SCRIPT("lib/loaders/OBJLoader.js");
}

if (PROGRAM.MTLLoader == true) {
  INCLUDE.SCRIPT("lib/loaders/MTLLoader.js");
}

if (PROGRAM.MD2Loader == true) {
  INCLUDE.SCRIPT("lib/loaders/MD2Loader.js");
}
if (PROGRAM.ColladaLoader == true) {
  INCLUDE.SCRIPT("lib/loaders/collada/Animation.js");
  INCLUDE.SCRIPT("lib/loaders/collada/AnimationHandler.js");
  INCLUDE.SCRIPT("lib/loaders/collada/KeyFrameAnimation.js");
  INCLUDE.SCRIPT("lib/loaders/ColladaLoader.js");
}
if (PROGRAM.MD2Character == true) {
  INCLUDE.SCRIPT("lib/Gyroscope.js");
  INCLUDE.SCRIPT("lib/OrbitControls.js");
}

if (PROGRAM.FBXLoader == true) {
  INCLUDE.SCRIPT("lib/loaders/FBXLoader.js");
}

if (PROGRAM.RAYCAST == true) {
  INCLUDE.SCRIPT("lib/ray.js");
}

if (PROGRAM.LIGHTS == true) {
  INCLUDE.SCRIPT("lib/lights.js");
}

if (PROGRAM.MATERIALS == true) {
  INCLUDE.SCRIPT("lib/materials.js");
  INCLUDE.SCRIPT("lib/geo.js");
}

if (PROGRAM.PANORAMA_TEXTURES == true) {
  INCLUDE.SCRIPT("lib/panorama.js");
}
if (PROGRAM.CANNON == true) {
  INCLUDE.SCRIPT("lib/cannon/cannon/build/cannon.js");
  INCLUDE.SCRIPT("lib/cannonBeta.js");
}

if (PROGRAM.CANNON == true) {
  INCLUDE.SCRIPT("lib/cannon/cannon/build/cannon.js");
  INCLUDE.SCRIPT("lib/cannonBeta.js");
}
if (PROGRAM.THREEX_AR == true) {
  //INCLUDE.SCRIPT("js/three.js")
  INCLUDE.SCRIPT("lib/threexWebAr/js/stats.min.js");
  INCLUDE.SCRIPT("lib/threexWebAr/js/vendor/svd.js");
  INCLUDE.SCRIPT("lib/threexWebAr/js/vendor/posit1-patched.js");
  INCLUDE.SCRIPT("lib/threexWebAr/js/vendor/cv.js");
  INCLUDE.SCRIPT("lib/threexWebAr/js/vendor/aruco.js");
  INCLUDE.SCRIPT("lib/threexWebAr/js/threex.webcamgrabbing.js");
  INCLUDE.SCRIPT("lib/threexWebAr/js/threex.imagegrabbing.js");
  INCLUDE.SCRIPT("lib/threexWebAr/js/threex.videograbbing.js");
  INCLUDE.SCRIPT("lib/threexWebAr/js/threex.jsarucomarker.js");
}

INCLUDE.SCRIPT("lib/voice/voice.js");
