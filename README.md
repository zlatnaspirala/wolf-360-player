
<h2> wolf-360-player </h2>

 360 video Player with posibility of upgrades in AR 3d aspects.
 Commercial project

 - Custom css make your own design.
 - Add any other 3d object intro scene
   with three.js


It is a clear javascript custom methodology in most simpliest way.
I use procedural aspect started from application/wolf360Player.js In all scripts i
use simple function call for example :

<pre>
  - PLAY()
  - PAUSE()
</pre>

This is complex project by self. Recommendation is usage of iframe. See iframe.html .
It is very descriptively with one basic programming role `single responsibility`.

[Not in use] Actually not in use but can be implemented if you have different idea.
[Formats - js, html ...]
[External licence]
[Note ...]

<pre>

├── Root/
|   ├── res/
|   |  └── video360/
|   |    └── video/  [Formats .mp4, .ogg] Fix all modern browsers
|   |    └── images/ [Formats .png]
|   ├── css/
|   |   └── style.css [Formats css - style]
|   ├── fonts/
|   |   └── [Formats json] [Just don't remove file LICENCE from this folder]
|   ├── js/
|   |   └──wolf360player.js [Note Start instance from here]
|   |   └──camera.js
|   |   └──import.js [You can important what ever 3d format]
|   |   └──onWindowResize.js
|   |   └──render.js
|   ├── lib/ [Note This is only active scripts in the project]
             [loadScript.js is most important for loading scripts]
|   |    └──/threejs/dat.gui.min.js
|   |    └──/threejs/GeometryUtils.js
|   |    └──/math.js
|   |    └──/update.js
|   |    └──/OrbitControls.js
|   |    └──/Gyroscope.js
|   |    └──/events/keyboard.js
|   |    └──/rtc/checkCamera.js
|   |    └──/rtc/initStream.js
|   |    └──/ray.js
|   |    └──/lights.js
|   |    └──/panorama.js
|   |    └──/voice/voice.js [Note Not tested!]
|   ├── index.html
|   ├── manifest.web [Note to improve audits/PWA]

</pre>

<h3> Credits: </h3>

  Video used just for presentation demo:
  https://vimeo.com/214401712

<h3> Live demo: </h3>

  https://maximumroulette.com/applications/wolf360/
