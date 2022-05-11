<template>
  <div class="content">
    <a-scene physics>

      <img id="city" src="images/henning-witzel-unsplash.jpg">
      <img id="wall" src="images/vintagewoodwall.jpg">
      
      <a-box
        position="-1 4 -3"
        rotation="0 45 0"
        color="green"
        dynamic-body
      ></a-box>
      
      <a-plane
        id="floor"
        position="0 1 -4"
        rotation="-90 0 0"
        width="40"
        height="40"
        color="gray"
        static-body
      ></a-plane>
      <a-plane
        id="ceiling"
        position="0 6 -4"
        rotation="90 0 0"
        width="40"
        height="40"
        color="blue"
        static-body
      ></a-plane>

      <a-entity
        gltf-model="BLawPixelPerson.glb"
        position="1.5 0.4 -4.5"
        rotation="-90 180 0"
        scale=".3 .3 .3"
      ></a-entity>

       <a-sky id="image-360" radius="100" src="#city"></a-sky>
       <a-box id="northwall1" 
        position="-5 3 -5" 
        scale="10 5 .1"
        rotation="0 0 0"
        src="#wall">
        </a-box>
        <a-box id="northwall2" 
        position="5 3 -5" 
        scale="10 5 .1"
        rotation="0 0 0"
        src="#wall">
        </a-box>
        <a-box id="eastwall1" 
        position="10 3 0" 
        scale="10 5 .1"
        rotation="0 90 0"
        src="#wall">
        </a-box>
        <a-box id="westwall1" 
        position="-10 3 0" 
        scale="10 5 .1"
        rotation="0 90 0"
        src="#wall">
        </a-box>

  
    </a-scene>
  </div>
</template>
<script>
export default {
  name: "BrianVrWorld",
};
</script>