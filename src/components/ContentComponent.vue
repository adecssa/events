<template>
  <div class="row content">
    <div class="col-md-7 col-sm-12">
      <h2 class="fw-bolder">Motivação</h2>
      <p class="content-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio explicabo reiciendis at
        adipisci, expedita provident corrupti, obcaecati accusamus odit enim ipsum.
      </p>

      <h3 class="fw-bolder mt-5">O que vai ser ensinado e por quê ?</h3>
      <p class="content-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio explicabo reiciendis at
        adipisci, expedita provident corrupti, obcaecati accusamus odit enim ipsum.
      </p>

      <h3 class="fw-bolder mt-5">Quando será e como vai funcionar</h3>
      <p class="content-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio explicabo reiciendis at
        adipisci, expedita provident corrupti, obcaecati accusamus odit enim ipsum.
      </p>
    </div>

    <div class="col-md-5 col-sm-12">
      <ModulesComponent />
    </div>
  </div>
</template>

<script setup>
import ModulesComponent from './ModulesComponent.vue'
</script>

<style lang="scss">
.content {
  margin-top: 5%;
}

.content-description {
  text-align: justify;
}
</style>
