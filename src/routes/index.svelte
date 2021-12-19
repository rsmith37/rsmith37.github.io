<script>
  import {fade} from "svelte/transition";

  let src = './438.png'
</script>

<div class="index-container">
  <div class="content-container">
    <div class="text">
      <h1 in:fade={{duration: 1000}} class="welcome">
        Hi, I'm Richard, and welcome to my site!
      </h1>
      <p>
        As an aspiring software developer and avid learner, I have created this site to showcase my experience and skills.
        Thank you for visiting and enjoy!
      </p>
    </div>
    <div class="image">
      <img src={src} alt="profile pic">
    </div>
  </div>
</div>

<style>

  .content-container {
    display: flex;
    /* justify-content: space-between; */
    flex-direction: column-reverse;
    margin: auto;
    align-items: center;
    text-align: center;
    width: 90%;  
  }

  /* @media only screen and (min-width: 425px) {
    .content-container {
    }
  } */

  @media only screen and (min-width: 725px) {
    .content-container {
      width: 60%;
    }
  }

  /* When the screen is larger than 1302px */
  @media only screen and (min-width: 1302px) {
    .content-container {
      flex-direction: row;
      text-align: left;
      justify-content: space-between;
    }

    .text {
      margin-right: 3rem;
    }
  }

  .image img {
    vertical-align: middle;
    border-radius: 50%;
  }


</style>