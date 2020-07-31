<script>
  let calmedRuta = "https://i.ibb.co/GPDDT3Y/calmed.jpg";
  let maestroRuta = "https://i.ibb.co/cxYPXS8/Maestro-Heracles.jpg";
  let marinaRuta = "https://i.ibb.co/YWxMxG9/marina-stereo.jpg";
  let temploRuta = "https://i.ibb.co/BGb7ZfC/Real-Templo-Sagrado.jpg";
</script>

<style>
  .Portfolio {
    padding: 50px 90px 0 90px;

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
    background: var(--light-blue);
    -webkit-box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);
    -moz-box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);
    box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);

    border-radius: 5px;
    grid-area: proyecto1;
  }
  .proyecto2 {
    background: var(--light-blue);
    -webkit-box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);
    -moz-box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);
    box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);

    border-radius: 5px;
    grid-area: proyecto2;
  }
  .proyecto3 {
    background: var(--light-blue);
    -webkit-box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);
    -moz-box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);
    box-shadow: 10px 10px 35px 0px rgba(5, 5, 12, 0.75);

    border-radius: 5px;
    grid-area: proyecto3;
  }
  .proyecto4 {
    background: var(--light-blue);
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
  .img-proyectos:hover img {
    border-radius: 5px;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    filter: blur(1px);

    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
  .img-proyectos img {
    /* border: 1px solid var(--light-gray); */
    border-radius: 5px;
    width: 100%;
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
