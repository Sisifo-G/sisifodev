<script>

</script>

<style>
  .Portfolio {
    padding: 50px 90px 0 90px;
    height: 100vh;
    width: 100vw;
    grid-area: portfolio;
  }
  h2 {
    text-align: center;
    font-size: var(--title-section);
    color: var(--intense-green);
  }

  .proyectos-container {
    display: grid;
    grid-template-areas: "proyecto1 proyecto2 proyecto3 proyecto4";
  }
  .proyecto1 {
    grid-area: proyecto1;
  }
  .proyecto2 {
    grid-area: proyecto2;
  }
  .proyecto3 {
    grid-area: proyecto3;
  }
  .proyecto4 {
    grid-area: proyecto4;
  }
</style>

<div class="Portfolio" id="proyectos">
  <h2>Proyectos Realizados</h2>
  <div class="proyectos-container">
    <div class="proyecto1">primer</div>
    <div class="proyecto2">seg</div>
    <div class="proyecto3">ter</div>
    <div class="proyecto4">cuart</div>
  </div>
</div>
