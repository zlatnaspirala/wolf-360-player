
# wolf-360-player

## 360 video Player with posibility of upgrades in AR 3d aspects.
## Commercial project

 - Custom css make your own design.
 - Add any other 3d object intro scene
   with three.js


It is a clear javascript custom methodology in most simpliest way.
I use procedural aspect started from application/youtube.js In all scripts i
use simple function call for example :
  - PLAY()
  - PAUSE()

It is very descriptively with one basic programming role `single responsibility`.

[Not in use] Actually not in use but can be implemented if you have different idea.
[Formats - js, html ...]
[External licence]

├── Root/
|   ├── res/
|   |  └── video360/
|   |    └── video/  [Formats .mp4, .ogg] Fix all modern browsers
|   |    └── images/ [Formats .png]
|   ├── css/
|   |   └── style.css [Formats css - style]
|   ├── fonts/
|   |   └── [Formats json ] [Just don't remove file LICENCE from this folder]
|   ├── js/
|   |   └──camera.js
|   |   └──import.js
|   |   └──came.js
|   |   └──camera.js
|   ├── lib/ [This is only active scripts in the project]
             [loadScript.js is important ofr loading scripts]
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
|   |    └──/voice/voice.js
|   ├── index.html
|   ├── manifest.web [to improve PWA]

Credits:

  Video used just for presentation demo:
  https://vimeo.com/214401712
