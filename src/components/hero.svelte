<script>
    import '../app.css'
import HeroTypewriter from './heroTypewriter.svelte';
</script>


<hero class="bg-gradient-to-br from-primary to-ppio-hotshot dark:from-secondary-dark dark:to-secondary-darkest">
    <div class="bg-gradient-to-br from-primary to-ppio-hotshot flex justify-between content-center dark:from-secondary-dark dark:to-secondary-darkest p-48">
        <div class="m-auto">
            <HeroTypewriter />
        </div>
        <div class="m-auto">
            <img src="../../images/HedgehogIcon.png" alt="The PorkyProductions Logo">
        </div>
    </div>
</hero>