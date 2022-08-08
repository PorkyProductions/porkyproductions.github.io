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
            <h2 class="font-light font-primary sm:text-sm md:text-md lg:text-md xl:text-lg">
                (hiteacheryouare)
            </h2>
        </div>
        <div class="tile">
            <h1 class="font-bold p-4 font-primary sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                Tristan
            </h1>
            <h2 class="font-light font-primary sm:text-sm md:text-md lg:text-md xl:text-lg">
                (HedgehogDubz)
            </h2>
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