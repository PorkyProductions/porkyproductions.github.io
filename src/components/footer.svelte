<script>
    import '../app.css'
    import ppiologo from '../../images/PPio logo.png'
    import heart from '../../node_modules/bootstrap-icons/icons/suit-heart-fill.svg'
    import controller from '../../node_modules/bootstrap-icons/icons/controller.svg'
    import boxes from '../../node_modules/bootstrap-icons/icons/boxes.svg'
    import badge3d from '../../node_modules/bootstrap-icons/icons/badge-3d.svg'
    import codeSlash from '../../node_modules/bootstrap-icons/icons/code-slash.svg'
    import houseDoor from '../../node_modules/bootstrap-icons/icons/house-door.svg'
</script>

<footer>
    <div class="flex justify-between content-center bg-slate-500 text-white">
        <img src={ppiologo} alt="the logo of the website">
        <div class="flex justify-between content-center"><a href="index.html">Home</a><img src={houseDoor} alt=""></div>
        <div class="flex justify-between content-center"><a href="games.html">Games</a><img src={controller} alt=""></div>
        <div class="flex justify-between content-center"><a href="3Dprints.html">3D Prints</a><img src={badge3d} alt=""></div>
        <div class="flex justify-between content-center"><a href="models.html">Models</a><img src={boxes} alt=""></div>
        <div class="flex justify-between content-center"><a href="developments.html">Developments</a><img src={codeSlash} alt=""></div>
    </div>
    <div class="bg-slate-500 text-white m-auto">
        <p class="text-center">Made With</p>
        <img src={heart} alt="" class="m-auto">
        <p class="text-center">at PorkyProductions</p>
    </div>
</footer>

<style>
    img {
        width: 15%;
    }
</style>