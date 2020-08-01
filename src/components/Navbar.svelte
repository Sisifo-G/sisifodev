<script>
  // Lógica del componente
  import Home from "svelte-material-icons/Home.svelte";
  import Briefcase from "svelte-material-icons/Briefcase.svelte";
  import Git from "svelte-material-icons/Git.svelte";
  import Post from "svelte-material-icons/Post.svelte";
  import Email from "svelte-material-icons/Email.svelte";
  import CodeBraces from "svelte-material-icons/CodeBraces.svelte";

  let someText = `SisifoDev`;

  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
</script>

<style>
  /* Estilos del componente */
  .Navbar {
    background: var(--medium-blue);
    height: 3.5em;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    grid-area: nav;
    position: fixed;
    z-index: 100;
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

  /* .icono-menu {
    margin: 0;
    padding: 0;
  }
  .texto-menu {
    margin: 0 5px 0 0;
    padding: 0;
  } */
  .nav a:hover {
    color: var(--white-color);
    text-decoration: none;
    cursor: pointer;
  }

  h3 {
    font-size: 1em;

    /* color: var(--white-color); */
  }

  .badge {
    font-size: 0.8em;
    color: var(--white-color);
    background: var(--intense-pink);
    padding: 2px;
    border-radius: 3px;
  }

  @media screen and (max-width: 480px) {
    .Navbar {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 300px;
    }
    .nav {
      display: flex;
      flex-direction: column;
    }
    .nav ul {
      display: flex;
      flex-direction: column;
    }
    .nav ul li {
      padding: 10px 0;
    }
  }
</style>

<div class="Navbar">
  <div class="logo-menu">
    <h3>
      <CodeBraces {color} {size} {width} {height} {viewBox} />
      {someText}
    </h3>
  </div>
  <div class="nav">
    <ul>
      <li>

        <a href="#header">
          <!-- <Home {color} {size} {width} {height} {viewBox} /> -->
          Home
        </a>
      </li>
      <li>
        <a href="#services">

          <!-- <Briefcase {color} {size} {width} {height} {viewBox} /> -->
          Servicios
        </a>
      </li>
      <li>
        <a href="#proyectos">
          <!-- <Git {color} {size} {width} {height} {viewBox} /> -->
          Proyectos
        </a>
      </li>

      <li>
        <a href="#contacts">
          <!-- <Email {color} {size} {width} {height} {viewBox} /> -->
          Contactos
        </a>
      </li>
      <li>
        <a href="#blog">
          <!-- <Post {color} {size} {width} {height} {viewBox} /> -->
          Blog
          <sup>
            <span class="badge">Próximamente</span>
          </sup>
        </a>
      </li>
    </ul>
  </div>

  <!-- etiquetas HTML del componente -->
</div>
