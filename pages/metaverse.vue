<template>
  <section>
    <h1 class="title has-text-centered">
      MetaVerse <b-icon icon="virtual-reality"></b-icon>
    </h1>
    <div class="content">
      <div class="columns is-vcentered is-multiline">
        <div class="column is-8">
          <p>
            I have been dabbling in the VR space since I purchased the Oculus
            DK2 in 2014. I created some virtual worlds, including a recreation
            of Aech's basement (Ready Player One) in Unity, and explored
            web-based XR tech with a-frame and JavaScript.
          </p>
        </div>
        <div class="column">
          <b-image
            src="images/Brian_Caleb_OculusRift.jpg"
            alt="Brian and son with an Oculus Rift"
          ></b-image>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Metaverse",
  head() {
    return {
      title: "Metaverse",
      meta: [
        {
          name: "description",
          hid: "description",
          content:
            "I have been dabling in Metaverse-like activities for many years.",
        },
      ],
    };
  },
};
</script>
