<template>
  <section>
    <h1 class="title has-text-centered">
      Entrepreneur <b-icon icon="lightbulb-on-outline"></b-icon>
    </h1>
    <div class="content">
      <p>
        In 2008, I read some
        <a href="https://www.pinterest.com/blawrence57/life-changing-books/"
          >fantastic books</a
        >
        like Think and Grow Rich, The 4-hour workweek, and Rich Dad - Poor Dad.
        These books gave me the confidence and drive to pursue entrepreneurial
        activities on my nights and weekends. These activities have taught me
        more than any book could while enabling me to meet and work closely with
        fantastic like-minded people.
      </p>
      <p>
        The following are various entrepreneurial like projects I have worked on
        over the years. I haven't had financial success with these projects yet;
        however, I have enjoyed the time I have spent and the things I have
        learned because of these activities. I suspect that I will always be
        involved in some type of fun project throughout my life!
      </p>
    </div>
    <brianprojects></brianprojects>
  </section>
</template>
<script>
import brianprojects from "../components/brianprojects.vue";
export default {
  name: "Entrepreneur",
  head() {
    return {
      title: "Entrepreneur",
      meta: [
        {
          name: "description",
          hid: "description",
          content:
            "I have been pursuing entrepreneurial activities since 2008 as the founder of two LLCs and several side projects.",
        },
      ],
    };
  },
  components: { brianprojects },
};
</script>
