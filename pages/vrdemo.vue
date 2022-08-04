<template>
  <brianvrworld v-if="allVRScriptsLoaded"></brianvrworld>
</template>
<script>
import Brianvrworld from "../components/brianvrworld.vue";

export default {
  name: "vrdemo",
  components: { Brianvrworld },
  head() {
    return {
      title: "VR Demo",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "This a VR demo using a-frame and JavaScript.",
        },
      ],
      script: [
        {
          hid: "aframe",
          src: "https://aframe.io/releases/1.3.0/aframe.min.js",
          defer: true,
          callback: () => {
            this.isAFrameLoaded = true;
          },
        },
        {
          hid: "aframe-teleport",
          src: "https://unpkg.com/aframe-teleport-controls/dist/aframe-teleport-controls.min.js",
          defer: true,
          callback: () => {
            this.isAFrameTeleportLoaded = true;
          },
        },
      ],
    };
  },
  data() {
    return {
      isAFrameLoaded: false,
      isAFrameTeleportLoaded: false,
    };
  },
  computed: {
    allVRScriptsLoaded() {
      return this.isAFrameLoaded && this.isAFrameTeleportLoaded;
    },
  },
};
</script>
