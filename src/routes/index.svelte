<script>
  import { onMount } from "svelte";
  import Navbar from "../components/Navbar.svelte";
  import Services from "../components/Services.svelte";
  import Portfolio from "../components/Portfolio.svelte";
  import Contacts from "../components/Contacts.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import BtnContactos from "../components/BtnContactos.svelte";

  let src = "../assets/img/sisifoLogo.png";
  // let data = {};
  // const API = "http://localhost:1337/imagenes";
  // onMount(async () => {
  //   const response = await fetch(API);
  //   data = await response.json();
  // });
</script>

<style>
  :global(:root) {
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
    --title-section: 2.4em;
  }

  :global(html) {
    scroll-behavior: smooth;
    /* height: 100%; */
  }

  :global(body) {
    font-family: "Mulish", sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--dark-blue);
    color: var(--light-gray);
  }

  main {
    display: grid;

    /* width: 100%; */
    /* text-align: center; */
    margin: 0 auto;
    grid-template-areas:
      "nav nav nav"
      "header header header"
      "services services services"
      "portfolio portfolio portfolio"
      "contacts contacts contacts"
      "footer footer footer";
  }

  /* @media (min-width: 640px) {
    main {
      max-width: none;
    }
  } */
</style>

<main>

  <Navbar />
  <Header />

  <Services />
  <Portfolio />
  <Contacts />

  <Footer />

</main>
