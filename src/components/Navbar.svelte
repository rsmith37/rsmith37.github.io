<script>
  export let selected;
  
  let navBarOpen = false;

  const setNavBar = () => {
    navBarOpen = !navBarOpen
    console.log(navBarOpen);
    if(navBarOpen) {
     document.getElementById("link-container").style.display = "flex";
    } else {
      document.getElementById("link-container").style.display = "none";
    }
  };
</script>

<nav>
  <div class="navbar-container">
    <div class="menu">
      <div class="navbar-brand">
        <a href="/">Richard Smith</a>
      </div>
      <button type="button" id="nav-button" on:click={setNavBar}>
        <svg xmlns="http://www.w3.org/2000/svg" id="menu" x="0px" y="0px" width="48" height="48" viewBox="0 0 24 24" style=" fill:#ffffff;">
          <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
        </svg>
      </button>
    </div>
    <div id="link-container">
      <ul>
        <li class='{selected === "/about" ? "current" : ""}'>
          <a href="/about">About</a>
        </li>
        <li class='{selected === "/experience" ? "current" : ""}'>
          <a href="/experience">Experience</a>
        </li>
        <li class='{selected === "/projects" ? "current" : ""}'>
          <a href="/projects">Projects</a>
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
    /* z-index: 99; */
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
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #nav-button {
    display: none;
  }

  nav a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
  }

  .navbar-brand {
    font-size: 3rem;
    font-weight:700;
  }

  @media only screen and (max-width: 700px) {
    .navbar-brand {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 400px) {
    .navbar-brand {
      font-size: 1rem;
    }
  }

  nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    padding-inline-start: 0px;
  }

  /* #link-container {
    display: flex;
    flex-direction: column;
  } */

  @media only screen and (max-width: 960px) {
    #link-container {
      display: none;
    }

    nav ul {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 960px) {
    .menu {
      width: 100%;
    }

    #nav-button {
      display: block;
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