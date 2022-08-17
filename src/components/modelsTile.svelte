<script>
    import '../app.css'
    export let modelName;
    export let modelDownload;
    export let modelImage;
    export let id;
</script>
<div class="tile bg-slate-100 drop-shadow-lg">
    <h1 class="font-bold p-4 font-primary sm:text-md md:text-lg lg:text-xl xl:text-2xl">
        {modelName}
    </h1>

    <div class="flex justify-center">
        <button id="button_{id}Left" class = "previewButton text-8xl">&lt;</button>
        <img src={modelImage} alt="" id = {id} class="previewImage p-4 w-3/4"><!--ACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGEACTUAL IMAGE ACTUAL IMAGE-->
        <button id="button_{id}Right"class = "previewButton text-8xl">&gt;</button>

    </div>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste molestias repellendus dolorum qui quia, iure fugiat in vel optio! Iusto, cumque distinctio delectus fuga repellat at accusamus quis repudiandae!
    </p>
    <br>
    <hr>
    <a href={modelDownload}>Download (.stl)</a>
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
        text-align:left;
        height: 800px;

    }
  
</style>