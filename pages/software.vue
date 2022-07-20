<template>
  <section>
    <h1 class="title has-text-centered">
      Software <b-icon icon="microsoft-visual-studio-code"></b-icon>
    </h1>
    <div class="content">
      <div class="columns is-vcentered is-multiline">
        <div class="column is-8">
          <p>
            My identity as a software developer started early in my life when my
            father surprised me with a Macintosh 512K sometime around 1987. I
            learned some rudimentary scripting to make sure the Mac would
            display a warning message for my sisters if they decided to use my
            Mac!
          </p>
          <p>
            Later in life, sometime around 1994, I started playing a game called
            MajorMUD, a text-based role-playing game. One of the problems with
            this game was that it was very time intensive requiring many hours
            to gain levels. To avoid spending excessive time killing zombies in
            the graveyard, I created my first program to handle that tedious
            task. The program was built using a scripting language similar to C
            called 'SALT.' It was not very complicated, but from that moment on,
            I was absolutely hooked. I was fortunate enough to be able to take
            some programming classes in high school and was accepted into the
            Computer Science program at Drexel University in 2000.
          </p>
          <p>
            I started my coding career as a software engineering intern at
            Siemens Healthcare in September 2002 while still studying at Drexel.
            I had some amazing bosses at Siemens, and they gave me the option to
            continue to work while I finished my studies at Drexel. I graduated
            with honors in 2005. I worked as a software engineer until 2008,
            when I started scrum mastering and eventually managing engineers in
            2010. During my time programming at Siemens, I programmed primarily
            in C++, Java, and Javascript.
          </p>
          <p>
            At Siemens, I had to become familiar with Healthcare industry
            standards like DICOM and HL7 while also learning internal platforms
            such as Syngo and Soarian. At the time, Syngo was built on C++ using
            MFC, and Soarian was constructed primarily in Java using J2EE.
          </p>
          <p>
            Once my day-to-day job moved towards managing, I found other ways to
            keep my technical skills alive. I have been involved with multiple
            side hustles and fun projects over the years, giving me the chance
            to program in JavaScript using Angular, node, mongo, python, and
            recently Solidity and Vue.
          </p>
          <p>
            In my current role as owner of Spero Autem LLC, I have devoted more
            time to product creation, primarily using Javascript in VUE and
            NUXT. In fact, this personal website is built using NUXT version 2.
            However, I am confident that regardless of my non-coding
            responsibilities, I will ALWAYS find time to program. In 2022, I
            started heavily using
            <a href="https://github.com/BrianDLawrence">Github</a> for my
            current projects. In previous years, I have used SVN, BitBucket, and
            ClearCase as a source code repository.
          </p>
        </div>

        <div class="column">
          <b-image
            src="images/NUXT_Cert.png"
            alt="Soarian Clinicals Logo"
          ></b-image>
          <b-image
            src="images/SoarianClincalslogo.png"
            alt="Soarian Clinicals Logo"
          ></b-image>
          <b-image
            src="images/SyngoTrainingCert2003.jpeg"
            alt="Software training certificate"
          ></b-image>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Software",
  head() {
    return {
      title: "Software",
      meta: [
        {
          name: "description",
          hid: "description",
          content:
            "I have experience developing and integrating enterprise healthcare software using C++, Java, and JavaScript.",
        },
      ],
    };
  },
};
</script>
