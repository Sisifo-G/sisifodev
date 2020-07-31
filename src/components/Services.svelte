<script>
  import BtnContactos from "./BtnContactos.svelte";
  import Rocket from "svelte-material-icons/Rocket.svelte";
  import StarFourPoints from "svelte-material-icons/StarFourPoints.svelte";
  import Store from "svelte-material-icons/Store.svelte";
  import Puzle from "svelte-material-icons/Puzzle.svelte";
  export let size = "2em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
</script>

<style>
  .card div h3 {
    margin-left: 5px;
  }
  .Services {
    padding: 50px 90px 0 90px;
    height: 100vh;
    /* width: 100vw; */
    grid-area: services;
    background: url(https://i.ibb.co/9wT34mY/deep-water.jpg) no-repeat;
    background-size: cover;
  }
  .Services h2 {
    text-align: center;
    font-size: var(--title-section);
    color: var(--intense-green);
  }

  .container-planes {
    display: grid;
    width: 100%;
    /* text-align: center; */
    margin: 90px auto;
    grid-template-areas: "card-basico card-estandar card-premium card-tiendas";
    grid-gap: 20px;
  }

  .card {
    background: var(--light-blue);
    -webkit-box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);
    -moz-box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);
    box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);

    border-radius: 5px;
    /* margin: 0 5px; */
    /* padding: 0 20px 20px 20px; */
  }

  .card-header {
    background: var(--medium-blue);
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px 5px 0 0;
  }
  .card-header h3 {
    margin: 0;
  }
  .card-body {
    padding: 0 20px;
    height: 160px;
  }
  .card-footer {
    background: var(--medium-blue);
    width: 100%;
    height: 90px;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 5px 5px;
  }
  .card-basico {
    grid-area: card-basico;
  }

  .card-estandar {
    grid-area: card-estandar;
  }

  .card-premium {
    grid-area: card-premium;
  }

  .card-tiendas {
    grid-area: card-tiendas;
  }
</style>

<div class="Services" id="services">
  <h2>Planes y servicios</h2>
  <!-- <p>
    Elige el plan que mas se acomode a tus necesidades y ponte en contacto con
    nosotros
  </p> -->
  <div class="container-planes">
    <div class="card card-basico">
      <div class="card-header">
        <div>
          <Rocket {color} {size} {width} {height} {viewBox} />
        </div>
        <div>
          <h3>Landing Page</h3>
        </div>

      </div>
      <div class="card-body">
        <p>
          Páginas de aterrizaje que transforman visitantes en oportunidades,
          invitando al usuario a dejar información a través del formulario, para
          conseguir contenidos e información de interés
        </p>
      </div>
      <div class="card-footer">
        <BtnContactos />
      </div>
    </div>

    <div class="card card-estandar">
      <div class="card-header">
        <div>
          <StarFourPoints {color} {size} {width} {height} {viewBox} />

        </div>
        <div>
          <h3>Web Start-Up</h3>
        </div>
      </div>
      <div class="card-body">
        <p>
          Soluciones ágiles, versátiles en prestaciones para emprendedores, que
          requieren abrir nuevas oportunidades en el mercado digital y a la vez
          optimizar sus costos.
        </p>
      </div>
      <div class="card-footer">
        <BtnContactos />
      </div>
    </div>

    <div class="card card-tiendas">
      <div class="card-header">
        <div>
          <Puzle {color} {size} {width} {height} {viewBox} />

        </div>
        <div>
          <h3>Web corporativas</h3>
        </div>
      </div>
      <div class="card-body">
        <p>
          Ejecución de proyectos de alto nivel de complejidad estructurado con
          equipos de desarrollo enfocados en el cumplimiento de los objetivos de
          comunicación de la organización
        </p>
      </div>
      <div class="card-footer">
        <BtnContactos />
      </div>
    </div>

    <div class="card card-premium">
      <div class="card-header">
        <div>
          <Store {color} {size} {width} {height} {viewBox} />

        </div>

        <div>
          <h3>Tiendas Online</h3>
        </div>
      </div>
      <div class="card-body">
        <p>
          Catálogos, carrito de compra, integraciones con sistemas de pago,
          diseñadas para incentivar ventas, destacando sus productos de manera
          llamativa al público.
        </p>
      </div>
      <div class="card-footer">
        <BtnContactos />
      </div>
    </div>

  </div>

</div>
