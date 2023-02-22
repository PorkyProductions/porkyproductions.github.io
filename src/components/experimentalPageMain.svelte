<script>
    import '../app.css'
    import darkLogo from '../../images/ppioExpermentalDark.svg'
    import lightLogo from '../../images/ppioExpermentalLight.svg'
    let darkMode = false
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        darkMode = true
    }
</script>

<section class="bg-white text-black dark:text-white dark:bg-black">
    <div class="flex content-center justify-center">
        {#if darkMode}
            <img src={lightLogo} class="h-48" alt="Porky Productions Experimental">
        {:else if !darkMode}
            <img src={darkLogo} class="h-48" alt="Porky Productions Experimental">
        {/if}
    </div>
    <h1 class="font-primary font-semibold text-6xl text-center">
        Experimental Applications 
        <br>
    </h1>
    
    <div class="p-4 pl-32 text-center">incomplete or decidedly unfinished programs that we decided to still push out for the public to see!</div>
    <br>
    <a href="https://porkyproductions.github.io/Particle-Simulator/">
        <div class="bg-gradient-to-r bg-slate-300 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-900 p-10">
            <h1 class="text-center font-semibold p-24sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-primary">
                Particle-Simulator
            </h1>
            <p class="text-center font-normal p-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Change the laws of physics in your own Particle-Simulator        </div>  
    </a>
    <a href="https://porkyproductions.github.io/Boids/">
        <div class="bg-gradient-to-r bg-slate-300 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-900 p-10">
            <h1 class="text-center font-semibold p-24sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-primary">
                Boids
            </h1>
            <p class="text-center font-normal p-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">simple behaviours combined can create complex behaviours</p>
        </div>  
    </a>
    <a href="https://porkyproductions.github.io/RayMarching/">
        <div class="bg-gradient-to-r bg-slate-300 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-900 p-10">
            <h1 class="text-center font-semibold p-24sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-primary">
                Ray Marching
            </h1>
            <p class="text-center font-normal p-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">using a series of distance functions, we can conclude if and where a ray collides with certain objects</p>
        </div>  
    </a>
    
</section>

<style>

</style>