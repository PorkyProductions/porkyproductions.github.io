<script>
    // @ts-nocheck
    import '../app.css'
    import icelands from '../../images/icelands.png'
    import hedgehog from '../../images/HedgehogPreview_Front.png'
    import bow from '../../images/BowPreview_Top.png'
    import hedgehogModel from '../../models/hedgehog.stl'
    import bowModel from '../../models/Bow.stl'
    import { DEVICE_type } from 'uadetect'
    import ModelsTile from './modelsTile.svelte'
</script>

<!-- TODO: Make dark mode compatible -->

{#if DEVICE_type === "mobile"}
    <section class="bg-gradient-to-b from-pink-600 to-rose-600 dark:bg-slate-400 text-black dark:text-white">
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
    <section class="bg-gradient-to-b from-pink-600 to-rose-600 dark:from-slate-500 dark:to-slate-500 text-black dark:text-white bg-slate-300">
        <div class="grid">
            <ModelsTile modelName = "Hedgehog" modelDownload={hedgehogModel} iFrameTitle={"hedgehog"} iFrameSource={"https://my.spline.design/untitled-9b130a1005f56022c585fab65feabcf1/"} id="hedgehogModelPreview"/>
            <ModelsTile modelName = "Bow" modelDownload ={bowModel} iFrameTitle={"Bow"} iFrameSource = {"https://my.spline.design/bow-25bd00f35d7812dea212e793b6fef34d/"} id = "bowModelPreview"/>
            <ModelsTile modelName = "Iceland" modelDownload = {hedgehogModel} image={icelands} id = "doesnt have one "/>
        </div>
    </section>
{/if}

<style>
    .previewImage{
        border-radius: 30px;
        padding: 0;
        max-height:420px;
    }
    .previewButton:hover{
        border-radius: 20px;
        background-color: rgb(183, 206, 228);
    }
    .previewButton{
        height: 420px;
    }
    .grid {
        display:grid;
        grid-template-columns:1fr 1fr
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