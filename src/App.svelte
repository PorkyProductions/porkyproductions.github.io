<script>
  import './app.css'
  import Header from './components/header.svelte';
  import Hero from './components/mainPageHero.svelte';
  import MainPageSectionOneGrid from './components/mainPageSectionOneGrid.svelte';
</script>


<div class="bg-white dark:bg-black text-black dark:text-white">
  <Header />
  <Hero />
  <MainPageSectionOneGrid />
</div>

<style>
  * {
    scroll-behavior: smooth;
    scrollbar-color: hsl(240, 100%, 48%);
  }
</style>