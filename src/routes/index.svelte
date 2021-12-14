<script>
  import {fade} from "svelte/transition";
</script>

<div class="index-container">
  <p class="home-text">
    <span in:fade={{delay:500, duration:1000}}>Aspiring software developer.</span> <span in:fade={{delay:1000, duration:2000}}>Avid learner.</span> <span in:fade={{delay:1500, duration:2500}}>Tech enthusiast</span>
  </p>
</div>

<style>

  .index-container {
    display: flex;
    /* flex: 1; */
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  .home-text {
    font-size: 3rem;
  }

</style>