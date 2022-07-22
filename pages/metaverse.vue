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
            developer kit in 2014. At that time, there was no formal
            marketplace, and you had to create your own VR spaces or download
            programs from other devs to try things out.
          </p>
          <p>
            I created some virtual worlds, including a recreation of Aech's
            basement (Ready Player One) in Unity, and explored web-based XR tech
            with a-frame and JavaScript. Feel free to check out a slimmed-down
            version of <NuxtLink to="/vrdemo">the basement</NuxtLink>.
          </p>
          <p>
            In 2017 - I gave a talk at Cerner DevCon - an internal developers
            conference for Cerner associates titled, "Evanesco Reality - VR & AR
            in Healthcare ." In that talk, a colleague and I dove into the
            history of VR/AR (Now known as eXtended Reality or XR) and the
            potential for XR to change health care. In addition, we explored how
            XR was used at that time primarily in education and as an occasional
            prep tool in
            <a
              href="https://www.today.com/health/inoperable-twin-baby-saved-innovative-heart-surgery-using-virtual-reality-t66211"
              >surgery</a
            >. After that talk, we created an internal intranet group to
            continue to garner interest from like-minded Cerner associates.
          </p>
          <p>
            Today, I am currently working on several projects in the
            web3/blockchain space. One of them is a
            <a href="https://web3suite.vercel.app/">web3 platform</a> that acts
            as a digital metaverse and web3 coach for companies, brands, or
            influencers. In addition, I continue to attempt to keep up to date
            on XR-related technologies, primarily using Unity.
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
