<script>
    import '../app.css'
    import { DEVICE_type } from 'uadetect'
</script>

{#if DEVICE_type === "mobile"}
    <section>
        <h1 class="text-center font-primary font-semibold text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-6">
            Hedgehog Studios Games
        </h1>
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
    <section>
        <h1 class="text-center font-primary font-semibold text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-6">
            Hedgehog Studios Games
        </h1>
        <div class="grid">
            <div class="tile">
                <b>RUSH!</b> - in with your friends and play this NEW SUPER AMAZING GREAT ULTRA MEGA GAME made by us called <b>RUSH!</b> a fun 2D fighter with a great campaign for anyone
                            to enjoy! Make sure you check this one out! 
                <br />
                <hr />
                -HTML5 Game<br />
                -Windows Download<br />
                -Controller Support ONLY<br />
                -In Development<br />
            </div>
            <div class="tile">
                <h1 class="text-center font-bold font-primary sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    UNDER CONSTRUCTION
                </h1>
            </div>
        </div>
    </section>
{/if}

<style>
.grid {
    display:grid;
    grid-template-columns:1fr 1fr
}
.tile {
    padding: 50px;
    margin: 50px;
    border-radius:30px;
    text-align:left;
    border: 3px solid #0000F4;
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

