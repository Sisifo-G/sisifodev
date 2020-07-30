<script>
  import BtnContactos from "./BtnContactos.svelte";

  let sisifoLogo = "https://i.ibb.co/VpxxSdK/sisifo-Logo.png";
  let rutaLogo =
    "https://www.htmlden.com/wp-content/themes/ks/img/web-developer-master-tn.svg";
  let imgFondo = "https://i.ibb.co/xCy1S18/path1.png";

  export let nombre;
  export let id;
</script>

<style>
  .Header {
    height: 600px;
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
    width: 500px;
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
</style>

<div class="Header">
  <div class="header-container">
    <div class="text-container">
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
