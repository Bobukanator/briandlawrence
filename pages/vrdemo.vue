<template>
  <brianvrworld></brianvrworld>
</template>
<script>
import Brianvrworld from "../components/brianvrworld.vue";
import aframe from "aframe";
import aframephysics from "aframe-physics-system";
import teleportcontrols from "aframe-teleport-controls";

export default {
  name: "vrdemo",
  components: { Brianvrworld },
};
</script>
