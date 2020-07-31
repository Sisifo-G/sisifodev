<script>
  import Phone from "svelte-material-icons/Phone.svelte";
  import Whatsapp from "svelte-material-icons/Whatsapp.svelte";
  import Email from "svelte-material-icons/Email.svelte";
  import Facebook from "svelte-material-icons/Facebook.svelte";
  import Twitter from "svelte-material-icons/Twitter.svelte";
  import Instagram from "svelte-material-icons/Instagram.svelte";
  import Youtube from "svelte-material-icons/Youtube.svelte";
  import Git from "svelte-material-icons/Git.svelte";

  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let size2 = "2em";
  export let width2 = size2;
  export let height2 = size2;
</script>

<style>
  strong a {
    color: var(--intense-coral);
    text-decoration: none;
  }
  strong a:hover {
    color: var(--white-color);
    text-decoration: none;
    cursor: pointer;
  }
  .Footer {
    background: var(--medium-blue);
    /* height: 100px; */
    padding: 20px 160px;
    /* display: block; */
    /* align-items: center; */
    /* justify-content: space-around; */
    grid-area: footer;
    display: grid;
    grid-template-areas:
      "datos-contacto redes footer-nav"
      "copy-area copy-area copy-area ";
  }
  .footer-nav {
    /* justify-self: center;
    align-self: center; */
    grid-area: footer-nav;
    justify-self: end;
  }

  .footer-nav ul {
    display: block;

    /* justify-content: space-around; */
    list-style-type: none;
  }
  .footer-nav li {
    display: block;

    /* text-align: center; */
    margin: 0 10px 0 0;
  }

  .footer-nav a {
    color: var(--light-gray);
    text-decoration: none;
  }
  .footer-nav a:hover {
    color: var(--white-color);
    text-decoration: none;
    cursor: pointer;
  }

  .copy {
    margin: 0;
    padding: 0;
    justify-self: center;
    align-self: center;
    grid-area: copy-area;
  }

  .copy p {
    margin-bottom: 20px;
  }

  .datos-contacto {
    grid-area: datos-contacto;
    align-self: start;
    justify-self: start;
  }
  .datos-contacto p {
    margin: 0;
    padding: 0;
  }
  .redes {
    grid-area: redes;
    align-self: start;
    justify-self: center;
  }

  .telefono {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .dato-contacto {
    margin-left: 5px;

    border-radius: 3px;
  }

  .badge {
    font-size: 0.8em;
    color: var(--white-color);
    background: var(--intense-pink);
    padding: 2px;
    border-radius: 3px;
  }
</style>

<div class="Footer">
  <div class="footer-nav">
    <ul>
      <li>
        <a href="#header">Inicio</a>
      </li>
      <li>
        <a href="#servicios">Services</a>
      </li>
      <li>
        <a href="#proyectos">Proyectos</a>
      </li>

      <li>
        <a href="#contacts">Contactos</a>
      </li>
      <li>
        <a href="#blog">
          Blog
          <sup>
            <span class="badge">Próximamente</span>
          </sup>
        </a>
      </li>
    </ul>
  </div>
  <div class="datos-contacto">
    <h3>¡Contactos!</h3>
    <div class="telefono">
      <div class="icono-contacto">
        <Phone {color} {size} {width} {height} {viewBox} />
      </div>
      <div class="dato-contacto">
        <p>+57 3178020140</p>
      </div>
    </div>
    <div class="telefono">
      <div class="icono-contacto">
        <Whatsapp {color} {size} {width} {height} {viewBox} />
      </div>
      <div class="dato-contacto">
        <p>+57 3185150250</p>
      </div>
    </div>
    <div class="telefono">
      <div class="icono-contacto">
        <Email {color} {size} {width} {height} {viewBox} />
      </div>
      <div class="dato-contacto">
        <p>contactos@sisifodev.com</p>
      </div>
    </div>
  </div>
  <div class="redes">
    <h3>Sigunos en:</h3>
    <Facebook {color} {size2} {width2} {height2} {viewBox} />
    <Twitter {color} {size2} {width2} {height2} {viewBox} />
    <Instagram {color} {size2} {width2} {height2} {viewBox} />
    <Youtube {color} {size2} {width2} {height2} {viewBox} />
    <Git {color} {size2} {width2} {height2} {viewBox} />
  </div>
  <div class="copy">
    <p>
      &copy 2020 Todos los derechos reservados
      <strong>
        <a href="http://www.sisifodev.com">SisifoDev.com</a>
      </strong>
      👍
    </p>
  </div>
</div>
