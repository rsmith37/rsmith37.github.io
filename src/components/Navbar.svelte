<nav>
  <div class="navbar-container">
    <div class="navbar-brand">
      <a href="/">Richard Smith</a>
    </div>
    <ul>
      <li>
        <a href="/experience">Experience</a>
      </li>
      <li>
        <a href="/projects">Projects</a>
      </li>
    </ul>
  </div>
</nav>

<style>
  nav {
    position: sticky;
    top: 0px;
    width: '100%';
    height: auto;
    padding: 1rem;
    /* z-index: 99; */
    background-color: darkblue;
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
    margin-left: 1rem;
    margin-right: 0.5rem;
    font-size: 30px;
    font-weight:700;
  }

  nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin-right: 1rem;
    margin-left: 0.5rem;
  }

  nav li {
    margin: 0 1rem;
  }
</style>