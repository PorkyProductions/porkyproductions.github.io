<script>
    import '../app.css'
    import icelands from '../../images/icelands.png'
    import hedgeHogModel from '../../images/hedgehogmodel.png'
    import hedgehog from '../../models/hedgehog.stl'
    import icelandsModel from '../../models/icelands.stl'
</script>

<section>
    <div class="grid">
        <div class="tile">
            <h1 class="font-bold p-4 font-primary sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                Hedgehog
            </h1>
            <img src={hedgeHogModel} alt="hedgehogModel" class="p-4">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste molestias repellendus dolorum qui quia, iure fugiat in vel optio! Iusto, cumque distinctio delectus fuga repellat at accusamus quis repudiandae!
            </p>
            <br>
            <hr>
            <a href={hedgehog}>Download (.stl)</a>
        </div>
        <div class="tile">
            <h1 class="font-bold p-4 font-primary sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                Icelands
            </h1>
            <img src={icelands} alt="" class="p-4">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nam? Reprehenderit consequatur alias neque ullam error. Repellat beatae ex, ducimus corrupti nulla veritatis expedita unde excepturi aspernatur laboriosam provident officia.
            </p>
            <br>
            <hr>
            <a href={icelandsModel}>
                Download (.stl)
            </a>
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