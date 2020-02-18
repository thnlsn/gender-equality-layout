import App from './App.svelte';

let title = 'Equity Scraper';

const app = new App({
  target: document.body,
  props: {
    application: title,
    description: `${title} aims to put an end to sexism in language by taking in a website URL and scraping it for gender-marked terms. For example, "fireman" or "mankind" would be considered marked for their referral to men specifically, and could be replaced with "firefighter" or "humankind" respectively.`
  }
});

export default app;
