<script>
  // Lógica del componente
  import Icon from "fa-svelte";
  import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
  let icon = faHome;
  let someText = `SisifoDev`;
</script>

<style>
  /* Estilos del componente */
  .Navbar {
    background: var(--medium-blue);
    height: 3.5em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    grid-area: nav;
  }
  .logo-menu {
    padding: 0 20px;
  }
  .nav ul {
    display: inline;
    justify-content: space-around;
    list-style-type: none;
  }
  .nav li {
    display: inline;

    text-align: center;
    margin: 0 10px 0 0;
  }

  .nav a {
    color: var(--light-gray);
    text-decoration: none;
  }
  .nav a:hover {
    color: var(--white-color);
    text-decoration: none;
    cursor: pointer;
  }

  h3 {
    font-size: 1em;

    /* color: var(--white-color); */
  }
</style>

<div class="Navbar">
  <div class="logo-menu">
    <h3>{someText}</h3>
  </div>
  <div class="nav">
    <ul>
      <li>

        <a href="#header">
          <Icon class="" icon={faHome} />
          Home
        </a>
      </li>
      <li>
        <a href="#services">Servicios</a>
      </li>
      <li>
        <a href="">Portafolio</a>
      </li>
      <li>
        <a href="#footer">Contactos</a>
      </li>
    </ul>
  </div>

  <!-- etiquetas HTML del componente -->
</div>
