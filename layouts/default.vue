<template>
  <div>
    <b-navbar type="is-primary" :mobile-burger="false">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="images/BrianDLawrencelogoNarrow.jpg"
            alt="Brian D Lawrence"
          />
        </b-navbar-item>
      </template>
    </b-navbar>

    <div class="container column is-10">
      <Nuxt />
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>Copyright &copy; 2025 Brian Lawrence. All Rights Reserved.</p>
        <a href="https://www.linkedin.com/in/briandlawrence/"
          ><b-icon icon="linkedin" size="is-large" type="is-primary"
        /></a>
        <a href="https://github.com/BrianDLawrence"
          ><b-icon icon="github" size="is-large" type="is-primary"
        /></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "defaultLayout",
};
</script>
