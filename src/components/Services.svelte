<script>
  import BtnContactos from "./BtnContactos.svelte";
  import Whatsapp from "svelte-material-icons/Whatsapp.svelte";
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
</script>

<style>
  .Services {
    padding: 50px 90px 0 90px;
    height: 600px;
    grid-area: services;
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
    grid-template-areas: "card-basico card-estandar card-premium";
    grid-gap: 20px;
  }

  .card {
    background: var(--light-blue);

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
  .card-footer {
    background: var(--medium-blue);
    width: 100%;
    height: 90px;
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
</style>

<div class="Services">
  <h2>Planes y servicios</h2>
  <p>
    Elige el plan que mas se acomode a tus necesidades y ponte en contacto con
    nosotros
  </p>
  <div class="container-planes">
    <div class="card card-basico">
      <div class="card-header">
        <h3>Básico</h3>

      </div>
      <div class="card-body">
        <ul>
          <li>Página web para tu negocio</li>
          <li>1 año de hosting y dominio</li>
          <li>Sitio web adaptable a cualquier dispostivo</li>
          <li>Correo Empresarial</li>

        </ul>
      </div>
      <div class="card-footer">
        <BtnContactos />
      </div>
    </div>

    <div class="card card-estandar">
      <div class="card-header">
        <h3>Estándar</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>Página web para tu negocio</li>
          <li>1 año de hosting y dominio</li>
          <li>Sitio web adaptable a cualquier dispostivo</li>
          <li>Correo Empresarial</li>

        </ul>
      </div>
      <div class="card-footer">
        <BtnContactos />
      </div>
    </div>

    <div class="card card-premium">
      <div class="card-header">
        <h3>Premium</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>Página web para tu negocio</li>
          <li>1 año de hosting y dominio</li>
          <li>Sitio web adaptable a cualquier dispostivo</li>
          <li>Correo Empresarial</li>

        </ul>
      </div>
      <div class="card-footer">
        <BtnContactos />
      </div>
    </div>

  </div>

</div>
