<template>
  <h2 class="fw-bolder">Módulos do curso</h2>

  <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          Módulo 1
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseOne"
        class="accordion-collapse collapse show"
        data-bs-parent="#accordionPanelsStayOpenExample"
      >
        <div class="accordion-body">
          <ul>
            <li><strong>primeiro item</strong></li>
            <li><strong>segundo item</strong></li>
            <li><strong>terceiro item</strong></li>
            <li><strong>quarto item</strong></li>
            <li><strong>quinto item</strong></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseTwo"
        >
          Módulo 2
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseTwo"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionPanelsStayOpenExample"
      >
        <div class="accordion-body">
          <ul>
            <li><strong>primeiro item</strong></li>
            <li><strong>segundo item</strong></li>
            <li><strong>terceiro item</strong></li>
            <li><strong>quarto item</strong></li>
            <li><strong>quinto item</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="row text-center mt-4">
    <div class="col">
      <RouterLink to="/inscription"
        ><a class="btn btn-dark" role="button">Realizar Inscrição</a></RouterLink
      >
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss"></style>
