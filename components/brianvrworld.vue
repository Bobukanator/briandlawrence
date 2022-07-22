<!--
This is an aframe scene. Some of the assets used are thanks to: 

title:	Nintendo Entertainment System - 85' Scene
source:	https://sketchfab.com/3d-models/nintendo-entertainment-system-85-scene-cfd6dcb544fa4401b3dac20061d7fefb
author:	Miguel Adão (https://sketchfab.com/theauditor)

Apple II - https://sketchfab.com/digitalheritageaustralia
Macintosh - https://sketchfab.com/MJGOODWINART

-->
<template>
  <div class="content">
    <a-scene>
      <img id="city" src="images/henning-witzel-unsplash.jpg" />
      <img id="wall" src="images/vintagewoodwall.jpg" />
      <img id="topgun" src="images/TopGunPoster.jpg" />
      <img id="laststarfighter" src="images/LastStarfighterPoster.jpg" />
      <img id="starwars" src="images/starwarsorginalposter.jpg" />
      <img id="startrek" src="images/startrek_tng.jpg" />
      <img id="neverendingstory" src="images/neverendingstory.jpg" />

      <a-plane
        id="floor"
        position="0 -1 -4"
        rotation="-90 0 0"
        width="25"
        height="40"
        color="gray"
        static-body
      ></a-plane>
      <!--<a-plane
        id="ceiling"
        position="0 6 -4"
        rotation="90 0 0"
        width="25"
        height="25"
        color="blue"
        static-body
      ></a-plane>-->

      <a-sky id="image-360" radius="100" src="#city"></a-sky>
      <a-box
        id="northwall1"
        position="-5 1 -5"
        scale="10 5 .1"
        rotation="0 0 0"
        src="#wall"
      >
      </a-box>
      <a-box
        id="northwall2"
        position="5 1 -5"
        scale="10 5 .1"
        rotation="0 0 0"
        src="#wall"
      >
      </a-box>
      <a-box
        id="eastwall1"
        position="10 1 0"
        scale="10 5 .1"
        rotation="0 90 0"
        src="#wall"
      >
      </a-box>
      <a-box
        id="eastwall2"
        position="10 1 10"
        scale="10 5 .1"
        rotation="0 90 0"
        src="#wall"
      >
      </a-box>
      <a-box
        id="westwall1"
        position="-10 1 0"
        scale="10 5 .1"
        rotation="0 90 0"
        src="#wall"
      >
      </a-box>
      <a-box
        id="westwall2"
        position="-10 1 10"
        scale="10 5 .1"
        rotation="0 90 0"
        src="#wall"
      >
      </a-box>

      <a-box
        id="topgunposter"
        position="-4 1.5 -4.95"
        scale="1.5 2 .01"
        rotation="0 0 0"
        src="#topgun"
      >
      </a-box>
      <a-box
        id="startrek"
        position="0 1.5 -4.95"
        scale="1.5 2.3 .01"
        rotation="0 0 0"
        src="#startrek"
      >
      </a-box>
      <a-box
        id="starwars"
        position="4 1.5 -4.95"
        scale="1.5 2.2 .01"
        rotation="0 0 0"
        src="#starwars"
      >
      </a-box>
      <a-box
        id="laststarfighter"
        position="9.9 1.5 2"
        scale="1.5 2 .01"
        rotation="0 90 0"
        src="#laststarfighter"
      >
      </a-box>
      <a-box
        id="neverendingstory"
        position="9.9 1.5 6"
        scale="1.5 2.3 .01"
        rotation="0 90 0"
        src="#neverendingstory"
      >
      </a-box>

      <a-entity
        gltf-model="BLawPixelPerson.glb"
        position="1.5 -1.4 -4.5"
        rotation="-90 180 0"
        scale=".3 .3 .3"
      ></a-entity>

      <a-entity
        gltf-model="CRT_Television.glb"
        position="-8.5 1 -2.8"
        rotation="0 45 0"
        scale=".1 .1 .1"
      ></a-entity>

      <a-entity
        gltf-model="NES.glb"
        position="-7.3 0.65 -3.5"
        rotation="0 45 0"
        scale=".1 .1 .1"
      ></a-entity>

      <a-entity
        gltf-model="Controllers.glb"
        position="-5.1 0.65 .59"
        rotation="0 45 0"
        scale=".15 .15 .15"
      ></a-entity>

      <a-entity
        gltf-model="Controller1Cable.glb"
        position="-7.8 -0.99 -2.35"
        rotation="0 45 0"
        scale=".15 .15 .15"
      ></a-entity>

      <a-entity
        gltf-model="Controller2Cable.glb"
        position="-7.8 -0.99 -2.35"
        rotation="0 45 0"
        scale=".15 .15 .15"
      ></a-entity>

      <a-entity
        gltf-model="Zapper_Gun.glb"
        position="-7 -2.01 -3.6"
        rotation="-65 5 5"
        scale=".1 .1 .1"
      ></a-entity>

      <a-entity
        gltf-model="The_Legend_of_Zelda.glb"
        position="-6.75 -1.5 -3.5"
        rotation="-15 210 10"
        scale=".075 .075 .075"
      ></a-entity>

      <a-entity
        gltf-model="Armchair.glb"
        position="-5 -0.5 0"
        rotation="0 220 0"
        scale=".085 .085 .085"
      ></a-entity>

      <a-entity
        gltf-model="Drawer.glb"
        position="-8.2 -1 -3.2"
        rotation="0 225 0"
        scale=".15 .15 .15"
      ></a-entity>

      <a-entity
        gltf-model="Joust.glb"
        position="6.5 -1 -2.7 "
        rotation="-90 -45 0"
        scale=".05 .05 .05"
      ></a-entity>

      <!-- Vive. -->
      <a-entity vive-controls="hand: left"></a-entity>
      <a-entity vive-controls="hand: right"></a-entity>-->

      <!-- Rift.-->
      <a-entity oculus-touch-controls="hand: left"></a-entity>
      <a-entity oculus-touch-controls="hand: right"></a-entity>

      <a-entity
        id="left-hand"
        brush
        paint-controls="hand: left"
        ui
        teleport-controls
      >
      </a-entity>
      <a-entity
        id="right-hand"
        brush
        paint-controls="hand: right"
        ui
        teleport-controls
      >
      </a-entity>
    </a-scene>
  </div>
</template>
<script>
export default {
  name: "BrianVrWorld",
};
</script>