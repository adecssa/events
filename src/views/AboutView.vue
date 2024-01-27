<script setup>
import { createRegistration, listRegistrations } from '@/lib/database'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const registers = ref([])

async function registrations() {
  registers.value = await listRegistrations()
}

async function createInscription() {
  const obj = {
    name: 'Dyuelber Rodrigues Miranda',
    church: 'Assembléia de Deus',
    childrenMinistry: false,
    phone: '33999999999',
    address: {
      zip: '35334000',
      street: 'Rua Equador',
      number: '124',
      zone: 'Caladinho',
      city: 'Coronel Fabriciano',
      complement: 'AP 102'
    }
  }

  registers.value = await createRegistration(obj)
}

onMounted(() => {
  registrations()
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

  <br />

  <button type="button" class="btn btn-sm btn-primary" @click="createInscription()">
    Criar Inscrição
  </button>

  <br />

  <RouterLink to="/">home</RouterLink>
</template>

<style lang="scss"></style>
