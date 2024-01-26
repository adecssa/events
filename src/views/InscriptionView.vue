<template>
  <HeroComponent
    title="Capacitar Kids"
    description="Promovendo uma melhor capacitação"
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
      <input type="text" class="form-control" id="fullname" placeholder="Ex: José Maria" />
    </div>

    <div class="col-md-6">
      <label for="church" class="form-label fw-bolder">Igreja</label>
      <input type="text" class="form-control" id="church" placeholder="Ex: Assembléia de Deus" />
    </div>

    <div class="col-md-2">
      <label for="inputZip" class="form-label fw-bolder">Cep</label>
      <input type="text" class="form-control" id="inputZip" placeholder="Ex: 35334-000" />
    </div>

    <div class="col-md-4">
      <label for="inputAddress" class="form-label fw-bolder">Rua</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="Ex: Maria Torres" />
    </div>

    <div class="col-md-2">
      <label for="inputNumber" class="form-label fw-bolder">Número</label>
      <input type="text" class="form-control" id="inputNumber" placeholder="Ex: 12" />
    </div>

    <div class="col-md-4">
      <label for="inputCity" class="form-label fw-bolder">City</label>
      <input
        type="text"
        class="form-control"
        id="inputCity"
        placeholder="Ex: São Sebastião do Anta"
      />
    </div>

    <div class="col-md-6">
      <label for="inputComplement" class="form-label fw-bolder">Complemento</label>
      <input type="text" class="form-control" id="inputComplement" placeholder="Ex: AP 120" />
    </div>

    <div class="col-md-6">
      <label for="inputPhone" class="form-label fw-bolder">Telefone/Celular</label>
      <input type="text" class="form-control" id="inputPhone" placeholder="Ex: 33 9 9985 4951" />
    </div>

    <div class="col-md-6 mt-4 mb-4">
      <div class="form-check form-switch">
        <label class="form-check-label fw-bolder" for="flexSwitchCheckDefault"
          >Faz parte do ministério infantil ?</label
        >
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      </div>
    </div>

    <div class="col-12">
      <div class="d-grid">
        <button type="button" class="btn btn-success btn-lg">FINALIZAR INSCRIÇÃO</button>
      </div>
    </div>
  </form>
  <br />
  <br />
  <RouterLink to="/children">children</RouterLink>
</template>

<script setup>
import HeroComponent from '@/components/HeroComponent.vue'
import { RouterLink } from 'vue-router'
</script>

<style lang="scss">
/* CSS media query dentro de um stylesheet */
@media (min-width: 950px) {
  .form-content {
    margin-left: 10%;
    margin-right: 10%;
  }
}
</style>
