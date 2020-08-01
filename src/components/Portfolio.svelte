<script>
  let calmedRuta = "https://i.ibb.co/GPDDT3Y/calmed.jpg";
  let maestroRuta = "https://i.ibb.co/cxYPXS8/Maestro-Heracles.jpg";
  let marinaRuta = "https://i.ibb.co/YWxMxG9/marina-stereo.jpg";
  let temploRuta = "https://i.ibb.co/BGb7ZfC/Real-Templo-Sagrado.jpg";
</script>

<style>
  .Portfolio {
    padding: 50px 90px 0 90px;
    margin-bottom: 150px;
    height: 100vh;
    /* width: 100vw; */
    grid-area: portfolio;
  }
  h2 {
    text-align: center;
    font-size: var(--title-section);
    color: var(--intense-green);
  }

  .proyectos-container {
    display: grid;
    width: 100%;
    /* text-align: center; */
    margin: 90px auto;
    grid-template-areas:
      "proyecto1 proyecto2"
      "proyecto3 proyecto4";
    grid-gap: 20px;
  }
  .proyecto1 {
    -webkit-box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);
    -moz-box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);
    box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);

    border-radius: 5px;
    grid-area: proyecto1;
  }
  .proyecto2 {
    -webkit-box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);
    -moz-box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);
    box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);

    border-radius: 5px;
    grid-area: proyecto2;
  }
  .proyecto3 {
    -webkit-box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);
    -moz-box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);
    box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);

    border-radius: 5px;
    grid-area: proyecto3;
  }
  .proyecto4 {
    -webkit-box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);
    -moz-box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);
    box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);

    border-radius: 5px;
    grid-area: proyecto4;
  }
  .img-proyectos {
    border-radius: 5px;
    overflow: hidden;
  }
  .img-proyectos img {
    /* border: 1px solid var(--light-gray); */
    object-fit: cover;
    border-radius: 5px;
    width: 100%;
  }
  .img-proyectos:hover img {
    border-radius: 5px;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    filter: blur(1px);

    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    .Portfolio {
      padding: 50px 0;
    }
  }

  @media screen and (max-width: 768px) {
    /* acá van las reglas CSS que aplican para este media query */
    .proyectos-container {
      display: grid;
      width: 100%;
      /* text-align: center; */
      margin: 90px auto;
      grid-template-areas:
        "proyecto1 proyecto1"
        "proyecto2 proyecto2"
        "proyecto3 proyecto3"
        "Proyecto4 proyecto4";
      grid-gap: 20px;
    }
    .img-proyectos img {
      /* border: 1px solid var(--light-gray); */
      object-fit: cover;
      border-radius: 5px;
      height: 100%;
    }
  }
  @media screen and (max-width: 480px) {
    .Portfolio {
      /* padding: 50px 90px 0 90px; */
      margin-bottom: 0;
      margin-top: 40px;
      padding: 0px;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .proyectos-container {
      padding: 0;
      margin-top: 30px;
      width: 85%;
    }
    .proyecto4 {
      /* display: none; */
    }

    h2 {
      font-size: 1.7em;
    }
  }
  @media screen and (max-width: 320px) {
  }
</style>

<div class="Portfolio" id="proyectos">
  <h2>Proyectos Realizados</h2>
  <!-- <p>
    Elige el plan que mas se acomode a tus necesidades y ponte en contacto con
    nosotros
  </p> -->
  <div class="proyectos-container">
    <div class="proyecto1">
      <div class="img-proyectos">
        <img src={temploRuta} class="opacity" alt="fondo" />
      </div>
    </div>
    <div class="proyecto2">
      <div class="img-proyectos">
        <img src={marinaRuta} class="opacity" alt="fondo" />
      </div>
    </div>
    <div class="proyecto3">
      <div class="img-proyectos">
        <img src={maestroRuta} class="opacity" alt="fondo" />
      </div>
    </div>
    <div class="proyecto4">
      <div class="img-proyectos">
        <img src={calmedRuta} class="opacity" alt="fondo" />
      </div>
    </div>
  </div>
</div>
