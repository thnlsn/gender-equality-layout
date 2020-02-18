<script>
  /*   export let name; */
  import Navbar from "./Navbar.svelte";
  import Form from "./Form.svelte";
  let application = "Equity Scraper";
  let description = `${application} aims to put an end to sexism in language by taking in a website URL and scraping it for gender-marked terms. For example, "fireman" or "mankind" would be considered marked for their referral to men specifically, and could be replaced with "firefighter" or "humankind" respectively.`;
</script>

<style>

</style>

<Navbar {application} />
<div class="container-fluid no-gutters">

  <Form {application} {description} />

</div>
