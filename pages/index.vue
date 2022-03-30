<template>
  <section class="section">
    <div class="columns is-mobile">
      <card title="Technology" icon="github">
        See my code on <a href="https://github.com/Bobukanator"> GitHub </a>
      </card>

      <card title="Linkedin" icon="cellphone-link">
        Profile on
        <a href="https://www.linkedin.com/in/briandlawrence/"> LinkedIn </a>
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
};
</script>
