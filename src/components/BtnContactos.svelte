<script>
  import Whatsapp from "svelte-material-icons/Whatsapp.svelte";

  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
</script>

<style>
  p.info {
    background: var(--intense-coral);
    border-radius: 25px;
    width: 150px;
    height: 50px;
    font-size: 1em;
    font-weight: 700;
    color: var(--white-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p.info:hover {
    color: var(--dark-blue);
    background: var(--white-color);
    cursor: pointer;
  }
</style>

<div class="BtnContactos">
  <p class="info">
    <Whatsapp {color} {size} {width} {height} {viewBox} />
    Contáctanos
  </p>
</div>
