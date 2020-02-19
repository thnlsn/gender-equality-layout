<script>
  export let application; // allow application to be passed in as prop
  export let description; // allow description to be passed in as prop

  export let source;

  function scrape() {
    // This is where the scraping logic should go (or in its own JS file)
  }
</script>

<style>
  .form-card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    max-width: 40rem;
    border-radius: 5px;
    margin: 2rem auto 1rem auto;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 7rem;
  }

  .app-data {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
  }

  .input-bar {
    width: 84%;
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

  button {
    float: right;
  }

  button:hover {
    background-color: rgb(236, 236, 236);
  }
</style>

<div class="form-card">
  <header>
    <div class="app-data">
      <h1>Welcome to {application}</h1>
      <h2>{description}</h2>
    </div>
  </header>
  <div class="submit-wrapper">
    <form action="submit">
      <input
        class="input-bar"
        type="text"
        placeholder="URL to scrape"
        value={source} />
      <button on:click={scrape}>Scrape</button>
    </form>
  </div>
</div>
