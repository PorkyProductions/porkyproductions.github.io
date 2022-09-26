<script>
    // https://vitejs.dev/guide/assets.html
    import '../app.css'
    import { deviceType } from 'uadetect'
    import controller from '../../node_modules/bootstrap-icons/icons/controller.svg'
    import boxes from '../../node_modules/bootstrap-icons/icons/boxes.svg'
    import badge3d from '../../node_modules/bootstrap-icons/icons/badge-3d.svg'
    import codeSlash from '../../node_modules/bootstrap-icons/icons/code-slash.svg'
    import slider from '../../node_modules/bootstrap-icons/icons/sliders.svg'
    import hedgehog from '../../images/HedgehogIcon.png'
    import houseDoor from '../../node_modules/bootstrap-icons/icons/house-door.svg'
    import NavbarItem from './navbarItem.svelte'
    let HH;
    const spin = () => {
        HH.classList.add('spin');
    }
</script>
<header class="bg-slate-200 dark:bg-slate-700 dark:text-white">
    {#if deviceType === "mobile"}
        <div></div>
    {:else if deviceType === "desktop"}
        <div class="flex content-center justify-between p-4 border-b-4 border-slate-800">
            <div></div>
            
            <a href="index.html" class="header-link hover:bg-slate-300 dark:hover:bg-slate-800 hover:rounded-xl rounded-lg  h-24">
                <img class = "float-left"src={hedgehog} alt="a hedgehog" id="HH" bind:this={HH} on:mouseover={spin} on:focus={spin}>
                <p class="float-right"><b>ProkyProductions</b>.io</p>
            </a>
            <NavbarItem href={"index.html"} text={"Home"} icon={houseDoor} iconAlt={"a house"} />
            <NavbarItem href={"games.html"} text={"Games"} icon={controller} iconAlt={"controller"} />
            <NavbarItem href={"threeDprints.html"} text={"3D Prints"} icon={badge3d} iconAlt={"3D"} />
            <NavbarItem href={"models.html"} text={"Models"} icon={boxes} iconAlt={"boxes"} />
            <NavbarItem href={"developments.html"} text={"Developments"} icon={codeSlash} iconAlt={"code"} />
            <NavbarItem href={"experimental.html"} text={"Experimental"} icon={slider} iconAlt={"knobs"} />
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