<template>
  <HeroComponent
    title="Iusto praesentium"
    description="Deserunt odit quisquam ipsa, corporis laboriosam"
    :cta-button="false"
  />

  <div class="row mt-5 text-center">
    <div class="col-12">
      <h3>Inscrição</h3>
    </div>
  </div>

  <form class="row g-3 mt-4 form-content">
    <div class="col-md-6">
      <label for="fullname" class="form-label fw-bolder">Nome Completo</label>
      <input
        type="text"
        class="form-control"
        id="fullname"
        placeholder="Ex: José Maria"
        v-model="inscriptionForm.name"
      />
    </div>

    <div class="col-md-6">
      <label for="church" class="form-label fw-bolder">Igreja</label>
      <input
        type="text"
        class="form-control"
        id="church"
        placeholder="Ex: Assembléia de Deus"
        v-model="inscriptionForm.church"
      />
    </div>

    <div class="col-md-2">
      <label for="inputZip" class="form-label fw-bolder">Cep</label>
      <input
        type="text"
        class="form-control"
        id="inputZip"
        placeholder="Ex: 35334-000"
        v-model="zipSearch"
      />
      <input type="hidden" class="form-control" v-model="addresForm.zip" />
    </div>

    <div class="col-md-4">
      <label for="inputAddress" class="form-label fw-bolder">Rua</label>
      <input
        type="text"
        class="form-control"
        id="inputAddress"
        placeholder="Ex: Maria Torres"
        v-model="addresForm.street"
      />
    </div>

    <div class="col-md-2">
      <label for="inputNumber" class="form-label fw-bolder">Número</label>
      <input
        type="text"
        class="form-control"
        id="inputNumber"
        placeholder="Ex: 12"
        v-model="addresForm.number"
      />
    </div>

    <div class="col-md-4">
      <label for="inputComplement" class="form-label fw-bolder">Bairro</label>
      <input
        type="text"
        class="form-control"
        id="inputZone"
        placeholder="Ex: Centro"
        v-model="addresForm.zone"
      />
    </div>

    <div class="col-md-6">
      <label for="inputCity" class="form-label fw-bolder">Cidade</label>
      <input
        type="text"
        class="form-control"
        id="inputCity"
        placeholder="Ex: São Sebastião do Anta"
        v-model="addresForm.city"
      />
    </div>

    <div class="col-md-6">
      <label for="inputComplement" class="form-label fw-bolder">Complemento</label>
      <input
        type="text"
        class="form-control"
        id="inputComplement"
        placeholder="Ex: AP 120"
        v-model="addresForm.complement"
      />
    </div>

    <div class="col-md-6">
      <label for="inputPhone" class="form-label fw-bolder">Telefone/Celular</label>
      <input
        type="text"
        class="form-control"
        id="inputPhone"
        placeholder="Ex: 33 9 9999 9999"
        v-model="inscriptionForm.phone"
      />
    </div>

    <div class="col-md-6 mt-5">
      <div class="form-check form-switch">
        <label class="form-check-label fw-bolder" for="flexSwitchCheckDefault"
          >Faz parte do ministério infantil ?</label
        >
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          v-model="inscriptionForm.childrenMinistry"
        />
      </div>
    </div>

    <div class="col-md-12 mt-4">
      <div class="alert alert-light" role="alert">
        <small
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis aperiam commodi
          consequatur amet ea doloremque.</small
        >
      </div>
    </div>

    <div class="col-12">
      <div class="d-grid">
        <button
          type="button"
          class="btn btn-primary btn-lg"
          @click="createRegisterInscription()"
        >
          SALVAR
        </button>
      </div>
    </div>
  </form>
  <br />
  <br />
  <RouterLink to="/children">children</RouterLink>
</template>

<script setup>
import HeroComponent from '@/components/HeroComponent.vue'
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { createRegistration } from '@/lib/database'
import Swal from 'sweetalert2'

const zipSearch = ref('')

// const inscriptionForm = ref({
//   name: 'Dyuelber Rodrigues Miranda',
//   church: 'Assembléia de Deus',
//   childrenMinistry: false,
//   phone: '33999999999'
// })

// const addresForm = ref({
//   zip: '35170002',
//   street: 'Rua Equador',
//   number: '124',
//   zone: 'Caladinho',
//   city: 'Coronel Fabriciano',
//   complement: 'AP 102'
// })

const inscriptionForm = ref({
  name: '',
  church: '',
  childrenMinistry: false,
  phone: ''
})

const addresForm = ref({
  zip: '',
  street: '',
  number: '',
  zone: '',
  city: '',
  complement: ''
})

async function loading() {
  Swal.fire({
    text: 'Aguarde um momento...',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    }
  })
}

async function success(name) {
  name = name.split(' ')[0]

  Swal.fire({
    icon: 'success',
    title: 'Informações salvas!',
    html: `<strong>${name}</strong>, para confirmar a inscrição, realize o pagamento da taxa, clicando no botão abaixo`,
    confirmButtonText: 'Pagar Taxa'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = 'https://www.google.com/'
    }
  })
}

async function error(msg) {
  msg  = msg ? msg : 'Não foi possível salvar seus dados no momento, tente novamente mais tarde!';

  Swal.fire({
    icon: 'warning',
    text: msg
  })
}

async function createRegisterInscription() {
  
  validateFields().then((result) => {
    if (result === false) return error('Prencha todos os campos com as suas informações')

    save()
  })  
}

async function save() {
  const obj = {
    ...inscriptionForm.value,
    address: addresForm.value
  }

  loading()

  const result = await createRegistration(obj)
  if (result?.insertedId) {
    return success(inscriptionForm.value.name)
  }

  error()
}

async function validateFields() {
  if (
    inscriptionForm.value.name.length === 0 ||
    inscriptionForm.value.phone.length === 0 ||
    zipSearch.value.length === 0
  )
    return false

  return true
}

async function getCityByZip(zipCode) {
  const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${zipCode}`)

  const address = await response.json()
  if (!address.cep) return

  addresForm.value = {
    city: address.city || addresForm.value.city,
    street: address.street || addresForm.value.street,
    zip: address.cep || addresForm.value.zip,
    zone: address.neighborhood || addresForm.value.zone
  }
}

watch(zipSearch, async (newZipSearch) => {
  if (newZipSearch.length < 8) return

  try {
    await getCityByZip(newZipSearch)
  } catch (error) {
    console.log('watch ~ error:', error)
  }
})
</script>

<style lang="scss">
@media (min-width: 950px) {
  .form-content {
    margin-left: 10%;
    margin-right: 10%;
  }
}
</style>
