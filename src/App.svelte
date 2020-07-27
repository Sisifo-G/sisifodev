<script>
  export let name;
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
    background-color: var(--dark-blue);
    color: var(--light-gray);
  }
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  a {
    color: var(--intense-purple);
  }

  h1 {
    color: var(--intense-coral);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
