<script>

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
    height: 100px;
    padding: 20px;
    /* display: block; */
    /* align-items: center; */
    /* justify-content: space-around; */
    grid-area: footer;
  }
  .footer-nav {
    justify-self: center;
    align-self: center;
  }
  .copy {
    justify-self: center;
    align-self: center;
  }
  .footer-nav ul {
    display: inline;

    justify-content: space-around;
    list-style-type: none;
  }
  .footer-nav li {
    display: inline;

    text-align: center;
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
</style>

<div class="Footer">
  <div class="footer-nav">
    <ul>
      <li>
        <a href="#header">Inicio</a>
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
