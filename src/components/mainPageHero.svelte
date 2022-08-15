<script>
    import '../app.css'
    import HeroTypewriter from './mainPageHeroTypewriter.svelte';
    import hedgehog from '/./../images/HedgehogIcon.png'
    import { DEVICE_type } from 'uadetect'
</script>

{#if DEVICE_type === "mobile"}
    <hero class="bg-gradient-to-br from-primary to-ppio-hotshot dark:from-primary dark:to-secondary-darkest">
        <div class="bg-gradient-to-br from-primary to-ppio-hotshot flex justify-between content-center dark:from-primary dark:to-secondary-darkest p-48">
            <div class="m-auto">
                <!-- <HeroTypewriter /> -->
            </div>
            <img src={hedgehog} alt="">
        </div>
    </hero>
{:else}
    <hero class="bg-gradient-to-br from-primary to-ppio-hotshot dark:from-primary dark:to-secondary-darkest">
        <div class="bg-gradient-to-br from-primary to-ppio-hotshot flex justify-between content-center dark:from-primary dark:to-secondary-darkest p-48">
            <div class="m-auto">
                <!-- <HeroTypewriter /> -->
            </div>
            <div class="m-auto">
                <img src={hedgehog} alt="The PorkyProductions Logo">
            </div>
        </div>
    </hero>
{/if}
