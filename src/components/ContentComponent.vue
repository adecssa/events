<template>
  <div class="row content">
    <div class="col-md-7 col-sm-12">
      <h2 class="fw-bolder">Dolor sit amet consectetur</h2>
      <p class="content-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam velit repudiandae ullam temporibus quidem itaque consectetur doloribus odit totam repellat impedit ducimus doloremque, a expedita at inventore cupiditate, nostrum nam.
      </p>

      <p class="content-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam velit repudiandae ullam temporibus quidem itaque consectetur doloribus odit totam repellat impedit ducimus doloremque, a expedita at inventore cupiditate, nostrum nam.
      </p>

      <h3 class="fw-bolder mt-5">Optio explicabo reiciendis at
        adipisci</h3>
      <p class="content-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam velit repudiandae ullam temporibus quidem itaque consectetur doloribus odit totam repellat impedit ducimus doloremque, a expedita at inventore cupiditate, nostrum nam.
      </p>

      <h3 class="fw-bolder mt-5">Expedita provident corrupti</h3>
      <p class="content-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam velit repudiandae ullam temporibus quidem itaque consectetur doloribus odit totam repellat impedit ducimus doloremque, a expedita at inventore cupiditate, nostrum nam.
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
