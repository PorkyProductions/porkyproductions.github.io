<script>
    import '../app.css'
    export let modelName;
    export let modelDownload;
    export let modelImage;
    export let id;
    export let iFrameSource;
    export let iFrameTitle;
    let canvas;
    import { Application } from '@splinetool/runtime'
    new Application(canvas)
</script>

<div class="tile bg-slate-100 dark:bg-slate-600 drop-shadow-2xl text-left">
    <h1 class="font-bold p-4 font-primary sm:text-md md:text-lg lg:text-xl xl:text-2xl">
        {modelName}
    </h1>
    <div id = "{id}ImageContainer"class="flex justify-center" style = "">
        <button id="button_{id}Left" class = "previewButton text-8xl">&lt;</button>
        <img src={modelImage} alt="" id = {id} class="previewImage p-4 w-3/4"><!--ACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGE-->
        <button id="button_{id}Right"class = "previewButton text-8xl">&gt;</button>
        
    </div>
    <div  id="{id}Viewer"class="drop-shadow-lg p-0 m-0 text-left" style="display:none">
        <div class="flex justify-center bg-slate-50" width = "auto"style="border-radius:30px">
            <iframe class='p-0 m-0 top-0 w-3/4' src={iFrameSource} frameborder='0' height='420px'title={iFrameTitle}></iframe>
        </div>
    </div>
    <div class='text-center'>
        <button class='bg-slate-300 hover:bg-slate-500 px-32' style="border-radius:5px" id="button_{id}View">View 3D Model In Browser</button>
    </div>
    

    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste molestias repellendus dolorum qui quia, iure fugiat in vel optio! Iusto, cumque distinctio delectus fuga repellat at accusamus quis repudiandae!
    </p>
    <br>
    <hr>
    <a href={modelDownload}>Download (.stl)</a>
    <canvas bind:this={canvas}></canvas>
</div>


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

    .tile {
        padding: 50px;
        margin: 50px;
        border-radius:30px;
        height: 800px;

    }
  
</style>