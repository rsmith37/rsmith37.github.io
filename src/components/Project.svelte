<script>
  import { each } from "svelte/internal";
  
  export let proj_name, proj_desc, techs, link;
</script>

<div class="project-container">
  <div class="title">
    <h3 class="title-name">
      <a href={link}>
        {proj_name} <span class="arrow">&#8680;</span>
      </a>
    </h3>
  </div>
  <div class="content">
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

<style>
  .project-container {
    width: 70%;
    margin: auto;
    /* display: flex; */
    /* padding: 20px; */
    text-align: left;
  }

  .title {
    /* background-color: black; */
    /* flex: 30%; */
    /* text-align: left; */
  }

  .title-name {
    /* margin-right: 10px; */
  }

  .title-name a {
    text-decoration: none;
    color: white
  }

  .content {
    /* background-color: red; */
    /* flex: 70%; */
  }

  .content-desc {
    /* margin-left: 10px;
    margin-right: 10px; */
    /* text-align: left; */
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
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 20px;
    border-color: var(--accent-color);
    border-style: solid;
    border-width: 2px;
  }

</style>