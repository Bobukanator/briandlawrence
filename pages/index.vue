<template>
  <section class="section">
    <div class="columns">
      <card title="Leadership" icon="human-greeting" link="/leadership">
        I have led various organizations and initiatives for over two decades,
        both professionally and personally. Leadership is a skill that you can
        learn. To be a good leader, you need experience, but you also need to
        educate yourself regularly.
      </card>

      <card
        title="Entrepreneur"
        icon="lightbulb-on-outline"
        link="/entrepreneur"
      >
        In 2008, I read some fantastic books like Think and Grow Rich, The
        4-hour workweek, and Rich Dad - Poor Dad. These books gave me the
        confidence and drive to pursue entrepreneurial activities on my nights
        and weekends.
      </card>

      <card title="Coaching" icon="account-tie-voice-outline" link="/coaching">
        Over the years spent in corporate, I found that one of my true passions
        is helping people with their careers while coaching them to balance
        their drive for success and personal life. This passion has led to
        creating career-focused projects, websites, and even a startup.
      </card>

      <card title="Software" icon="microsoft-visual-studio-code" link="/tech">
        My first program used a scripting language similar to C called 'SALT' to
        build scripts for my RPG MUD character to earn experience. Over the
        years, I have programmed in C++, C#, Java, JavaScript, Python, Perl, and
        most recently in Solidity.
      </card>

      <card title="MetaVerse" icon="virtual-reality" link="/vrdemo">
        I have been dabbling in the VR space since I purchased the Oculus DK2 in
        2014. I created some virtual worlds, including a recreation of Aech's
        basement (Ready Player One) in Unity, and explored web-based XR tech
        with a-frame and JavaScript.
      </card>
    </div>
  </section>
</template>

<script>
import Card from "~/components/Card";

export default {
  name: "IndexPage",
  components: {
    Card,
  },
  head() {
    return {
      title: "Technology Leader",
      meta: [
        {
          name: "description",
          hid: "description",
          content:
            "Technology Leader, entrepreneur, software engineer, HCI oriented Computer Scientist, self-help nerd, world traveler, lover of life & my wife.",
        },
      ],
    };
  },
};
</script>
