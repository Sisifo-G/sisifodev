<script>

</script>

<style>
  .Contacts {
    padding: 50px 90px 0 90px;
    height: 100vh;
    /* width: 100vw; */

    grid-area: contacts;
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
    <div class="label">labels</div>
    <div class="form">form</div>
  </div>

</div>
