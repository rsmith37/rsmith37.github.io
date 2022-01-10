<script>
  import {page} from '$app/stores'; //gets current url path
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";


</script>

<svelte:head>
  <title>Richard Smith | Portfolio</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');
  </style>
</svelte:head>

<div class="container">
  <Navbar selected={$page.url.pathname}/>
  <slot></slot>  
  <Footer />
</div>

<style>
  :global(:root) {
    --primary-color: #34495E;
    --secondary-color: #2C3E50;
    --accent-color: #82E0AA;
  }

  :global(body) {
    margin: 0px;
    font-family: Nunito;
    background-color: var(--primary-color);
    color: white;
  }


  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }
</style>