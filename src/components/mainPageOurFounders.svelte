<script>
    import '../app.css'
</script>


<section class="bg-slate-300 dark:bg-slate-800">
    
    <h1 class="font-semibold font-primary pt-40 pb-12 px-32 text-5xl">
        Our Founders
    </h1>
    <h4 class="font-primary pb-12 px-40 text-3xl">
        Tristan and Ryan have worked together to create a metaphorical<br>
        library to see all of their awesome projects!
    </h4>
    <div class="grid">
        <div class="tile bg-slate-100 dark:bg-slate-600 drop-shadow-lg">
            <h1 class="font-bold p-4 font-primary sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                Ryan
            </h1>
            <h2 class="font-normal font-secondary sm:text-sm md:text-md lg:text-md xl:text-lg">
                (hiteacheryouare)
            </h2>
            <img src="https://avatars.githubusercontent.com/u/82683251?v=4" alt="giraffe">
            <p class="font-light font-secondary sm:text-sm md:text-md lg:text-md xl:text-lg">
                Ryan is a software developer as a hobbiest. He mainly focuses on web development, but also has some experience in Python and Rust (specifically targeting WebAssembly.) Some of the technologies in his stack include Svelte, taiilwindcss, and vite. All powered by node.js experience. Ryan is working on a variety of projects which you can see in his GitHub repository
            </p>
        </div>
        <div class="tile bg-slate-100 dark:bg-slate-600 drop-shadow-lg">
            <h1 class="font-bold p-4 font-primary sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                Tristan
            </h1>
            <h2 class="font-normal font-secondary sm:text-sm md:text-md lg:text-md xl:text-lg">
                (HedgehogDubz)
            </h2>
            <img src="https://avatars.githubusercontent.com/u/53802238?v=4" alt="hedgehog">
            <p class="font-light font-secondary sm:text-sm md:text-md lg:text-md xl:text-lg">
                Tristan is a hobbiest software developer and 3d printer. While he specializes in creating video games, he also has experience with JS, HTML5, C# (Unity, Winforms), and Python. He is currently working on a bullet hell top-down game and an easy-to-use machine learning library for C#. Most of his projects are NOT seen in his GitHub page. Also really likes hedgehogs!
            </p>
        </div>
    </div>
</section>

<style>
.grid {
    display:grid;
    grid-template-columns:1fr 1fr
}
.tile {
    padding:50px;
    margin:50px;
    border-radius:30px;
    text-align:left;
}

</style>