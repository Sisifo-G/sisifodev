<script>
  let sisifoLogo = "https://i.ibb.co/VpxxSdK/sisifo-Logo.png";
  let rutaLogo =
    "https://www.htmlden.com/wp-content/themes/ks/img/web-developer-master-tn.svg";
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
    justify-content: center;
    align-items: center;
    padding: 0 30px;
  }
  .text-container p {
    align-self: center;
    justify-self: center;
    font-size: 2em;
  }

  .text-container h2 {
    align-self: center;
    justify-self: center;
    color: var(--intense-green);
    font-size: 3.5em;
    margin: 0;
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
          Experto desarrollador web, con más de 5 años de experiencia en el
          mercado construyendo sitios personales, para pequeñas y medianas
          empresas.
        </p>
      </div>
    </div>
    <div class="img-container">
      <div class="img-logo">
        <img src={sisifoLogo} alt="Logo" />
      </div>

    </div>
  </div>

</div>
