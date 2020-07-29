<script>
  import Whatsapp from "svelte-material-icons/Whatsapp.svelte";

  let sisifoLogo = "https://i.ibb.co/VpxxSdK/sisifo-Logo.png";
  let rutaLogo =
    "https://www.htmlden.com/wp-content/themes/ks/img/web-developer-master-tn.svg";
  let imgFondo = "https://i.ibb.co/xCy1S18/path1.png";

  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
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
    font-size: 2em;
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

  p.info {
    background: var(--intense-coral);
    border-radius: 25px;
    width: 150px;
    height: 50px;
    font-size: 1em;
    font-weight: 700;
    color: var(--white-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p.info:hover {
    cursor: pointer;
  }

  .img-fondo img {
    width: 500px;
    position: relative;
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
          Expertos en desarrollo web con más de 5 años de experiencia en el
          mercado, construyendo sitios personales, empresariales y tiendas
          online empresas.
        </p>

        <p class="info">
          <Whatsapp {color} {size} {width} {height} {viewBox} />
          Contáctanos
        </p>

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
