<script>
  export let application;
  export let description;
</script>

<style>
  .form-card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    max-width: 35rem;
    border-radius: 5px;
    margin: 1rem auto;
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
    width: 85%;
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
      <input class="input-bar" type="text" placeholder="URL to scrape" />
      <button>Scrape</button>
    </form>
  </div>
</div>
