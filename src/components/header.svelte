<script>
    // https://vitejs.dev/guide/assets.html
    import '../app.css'
    import { DEVICE_type } from 'uadetect'
    import controller from '../../node_modules/bootstrap-icons/icons/controller.svg'
    import boxes from '../../node_modules/bootstrap-icons/icons/boxes.svg'
    import badge3d from '../../node_modules/bootstrap-icons/icons/badge-3d.svg'
    import codeSlash from '../../node_modules/bootstrap-icons/icons/code-slash.svg'
    import hedgehog from '/./../images/HedgehogIcon.png'
    const HH = document.getElementById("HH")
    const spin = () => {
        HH.classList.add('spin');
    }
</script>


<header class="bg-slate-200 dark:bg-slate-700 dark:text-white rounded-b-lg">
    <a href="index.html" class="hover:bg-slate-300 dark:hover:bg-slate-800 hover:rounded-xl rounded-lg"><img src={hedgehog} alt="a hedgehog" id="HH" on:mouseover={spin} on:focus={spin}></a>
    {#if DEVICE_type === "mobile"}
        <div></div>
    {:else if DEVICE_type === "desktop"}
        <div class="flex content-center justify-between p-4">
            <div class="flex justify-between content-center p-2">
                <a href="games.html" class="sm:text-sm md:text-md lg:text-lg xl:text-xl font-primary font-medium hover:bg-primary hover:text-white hover:font-semibold dark:hover:bg-slate-800 hover:rounded-xl">
                    Games 
                </a>
                <br>
                <img src={controller} alt="controller">
            </div>
            <div class="flex justify-between content-center p-2">
                <a href="3Dprints.html" class="sm:text-sm md:text-md lg:text-lg xl:text-xl font-primary font-medium hover:bg-primary hover:text-white hover:font-semibold dark:hover:bg-slate-800 hover:rounded-xl">
                    3D Prints
                </a>
                <img src={badge3d} alt="">
            </div>
            <div class="flex justify-between content-center p-2">
                <a href="models.html" class="sm:text-sm md:text-md lg:text-lg xl:text-xl font-primary font-medium hover:bg-primary hover:text-white hover:font-semibold dark:hover:bg-slate-800 hover:rounded-xl">
                    Models
                </a>
                <img src={boxes} alt="boxes">
            </div>
            <div class="flex justify-between content-center p-2">
                <a href="developments.html" class="sm:text-sm md:text-md lg:text-lg xl:text-xl font-primary font-medium hover:bg-primary hover:text-white hover:font-semibold dark:hover:bg-slate-800 hover:rounded-xl">
                    Developments
                </a>
                <img src={codeSlash} alt="">
            </div>
        </div>
    {/if}
</header>

<style>
    #HH {
        width: 5%;
    }
    header {
        position: sticky;
        top: 0;
    }
    .spin {
        animation: spin 2s infinite cubic-bezier(0.96, 0.95, 0, 1.22);
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>