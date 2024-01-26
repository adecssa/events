<template>
  <!-- <HeaderComponent /> -->
  <div class="container px-2">
    <RouterView></RouterView>
  </div>
  <FooterComponent />
</template>

<script setup>
import { RouterView } from 'vue-router'
//import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<style lang="scss"></style>
