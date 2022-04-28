<template>
  <brianleadership></brianleadership>
</template>
<script>
import brianleadership from "../components/brianleadership.vue";

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
