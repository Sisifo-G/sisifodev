<script>
  //   export let name;
</script>

<style>
  :root {
    --dark-blue: #121232;
    --medium-blue: #1c1e45;
    --light-blue: #32436f;
    --other-blue: #1d8cf8;
    --white-color: #e9f7ff;
    --light-gray: #9a9694;
    --intense-gray: #344675;
    --intense-coral: #ff8d72;
    --light-coral: #46304a;
    --intense-green: #00f2c3;
    --light-green: #12455b;
    --intense-purple: #e14eca;
    --light-purple: #40235c;
    --intense-pink: #fd5d93;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    background-color: var(--dark-blue);
    color: var(--light-gray);
  }
  main {
    display: grid;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    grid-template-areas:
      "nav nav nav"
      "header header header"
      "section section section"
      "footer footer footer";
  }

  nav {
    height: 100px;
    background-color: var(--dark-blue);
    grid-area: nav;
  }

  header {
    height: 600px;
    background-color: var(--medium-blue);
    grid-area: header;
  }
  section {
    height: 600px;
    background-color: var(--medium-blue);
    grid-area: section;
  }
  footer {
    height: 100px;
    background-color: var(--dark-blue);
    grid-area: footer;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>

  <nav>Aquí irá el Navbar</nav>
  <header>Aquí irá el header</header>
  <section>Aquí irá el section</section>
  <footer>Aquí irá el footer</footer>
</main>
