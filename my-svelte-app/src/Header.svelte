<style>
  header {
    background-color: #4caf50;
    padding: 05px; /* Reduce the padding to make the header narrow */
    display: flex;
    align-items: center;
    position: fixed; /* Fix the header to the top of the screen */
    top: 0; /* Position at the top of the screen */
    left: 0; /* Align to the left */
    right: 0; /* Align to the right */
  }

  img {
    max-width: 40px; /* Reduce the logo size to make the header narrow */
    height: auto;
    margin-right: 10px;
  }

  h1 {
    color: #fff; /* White text color for the header title */
    font-size: 10px; /* Reduce the font size to make the header narrow */
    margin: 0;
  }

  nav {
    flex: 1;
    text-align: right;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-left: 20px;
  }

  a {
    color: #fff; /* White text color for navigation links */
    text-decoration: none;
    font-size: 12px; /* Reduce the font size to make the header narrow */
  }
</style>

<script>
  // ... (existing script code)
</script>

<header>
  <div>
    <!-- Example: Byju's logo (replace with your own logo) -->
    <img src="https://cdn.discordapp.com/attachments/1110481567068979271/1130737308925173770/image.png" alt="Logo" />

    <!-- Example: Byju's header title (replace with your own header title) -->
    <h1>FlyHigh</h1>
  </div>

  <!-- Example: Byju's navigation links (replace with your own navigation links) -->
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>
