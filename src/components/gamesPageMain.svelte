<script>
    import '../app.css'
    import { deviceType } from 'uadetect'
</script>

{#if deviceType === "mobile"}
    <section class="section text-black dark:text-white dark:bg-black">
       
        <div class="gridMobile">
            <div class="tileMobile">
                <b>RUSH!</b> - in with your friends and play this NEW SUPER AMAZING GREAT ULTRA MEGA GAME made by us called <b>RUSH!</b> a fun 2D fighter with a great campaign for anyone
                            to enjoy! Make sure you check this one out! 
                <br />
                <hr />
                -HTML5 Game<br />
                -Windows Download<br />
                -Controller Support ONLY<br />
                -In Development<br />
            </div>
            <div class="tileMobile">
                <h1 class="text-center font-bold font-primary sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    UNDER CONSTRUCTION
                </h1>
            </div>
        </div>
    </section>
{:else}
    <section class="section text-black dark:text-white dark:bg-black">
        
        <div class="grid">
            <div class="tile drop-shadow-xl">
                <b>RUSH!</b> - in with your friends and play this NEW SUPER AMAZING GREAT ULTRA MEGA GAME made by us called <b>RUSH!</b> a fun 2D fighter with a great campaign for anyone
                            to enjoy! Make sure you check this one out! 
                <br />
                <hr />
                -HTML5 Game<br />
                -Windows Download<br />
                -Controller Support ONLY<br />
                -In Development<br />
            </div>
            <div class="tile  drop-shadow-xl">
                <h1 class="text-center font-bold font-primary sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    UNDER CONSTRUCTION
                </h1>
            </div>
        </div>
    </section>
{/if}

<style>
    .section {
        background-image: linear-gradient(#1c204a, #3f47a1);

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
    background-color: whitesmoke;
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


