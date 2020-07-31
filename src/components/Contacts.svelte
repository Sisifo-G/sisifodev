<script>
  import Phone from "svelte-material-icons/Phone.svelte";
  import Whatsapp from "svelte-material-icons/Whatsapp.svelte";
  import Email from "svelte-material-icons/Email.svelte";
  import Facebook from "svelte-material-icons/Facebook.svelte";
  import Twitter from "svelte-material-icons/Twitter.svelte";
  import Instagram from "svelte-material-icons/Instagram.svelte";
  import Git from "svelte-material-icons/Git.svelte";

  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
</script>

<style>
  .Contacts {
    padding: 50px 90px 0 90px;
    height: 100vh;
    /* width: 100vw; */

    grid-area: contacts;
    background: url(https://i.ibb.co/9wT34mY/deep-water.jpg) no-repeat;
    background-size: cover;
    /* padding-bottom: 100px; */
  }
  .Contacts h2 {
    text-align: center;
    font-size: var(--title-section);
    color: var(--intense-green);
  }
  .container-contactos {
    display: grid;
    width: 100%;
    /* text-align: center; */
    margin: 90px auto;
    grid-template-areas:
      "labels form"
      "labels form";
    grid-gap: 20px;
  }
  .label {
    grid-area: labels;
  }
  .form {
    grid-area: form;
  }
</style>

<div class="Contacts" id="contacts">
  <h2>Contactos</h2>
  <div class="container-contactos">
    <div class="label">
      <h3>Comunicate con nosotros</h3>
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
    <div class="form">
      <form id="feedback" method="post" action="/">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          class="col-xs-12" />
        <input
          type="email"
          name="email"
          placeholder="Your e-mail addres"
          class="col-xs-12" />
        <textarea name="message" placeholder="Your message" class="col-xs-12" />
        <button type="submit" class="btn center-block">Send message</button>
      </form>
    </div>
  </div>

</div>
