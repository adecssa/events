<template>
  <p>Hello Word !!!</p>

  <RouterLink to="/about">About</RouterLink>
  <br />
  <RouterLink to="/children">children</RouterLink>

  <br />
  <RouterLink to="/inscription">Inscription</RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss"></style>
