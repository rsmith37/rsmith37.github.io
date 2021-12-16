<script>
  import {fade} from "svelte/transition";
</script>

<div class="index-container">
  <div class="content-container">
    <h1 class="welcome">
      <span in:fade={{duration: 1000}}>Hi </span>
      <span in:fade={{duration: 1000, delay: 1000}}>and welcome to my website! &#128075;</span>
    </h1>
  </div>
</div>

<style>

  .index-container {
    /* display: flex; */
    /* flex: 1; */
    /* align-items: center;
    text-align: center;
    justify-content: center; */
    width: 75%;
    margin: auto;
  }


</style>