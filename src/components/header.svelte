<script>
    import '../app.css'
    import { DEVICE_type } from 'uadetect'
</script>


<header class="flex content-center justify-between bg-slate-200 dark:bg-slate-700 dark:text-white ">
    <a href="index.html" class="hover:bg-slate-300 dark:hover:bg-slate-800 hover:rounded-xl rounded-lg"><img src="../../images/HedgehogIcon.png" alt="a hedgehog" id="HH"></a>
    {#if DEVICE_type === "mobile"}
        <div></div>
    {:else if DEVICE_type === "desktop"}
        <div class="flex content-center justify-between p-10">
            <a href="games.html" class="px-5 sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-primary font-medium hover:bg-primary hover:text-white dark:hover:bg-slate-800 hover:rounded-xl">Games</a>
            <a href="3Dprints.html" class="px-5 sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-primary font-medium hover:bg-primary hover:text-white dark:hover:bg-slate-800 hover:rounded-xl">3D Prints</a>
            <a href="models.html" class="px-5 sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-primary font-medium hover:bg-primary hover:text-white dark:hover:bg-slate-800 hover:rounded-xl">Models</a>
            <a href="developments.html" class="px-5 sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-primary font-medium hover:bg-primary hover:text-white dark:hover:bg-slate-800 hover:rounded-xl">Developments</a>
        </div>
    {/if}
</header>

<style>
    #HH {
        width: 50%;
    }
    header {
        position: sticky;
        top: 0;
    }
</style>