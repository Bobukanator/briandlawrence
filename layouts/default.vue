<template>
  <div>
    <b-navbar type="is-primary">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="~assets/BLawCompact_WhiteTransparent.png"
            alt="Brian D Lawrence"
          />
        </b-navbar-item>
      </template>
    </b-navbar>

    <div class="container column is-10">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: "defaultLayout",
};
</script>
