<script>
    // https://vitejs.dev/guide/assets.html
    import '../app.css'
    import { DEVICE_type } from 'uadetect'
    import controller from '../../node_modules/bootstrap-icons/icons/controller.svg'
    import boxes from '../../node_modules/bootstrap-icons/icons/boxes.svg'
    import badge3d from '../../node_modules/bootstrap-icons/icons/badge-3d.svg'
    import codeSlash from '../../node_modules/bootstrap-icons/icons/code-slash.svg'
    import experiments from '../../node_modules/bootstrap-icons/icons/lightbulb.svg'
    import hedgehog from '/./../images/HedgehogIcon.png'
    import houseDoor from '../../node_modules/bootstrap-icons/icons/house-door.svg'
  
    const HH = document.getElementById("HH")
    const spin = () => {
    HH.classList.add('spin');
    }
</script>
<header class="bg-slate-200 dark:bg-slate-700 dark:text-white">
    {#if DEVICE_type === "mobile"}
        <div></div>
    {:else if DEVICE_type === "desktop"}
    
        <div class="flex content-center justify-between p-4 border-b-4 border-slate-800">
            <div></div>
            
            <a href="index.html" class="header-link hover:bg-slate-300 dark:hover:bg-slate-800 hover:rounded-xl rounded-lg  h-24">
                <img class = "float-left"src={hedgehog} alt="a hedgehog" id="HH" on:mouseover={spin} on:focus={spin}>
                <p class="float-right"><b>PorkyProductions</b>.io</p>
            </a>
  
            <div class="flex justify-between content-center p-2">
                <a href="index.html" class="header-link sm:text-sm md:text-md lg:text-lg xl:text-xl font-primary font-medium hover:bg-slate-400 hover:font-semibold  hover:rounded-xl">
                    Home
                    <img src = {houseDoor} alt ="house">
                </a>
                <br>
            </div>
            <div class="flex justify-between content-center p-2">
                <a href="games.html" class="header-link sm:text-sm md:text-md lg:text-lg xl:text-xl font-primary font-medium hover:bg-slate-400  hover:font-semibold dark:hover:bg-slate-800 hover:rounded-xl">
                    Games 
                    <img src = {controller} alt ="controller">
                </a>
                <br>
            </div>
            <div class="flex justify-between content-center p-2">
                <a href="threeDprints.html" class="header-link sm:text-sm md:text-md lg:text-lg xl:text-xl font-primary font-medium hover:bg-slate-400  hover:font-semibold dark:hover:bg-slate-800 hover:rounded-xl">
                    3D Prints
                    <img src ={badge3d} alt ="3d">
                </a>
            </div>
            <div class="flex justify-between content-center p-2">
                <a href="models.html" class="header-link sm:text-sm md:text-md lg:text-lg xl:text-xl font-primary font-medium hover:bg-slate-400  hover:font-semibold dark:hover:bg-slate-800 hover:rounded-xl">
                    Models
                    <img src = {boxes} alt ="box">
                </a>
            </div>
            <div class="flex justify-between content-center p-2">
                <a href="developments.html" class="header-link sm:text-sm md:text-md lg:text-lg xl:text-xl font-primary font-medium hover:bg-slate-400  hover:font-semibold dark:hover:bg-slate-800 hover:rounded-xl">
                    Developments
                    <img src={codeSlash} alt="code">
                </a>
            </div>
            <div class="flex justify-between content-center p-2">
                <a href="experimental.html" class="header-link sm:text-sm md:text-md lg:text-lg xl:text-xl font-primary font-medium hover:bg-slate-400  hover:font-semibold dark:hover:bg-slate-800 hover:rounded-xl">
                    Experimental
                    <img src={experiments} alt="lightbulb">
                </a>
            </div>
        <div></div>
        <div></div>
        <div></div>
        </div>
    {/if}   
</header>
<style>
    #HH {
        padding-right:0px;
        height:90%;
    }
    #HH:hover{
        animation: spin 1s;
        
    }
    header {
        position: sticky;
        top: 0;
        z-index: 5;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .header-link {
        padding:20px;
        margin-top: -15px;
        margin-bottom:-15px;
        padding-right: 50px;
        padding-left:50px;
    }
  </style>