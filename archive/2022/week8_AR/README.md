### Hello AR

![Imgur](https://imgur.com/1OWwE3f.png)

<br/>


## Week 8 Assignment
#### Reading:
* [The Ultimate Display](http://worrydream.com/refs/Sutherland%20-%20The%20Ultimate%20Display.pdf)
* via Yohe Wang: [A channel on Medium that collected some AR-related articles](https://blog.prototypr.io/tagged/augmented-reality)

#### Option 1: 

Use of of the AR examples above to create a prototype of your own. You can choose to create a webcam based or a mobile experience. 

* Use custom markers, videos, models and assets to make a unique experience.
* Upload your project to GitHub and make sure to include a README.me with a short paragraph or image describing your project. 


#### Option 2: 

Continue work on your Computer Vision project from Week 7. https://github.com/areaofeffect/hello-world/tree/master/week7#assignment

</br>

## arjs design

* **Screen space vs World space**
	* [Coordinate Systems](https://learnopengl.com/Getting-started/Coordinate-Systems)
	* ![Imgur](https://i.imgur.com/G23RtCd.png)
	* [Prototyping AR](https://blog.prototypr.io/tagged/augmented-reality)
* **Billboarding**
	* Billboarding is a technique that adjusts an object's orientation so that it "faces" some target, usually the camera. The word faces is in quotes since it can have several meanings, as the tutorial will show. This technique is quite popular in games and applications that require a large number of polygons.
	* ![Imgur](https://i.imgur.com/wDuHWsp.jpg) 
* **Marker based (arjs)**
	* In one mode, you use <a-marker-camera>. In this mode, the camera is moving and the marker is static, fixed at 0,0,0. This way to work is more common for 3d programmers and is used in most examples.
	* ```<a-marker-camera preset='hiro'></a-marker-camera>```
* **Camera based (arjs)**
	* In the other mode, you use <a-marker>. It behaves the other way around: the camera is static at all times while the objects or markers are moving. The camera is fixed at 0,0,0 at all times and looks toward negative-z. Nevertheless this mode got a limitation, it can’t handle multiple independent markers at once.
	
	* ```html
		<!-- define your markers -->
		<a-marker preset='hiro'>
		  <!-- here define the content to display on top of the marker -->
		  <a-box position='0 0.5 0' material='color: red;'></a-box>
		</a-marker>
		<!-- define a simple camera -->
		<a-entity camera></a-entity>	
	  ```

* **AR / VR / MR / XR**
	* Augmented reality (AR) is a technology that superimposes a computer-generated image on a user's view of the real world.
	* Augmented reality (AR) adds digital elements to a live view often by using the camera on a smartphone. Examples of augmented reality experiences include Snapchat lenses and the game Pokemon Go. 
	* Virtual reality (VR) implies a complete immersion experience that shuts out the physical world.
	* Mixed reality (MR) strives to put fully digital objects that are trackable and intractable in the user's environment.
* **People, traffic and flow**
	* ![Imgur](https://imgur.com/cxvp6C5.jpg)

<br/>

## Notes

* Tools
	* [A-FRAME AR.js](https://aframe.io/blog/arjs/)
		* [AR.js GitHub](https://github.com/jeromeetienne/AR.js/blob/master/README.md)
		* Entity component system (Scenes)
		* Built with [A-Frame](https://aframe.io), a web framework for building virtual reality experiences. Make WebVR with HTML and Entity-Component. Works on Vive, Rift, desktop, mobile platforms.
		* [https://aframe.io/docs/0.9.0/introduction/models.html](https://aframe.io/docs/0.9.0/introduction/models.html)
		* [http://t-machine.org/index.php/2007/11/11/entity-systems-are-the-future-of-mmog-development-part-2/](http://t-machine.org/index.php/2007/11/11/entity-systems-are-the-future-of-mmog-development-part-2/)
	* [ARKit](https://developer.apple.com/documentation/arkit)
		* https://developer.apple.com/design/human-interface-guidelines/ios/system-capabilities/augmented-reality/ 
	* [ARCore (Android) Unity](https://developers.google.com/ar/develop/unity/quickstart-android)
		* [Google AR Guidelines](https://designguidelines.withgoogle.com/ar-design/)
	* [ARCore (iOS) Unity](https://developers.google.com/ar/develop/unity/quickstart-ios#arcore_sdk_for_unity_ios_support)
	* [ARToolkit (Cross Platform)](https://github.com/artoolkit)
	* [Spark AR Studio (Facebook)](https://sparkar.facebook.com/ar-studio/)
	* Vuforia (Unity)
	* [WebXR](https://webxr.io/webar-playground/app/) 
	* Hololense 
		* [https://developer.microsoft.com/en-us/mixed-reality](https://developer.microsoft.com/en-us/mixed-reality)
		* [https://docs.microsoft.com/en-us/windows/mixed-reality/](https://docs.microsoft.com/en-us/windows/mixed-reality/)
	* Googleglass
		* [https://developers.google.com/glass/design/principles](https://developers.google.com/glass/design/principles)
		* [https://support.google.com/maps/thread/11554255?hl=en](https://support.google.com/maps/thread/11554255?hl=en)
	* Physical prototyping
		* [Keynote for ar prototyping](https://developer.apple.com/videos/play/wwdc2018/808/)
	* .patt 
		* pattern file for marker
		* [https://stackoverflow.com/questions/47000523/a-frame-ar-js-marker-pattern-not-working](https://stackoverflow.com/questions/47000523/a-frame-ar-js-marker-pattern-not-working)
	* .gltf 3D format
		* [https://www.khronos.org/gltf/](https://www.khronos.org/gltf/)
		* [https://github.com/KhronosGroup/glTF-Sample-Models](https://github.com/KhronosGroup/glTF-Sample-Models)


* WebARonARCore
	* (android) [https://github.com/google-ar/WebARonARCore](https://github.com/google-ar/WebARonARCore)
	* (ios) [https://github.com/google-ar/WebARonARKit](https://github.com/google-ar/WebARonARKit)
	* (mozilla webxr) [https://apps.apple.com/us/app/webxr-viewer/id1295998056?ls=1](https://apps.apple.com/us/app/webxr-viewer/id1295998056?ls=1)

* Also, Using p5 and the camera [kcimc examples](https://kylemcdonald.github.io/cv-examples/FaceTracking/)
	* [JSARToolKit](https://github.com/kig/JSARToolKit)

<br/>

## examples


### example-1
render a box to the AR marker location

```
<a-box position='0 0.5 0' material='color: red;'></a-box>
```

### example-2
display 2D text and images to the AR marker location (billboarding)

```
<a-text position='0 0.5 0'  value="Hello, Tree!"></a-text>
<a-image rotation="0 0 0" src="assets/img/tree.png"></a-image>
```          

### example-3
load a custom model (gltf or obj) at the marker location

### example-4 (not working on mobile)
render div to plane

### example-video
render a video file (mp4 or webm) at the marker location on a 3D plane


### example multiple-markers

```
<script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
<script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>
<body style='margin : 0px; overflow: hidden;'>
  <a-scene embedded arjs='sourceType: webcam;'>
    <!-- handle marker with your own pattern -->
    <a-marker type='pattern' url='path/to/pattern-marker.patt'>
      <a-box position='0 0.5 0' material='color: red;'></a-box>
    </a-marker>

    <!-- handle marker with hiro preset -->
    <a-marker preset='hiro'>
      <a-box position='0 0.5 0' material='color: green;'></a-box>
    </a-marker>

    <!-- handle barcode marker -->
    <a-marker type='barcode' value='5'>
      <a-box position='0 0.5 0' material='color: blue;'></a-box>
    </a-marker>

    <!-- add a simple camera -->
    <a-entity camera></a-entity>
  </a-scene>
</body>
```

<br/>

## Custom Markers

![Imgur](https://imgur.com/kneNvpG.png)


* [Marker Generator](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)
* [how-to-create-your-own-marker via Medium](https://medium.com/arjs/how-to-create-your-own-marker-44becbec1105)
* [Barcode Markers: Barcode marker generator](http://www.artoolworks.com/support/applications/marker/)

```
<a-scene arjs='detectionMode: mono_and_matrix; matrixCodeType: 3x3;'></a-scene>
<a-marker type='barcode' value='5'></a-marker>
```

<br/>

## Publishing your Project

#### 1. Generate SSL Key and Cert

`openssl req -x509 -newkey rsa:4096 -keyout server1.example.com.key -out server1.example.com.pem -days 365 -nodes`

#### 2. run server.py
Navigate to the 'https://' url via your phone or browser.

#### 3. Optional: Install ngrok
`brew cask install ngrok`

[ngrok](https://ngrok.com/docs) is a tool that servers our local files on the web

Use the same port as your simplehttpserver:

`ngrok http 8080`

You can walk around and test your project on your mobile device.

<br/>

## Reference
![image](https://miro.medium.com/max/7016/1*b4drXJ3y496MqEXDveLH6Q.jpeg)

#### readings
* [The Ultimate Display](http://worrydream.com/refs/Sutherland%20-%20The%20Ultimate%20Display.pdf)
* [The Singularity is Near by RAY KURZWEIL](http://www.grtl.org/Singularity-Is-Near.pdf)

#### aframe inspector
* [https://github.com/aframevr/aframe-inspector](https://github.com/aframevr/aframe-inspector)

#### reports
* [the-real-reality-of-augmented-reality-codex](https://www.cognizant.com/whitepapers/the-real-reality-of-augmented-reality-codex4613.pdf)

#### other projects
* https://github.com/aframevr/a-painter/
* Torch
* Wiarframe
