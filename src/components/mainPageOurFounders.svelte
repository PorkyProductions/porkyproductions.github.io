<script>
    import '../app.css'
</script>


<section>
    <h1 class="text-center font-semibold font-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-6">
        Our Founders
    </h1>
    <div class="grid">
        <div class="tile">
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
        <div class="tile">
            <h1 class="font-bold p-4 font-primary sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                Tristan
            </h1>
            <h2 class="font-normal font-secondary sm:text-sm md:text-md lg:text-md xl:text-lg">
                (HedgehogDubz)
            </h2>
            <img src="https://avatars.githubusercontent.com/u/53802238?v=4" alt="hedgehog">
            <p class="font-light font-secondary sm:text-sm md:text-md lg:text-md xl:text-lg">
                Tristan is a software / hardware developer as a hobbiest. He uses a multitude of languages to accomodate to his needs. Some of these languages include: HTML, CSS, Javascript + (jQuery), C# + (Winforms, .Net, Unity), Java, Typescript, Python, and aspx. Has a 3D printer and all creations can be seen in his 3D Prints Tab tab. Also creates models seen in the Models Tab Also creates games but currently none are published. 
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
    border:5px solid hsl(240, 100%, 48%);
    border-radius:30px;
    text-align:left;
}
</style>