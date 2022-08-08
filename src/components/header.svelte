<script>
    import '../app.css'
    import { DEVICE_type } from 'uadetect'
</script>


<header class="bg-slate-200 dark:bg-slate-700 dark:text-white ">
    <a href="index.html" class="hover:bg-slate-300 dark:hover:bg-slate-800 hover:rounded-xl rounded-lg"><img src="../../images/HedgehogIcon.png" alt="a hedgehog" id="HH"></a>
    {#if DEVICE_type === "mobile"}
        <div></div>
    {:else if DEVICE_type === "desktop"}
        <div class="flex content-center justify-between p-4">
            <a href="games.html" class="sm:text-sm md:text-md lg:text-lg xl:text-xl font-primary font-medium hover:bg-primary hover:text-white dark:hover:bg-slate-800 hover:rounded-xl">Games</a>
            <a href="3Dprints.html" class="sm:text-sm md:text-md lg:text-lg xl:text-xl font-primary font-medium hover:bg-primary hover:text-white dark:hover:bg-slate-800 hover:rounded-xl">3D Prints</a>
            <a href="models.html" class="sm:text-sm md:text-md lg:text-lg xl:text-xl font-primary font-medium hover:bg-primary hover:text-white dark:hover:bg-slate-800 hover:rounded-xl">Models</a>
            <a href="developments.html" class="sm:text-sm md:text-md lg:text-lg xl:text-xl font-primary font-medium hover:bg-primary hover:text-white dark:hover:bg-slate-800 hover:rounded-xl">Developments</a>
        </div>
    {/if}
</header>

<style>
    #HH {
        width: 5%;
    }
    header {
        position: sticky;
        top: 0;
    }
</style>