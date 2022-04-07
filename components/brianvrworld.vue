<template>
  <div class="content">
    <a-scene physics>
      <a-box
        position="-1 4 -3"
        rotation="0 45 0"
        color="green"
        dynamic-body
      ></a-box>
      <a-plane
        position="0 1 -4"
        rotation="-90 0 0"
        width="4"
        height="4"
        color="darkseagreen"
        static-body
      ></a-plane>
      <a-entity
        gltf-model="BLawPixelPerson.glb"
        position="1.5 .5 -4.5"
        rotation="-90 180 0"
        scale=".3 .3 .3"
      ></a-entity>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  </div>
</template>
<script>
export default {
  name: "BrianVrWorld",
};
</script>