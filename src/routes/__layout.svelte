<script>
  import Navbar from "../components/Navbar.svelte";

  const date = new Date().getFullYear();
</script>

<svelte:head>
  <title>Richard Smith | Portfolio</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');
  </style>
</svelte:head>

<div class="container">
  <Navbar/>
  <slot></slot>  
  <footer>
    Designed and developed by Richard Smith &copy; {date}
  </footer>
</div>

<style>
  :global(body) {
    margin: 0px;
    font-family: Nunito;
  }


  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }

  footer {
    text-align: center;
  }
</style>