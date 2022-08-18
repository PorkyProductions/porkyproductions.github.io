<script>
    import '../app.css'
    export let modelName;
    export let modelDownload;
    export let iFrameSource;
    export let iFrameTitle;
    export let image
    let canvas;
    import { Application } from '@splinetool/runtime'
    new Application(canvas)
</script>
<div class="tile bg-slate-100 dark:bg-slate-600 drop-shadow-lg">
    <h1 class="font-bold p-4 font-primary sm:text-md md:text-lg lg:text-xl xl:text-2xl">
        {modelName}
    </h1>

    <div class="flex justify-center">
        <iframe src={iFrameSource} frameborder='0' width='200%' height='100%' title={iFrameTitle}></iframe>
        <img src={image} alt="">
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
    .tile {
        padding: 50px;
        margin: 50px;
        border-radius:30px;
        text-align:left;
        height: auto;

    }
  
</style>