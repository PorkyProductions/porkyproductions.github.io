<script>
  import './app.css'
import Footer from './components/footer.svelte';
  import Header from './components/header.svelte';
  import MainPageBreakOurMission from './components/mainPageBreakOurMission.svelte';
  import Hero from './components/mainPageHero.svelte';
  import MainPageOriginStory from './components/mainPageOriginStory.svelte';
  import MainPageOurFounders from './components/mainPageOurFounders.svelte';
  import MainPageSectionOneGrid from './components/mainPageSectionOneGrid.svelte';
</script>


<div class="bg-white dark:bg-black text-black dark:text-white">
  <Header />
  <Hero />
  <MainPageSectionOneGrid />
  <MainPageBreakOurMission />
  <MainPageOurFounders />
  <MainPageOriginStory />
  <Footer />
</div>

<style>
  * {
    scroll-behavior: smooth;
    scrollbar-color: hsl(240, 100%, 50%);
    accent-color: hsl(343, 100%, 65%);
  }
  *::selection {
    background-color: hsl(343, 100%, 65%);
    color: white;
  }
</style>