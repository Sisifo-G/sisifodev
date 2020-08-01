<script>
  import BtnContactos from "./BtnContactos.svelte";

  let sisifoLogo = "https://i.ibb.co/VpxxSdK/sisifo-Logo.png";

  let imgFondo = "https://i.ibb.co/xCy1S18/path1.png";

  // export let nombre;
  // export let id;
</script>

<style>
  .Header {
    height: 100vh;
    /* width: 100vw; */
    margin-top: 70px;
    grid-area: header;
  }

  .header-container {
    display: grid;
    grid-template-areas:
      "text img"
      "text img";
    padding: 50px 90px 0 90px;
  }
  .text-container {
    grid-area: text;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    padding: 0 30px;
  }

  .text-container p {
    /* align-self: center; */
    /* justify-self: center; */
    margin-top: 2em;
    margin-bottom: 2em;
    font-size: 1.5em;
    max-width: 600px;
  }

  .text-container h2 {
    /* align-self: center; */
    /* justify-self: center; */
    color: var(--intense-green);
    font-size: 3.5em;
    margin: 0;
  }

  .text {
    position: absolute;
  }

  .img-fondo img {
    max-width: 500px;
    position: relative;
    z-index: -1;
  }

  .opacity {
    opacity: 0.1;
    filter: alpha(opacity=100);
  }

  .img-container {
    grid-area: img;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
  }

  .img-container img {
    max-width: 450px;
    align-self: center;
    justify-self: center;
  }
  @media screen and (max-width: 1024px) {
    .header-container {
      padding: 50px 0px 0 0px;
    }

    .text-container {
      grid-area: text;
      display: flex;
      /* justify-content: center; */
      /* align-items: center; */
      /* padding-right: 20px; */
    }
  }

  @media screen and (max-width: 768px) {
    /* acá van las reglas CSS que aplican para este media query */
    .text-container p {
      /* align-self: center; */
      /* justify-self: center; */
      margin-top: 2em;
      margin-bottom: 2em;
      font-size: 1.3em;
      max-width: 400px;
    }

    .text-container h2 {
      /* align-self: center; */
      /* justify-self: center; */
      color: var(--intense-green);
      font-size: 2.5em;
      margin: 0;
    }
    .img-container {
      display: none;
    }
  }
  @media screen and (max-width: 480px) {
    .Header {
      height: 100vh;
      /* width: 100vw; */
      margin-top: 40px;

      text-align: center;
      align-content: center;
    }
    .header-container {
      justify-content: center;
    }
    .img-fondo img {
      text-align: center;
      width: 300px;
      position: relative;
      z-index: -1;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .text-container p {
      text-align: center;
      font-size: 1.3em;
      max-width: 100%;
    }
    .img-fondo img {
      margin-top: 90px;
      max-width: 500px;
      position: relative;
      z-index: -1;
    }
    .contenedorText {
      width: 100%;
      justify-content: center;
    }
    .text-container {
      padding: 0;
    }
  }
  @media screen and (max-width: 320px) {
  }
</style>

<div class="Header" id="header">
  <div class="header-container">
    <div class="text-container contenedorText">
      <div class="text">
        <h2>SisifoDev</h2>
        <p>
          Diseñamos sitios web administrables, modernos, de fácil navegación,
          intuitivos y con altos estándares de calidad. Construímos tiendas en
          línea, landing page, sitios personalizados, ofrecemos soporte técnico,
          administración de contenidos, estrategias de comunicación y
          posicionamiento SEO para aumentar el tráfico de visitantes hacia tu
          sitio.
        </p>

        <!-- aquí va el btn -->
        <BtnContactos />

      </div>
      <div class="img-fondo">
        <img src={imgFondo} class="opacity" alt="fondo" />
      </div>
    </div>
    <div class="img-container">
      <div class="img-logo">
        <img src={sisifoLogo} alt="Logo" />
      </div>

    </div>
  </div>

</div>
