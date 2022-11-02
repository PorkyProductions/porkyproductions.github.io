<script>
  import './app.css'
  import Footer from './components/footer.svelte';
  import Header from './components/header.svelte';
  import MainPageBreakOurMission from './components/mainPageBreakOurMission.svelte';
  import Hero from './components/mainPageHero.svelte';
  import MainPageOriginStory from './components/mainPageOriginStory.svelte';
  import MainPageOurFounders from './components/mainPageOurFounders.svelte';
  import MainPageSectionOneGrid from './components/mainPageSectionOneGrid.svelte';
  import { onDestroy } from "svelte";
  import HedgehogSpinner from './components/hedgehogSpinner.svelte';
  import MainPageMissionStatement from './components/mainPageMissionStatement.svelte';
  let ready = false
  const timeoutId = setTimeout( () => ready = true, 1000);
  onDestroy(() => clearTimeout(timeoutId));
</script>

{#if ready}
  <div class="bg-white dark:bg-black text-black dark:text-white">
    <Header />
    <Hero />
    <MainPageMissionStatement />
    <MainPageSectionOneGrid />
    <MainPageBreakOurMission />
    <MainPageOurFounders />
    <MainPageOriginStory />
    <Footer />
  </div>
{:else}
  <HedgehogSpinner />
{/if}