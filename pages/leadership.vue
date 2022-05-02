<template>
  <section>
    <div class="content">
      <p>
        I have led various organizations and initiatives for over two decades,
        both professionally and personally. I have found that the best leaders
        are like the best parents. They give their teams the time each
        individual requires to grow and be productive.
      </p>
      <p>
        I have managed various roles, including software engineers, user
        experience designers & researchers, project managers, system analysts,
        and design managers.
      </p>
      <p>
        Career coaching and the development of others are one of my passions.
        Early in my career, I had the opportunity to be a founding member of a
        young professional employee resource group. As part of my
        responsibilities, I drove career development programs. Much of what I
        learned through those programs, I have been able to bring to my
        management style.
      </p>
      <p>
        I believe that leadership is a skill that you can learn. Therefore,
        besides learning by experience, I relied on mentors and read as much as
        possible on the topic. A book I read called the Leader's Compass
        introduced the concept of a Leadership Philosophy, which you can read
        below:
      </p>
    </div>
    <brianleadership></brianleadership>
  </section>
</template>
<script>
import brianleadership from "../components/leadershipphilosophy.vue";

export default {
  name: "Leadership",
  components: { brianleadership },
  head() {
    return {
      title: "Leadership",
      meta: [
        {
          name: "description",
          hid: "description",
          content:
            "I have led various organizations and initiatives for over two decades, both professionally and personally.",
        },
      ],
    };
  },
};
</script>
