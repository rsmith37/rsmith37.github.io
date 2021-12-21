<script>
  import { onMount } from "svelte";

  export let selected;
  
  let openNavbar = false;

  const setNavBar = () => openNavbar = !openNavbar;

  const resetNavBar = e => {
    if(!e.matches) {
      openNavbar = false;
    }
  };

  onMount(() => {
    const windowListener = window.matchMedia("(max-width: 960px)");

    // windowListener.addListener(resetNavBar);
    windowListener.addEventListener('change', resetNavBar);
  });

</script>

<nav>
  <div class="navbar-container">
    <div class="menu">
      <div class="navbar-brand">
        <a id="navbar-brand-name" href="/">Richard Smith</a>
      </div>
      <button type="button" id="nav-button" on:click={setNavBar}>
        <svg xmlns="http://www.w3.org/2000/svg" id="menu" x="0px" y="0px" width="36" height="36" viewBox="0 0 24 24" style=" fill:#ffffff;">
          <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
        </svg>
      </button>
    </div>
    <div id="link-container">
      <ul class={`navbar-list${openNavbar ? ' mobile' : ''}`}>
        <li class='{selected === "/about" ? "current" : ""}'>
          <a href="/about">&#60;About /&#62;</a>
        </li>
        <li class='{selected === "/experience" ? "current" : ""}'>
          <a href="/experience">&#60;Experience /&#62;</a>
        </li>
        <li class='{selected === "/projects" ? "current" : ""}'>
          <a href="/projects">&#60;Projects /&#62;</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  nav {
    position: sticky;
    top: 0px;
    width: '100%';
    height: auto;
    padding: 2rem;
    z-index: 99;
    background-color: var(--secondary-color);
  }

  .navbar-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .menu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #nav-button {
    display: block;
    background-color: transparent;
    border: none;
    padding: 1rem;
  }

  nav a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
  }

  .navbar-brand {
    font-size: 48px;
    font-weight:700;
  }

  @media only screen and (max-width: 550px) {
    .navbar-brand {
      font-size: 40px;
      padding-right: 2rem;
    }
  }

  /* @media only screen and (max-width: 455px) {
    .navbar-brand {
      font-size: 32px;
    }
  } */

  /* @media only screen and (max-width: 400px) {
    .navbar-brand {
      font-size: 1rem;
    }
  } */

  .navbar-list {
    list-style: none;
    display: none;
    align-items: center;
    padding-inline-start: 0px;
    flex-direction: column;
  }

  .navbar-list.mobile {
    display: flex;
  }

  @media only screen and (min-width: 960px) {
    .menu {
      width: auto;
    }

    #nav-button {
      display: none;
    }

    #link-container {
      display: flex;
    }

    .navbar-list {
      display: flex;
      flex-direction: row;
    }
  }

  nav li {
    padding: 1rem;
    border: 3px solid rgba(255, 255, 255, 0);
    border-radius: 20px;
  }

  .current {
    border: 3px solid var(--accent-color);
    border-radius: 20px; 
  }
</style>