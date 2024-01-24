<script setup>
import { app, credentials } from '@/lib/database';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router'

const registers = ref([])

 async function listRegistrations() {
  const user = await app.logIn(credentials);

  registers.value = await user.functions.list_registrations();
}

onMounted(() => {
  listRegistrations()
})

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <ul>
      <li v-for="register in registers" :key="register.id">
        {{ register.name }}
      </li>
    </ul>

  <RouterLink to="/">home</RouterLink>
</template>

<style lang="scss"></style>
