<script>
  export let site;
</script>

<style>
  .contact-card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    max-width: 30rem;
    border-radius: 5px;
    margin: 1rem auto;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .user-data {
    width: 67%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
  }

  h1 {
    font-size: 1.25rem;
    font-family: "Roboto Slab", sans-serif;
    margin: 0.5rem 0;
  }

  h2 {
    font-size: 1rem;
    font-weight: normal;
    color: #5a5a5a;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  .submit-wrapper {
    border-top: 1px solid #ccc;
    padding: 1rem;
  }
</style>

<div class="contact-card">
  <header>
    <div class="user-data">
      <h1>Welcome to Equity Scraper</h1>
      <h2>blah</h2>
    </div>
  </header>
  <div class="submit-wrapper">
    <form action="submit">
      <input type="text" placeholder="URL to scrape" />
      <button>Scrape</button>
    </form>
  </div>
</div>
