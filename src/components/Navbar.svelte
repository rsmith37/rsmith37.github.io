<script>
  export let selected;
</script>

<nav>
  <div class="navbar-container">
    <div class="navbar-brand">
      <a href="/">Richard Smith</a>
    </div>
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
    <!-- <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 24 24" style=" fill:#000000;">
      <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
    </svg> -->
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
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  nav a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
  }

  .navbar-brand {
    font-size: 60px;
    font-weight:700;
  }

  nav ul {
    list-style: none;
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 600px) {
    nav ul {
      display: none;
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