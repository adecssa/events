<template>
  <div
    lc-helper="background"
    class="container-fluid d-flex justify-content-center background-hero-img"
  >
    <div class="p-5 lc-block col-xl-7 col-lg-8 col-12 background-hero-text mb-5 mt-5">
      <div class="lc-block">
        <div editable="rich">
          <h2 class="fw-bolder display-3">{{ title }}</h2>
        </div>
      </div>
      <div class="lc-block col-md-8">
        <div editable="rich">
          <p class="lead">{{ description }}</p>
        </div>
      </div>
      <div class="lc-block" v-if="ctaButton">
        <RouterLink to="/inscription"
          ><a class="btn btn-dark" role="button">Realizar Inscrição</a></RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  ctaButton: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="scss">
.background-hero-img {
  //background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1124&amp;q=100');
  background-image: url('https://source.unsplash.com/jeOuI1uB9L4');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: darkgray;
  border-radius: 12px;
}

.background-hero-text {
  backdrop-filter: blur(6px) saturate(102%);
  -webkit-backdrop-filter: blur(6px) saturate(102%);
  background-color: rgba(255, 255, 255, 0.45);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>
