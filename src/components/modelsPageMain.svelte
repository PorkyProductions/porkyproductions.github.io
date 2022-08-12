<script>
    import '../app.css'
    import icelands from '../../images/icelands.png'
    import hedgehog from '../../images/hedgehogPreview_Front.png'
    import hedgehogModel from '../../models/hedgehog.stl'
    import { DEVICE_type } from 'uadetect'
</script>

<!-- TODO: Make dark mode compatible -->

{#if DEVICE_type === "mobile"}
    <section class="text-black dark:text-white dark:bg-black">
        <div class="gridMobile">
            <div class="tileMobile">
                <h1 class="font-bold p-4 font-primary sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                    Hedgehog
                </h1>
                <button class = "previewButton text-8xl">&lt;</button>
                <img src={hedgehog} alt="hedgehogModel" class="previewImage p-4  w-3/4">   <!--ACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGE-->
                <button class = "previewButton text-8xl">&gt;</button>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste molestias repellendus dolorum qui quia, iure fugiat in vel optio! Iusto, cumque distinctio delectus fuga repellat at accusamus quis repudiandae!
                </p>
                <br>
                <hr>
                <a href={hedgehogModel}>Download (.stl)</a>
            </div>
            <div class="tileMobile">
                <h1 class="font-bold p-4 font-primary sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                    Icelands
                </h1>
                <button class = "previewButton text-8xl">&lt;</button>
                <img src={icelands} alt="" class="previewImage p-4  w-3/4"><!--ACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGE-->
                <button class = "previewButton text-8xl">&gt;</button>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nam? Reprehenderit consequatur alias neque ullam error. Repellat beatae ex, ducimus corrupti nulla veritatis expedita unde excepturi aspernatur laboriosam provident officia.
                </p>
                <br>
                <hr>
                <a href={hedgehog}>
                    Download (.stl)
                </a>
            </div>
        </div>
    </section>
{:else}
    <section class="text-black dark:text-white dark:bg-black bg-slate-300">
        <div class="grid">
            <div class="tile bg-slate-100 drop-shadow-lg">
                <h1 class="font-bold p-4 font-primary sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                    Hedgehog
                </h1>

                <div class="flex justify-center">
                    <button class = "previewButton text-8xl">&lt;</button>
                    <img src={hedgehog} alt="hedgehogModelPreview" class="previewImage p-4 w-3/4"><!--ACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGE-->
                    <button class = "previewButton text-8xl">&gt;</button>

                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste molestias repellendus dolorum qui quia, iure fugiat in vel optio! Iusto, cumque distinctio delectus fuga repellat at accusamus quis repudiandae!
                </p>
                <br>
                <hr>
                <a href={hedgehogModel}>Download (.stl)</a>
            </div>
            <div class="tile bg-slate-100 drop-shadow-lg">
                <h1 class="font-bold p-4 font-primary sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                    Icelands
                </h1>
                <div class="flex justify-center">
                    <button class = "previewButton text-8xl">&lt;</button>
                    <img src={icelands} alt="" class="previewImage p-4  w-3/4"><!--ACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGE-->
                    <button class = "previewButton text-8xl">&gt;</button>

                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nam? Reprehenderit consequatur alias neque ullam error. Repellat beatae ex, ducimus corrupti nulla veritatis expedita unde excepturi aspernatur laboriosam provident officia.
                </p>
                <br>
                <hr>
                <a href={hedgehog}>
                    Download (.stl)
                </a>
            </div>
        </div>
    </section>
{/if}

<style>
    .previewImage{
        border-radius: 30px;
    }
    .grid {
        display:grid;
        grid-template-columns:1fr 1fr
    }
    .tile {
        padding: 50px;
        margin: 50px;
        border-radius:30px;
        text-align:left;
        

    }

    .gridMobile {
        display:grid;
        grid-template-columns: 1
    }

    .tileMobile {
        padding: 25px;
        margin: 25px;
        border-radius:30px;
        text-align:left;
        border: 3px solid #0000F4;
    }
</style>