<script>
  import { each } from "svelte/internal";
  
  export let proj_name, proj_desc, techs, github_link, image, demo_link;
</script>

<div class="project-container">
  <div class="title">
    <h3 class="title-name">
      <a href={github_link}>
        {proj_name} <span class="arrow">&#8680;</span>
      </a>
    </h3>
  </div>
  <div class="content">
    {#if image !== undefined}
     <div class="content-image">
        <a href={demo_link}>
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img src={image} alt="Image Not Availble">
        </a>
      </div>
    {/if}
    <div class="content-text">
      <p class="content-desc">{proj_desc}</p>
      <ul class="tech-list">
        {#each techs as tech}
          <li class="tech-list-item">
            {tech}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  .project-container {
    width: 70%;
    margin: auto;
    text-align: left;
  }

  .title-name a {
    text-decoration: none;
    color: white
  }

  .content-image {
    display: flex;
    justify-content: center;
  }

  /* @media only screen and (max-width: 550px) {
    .content-image {
      display: none;
    }
  } */

  .content-image img {
    max-width: 100%;
  }

  .arrow {
    padding-left: 5px;
    transition: transform 0.8s;
  }

  .arrow:hover {
    transform: translate(10px, 0px);
  }

  .tech-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    text-align: center;
    padding-inline-start: 0px;
    justify-content: left;
  }

  .tech-list-item {
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 20px;
    border-color: var(--accent-color);
    border-style: solid;
    border-width: 2px;
    color: var(--accent-color);
    font-size: 12px;
  }

</style>