<script>
    import '../app.css';
    import hedgehogOnComputer from '../../images/compHedgehog.jpg'
</script>
<section class= "section bg-blue-500" id="ourMission">
    <div class="">
        <div class="py-20">
            <h1 class="font-semibold text-white font-primary px-32 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-24 text-center">
                Our Mission
            </h1>
            <div class="text-white font-secondary  pb-12 px-40 sm:text-sm md:text-md lg:text-lg xl:text-xl grid" >
                <div class="tile" style="display:none"></div>
                <div id = "mission-text" class=" tile-preAnimate px-20 mb-32 drop-shadow-2xl">
                Here at <b>PorkyProductions©</b> we are on a mission to create technology that can change the world.
                Whether it be a game, a model, or a software development, we are dedicated to positively impacting the world.
                We chose to do this because we believe that technology (when used in the right ways) can and will positively impact humanity.
                <br>
                <br>
                <br>
                <p class="text-right">
                -Join us as we create technology that can change the world! 
                </p>
                </div>
                <div class = "tile-preAnimate py-0 -mt-20 drop-shadow-2xl">
                    <br>
                    <img src={hedgehogOnComputer} id="hedgehogComputerImage" alt="">
                </div>
            </div>
        </div>
        
    </div>
</section>


<style>
    .section {
        
        background-image: linear-gradient(#0003f9, #00c00d);
    }
    #hedgehogComputerImage{
        height: 80%;
        border-radius: 30px;
        border: 3px solid white;
    }
    #mission-text {
        border-radius: 30px;
        border:3px solid white;
        padding-top: 110px;
        background-color: darkblue;
        
    }
    .grid{
        grid-template-columns: 1fr 1fr;
    }
    .tile{
        padding:50px;
        animation: enter 1s;
    }
    .tile-preAnimate{
    transform: scale(0,0);
    opacity:0;
}
@keyframes enter {
	0% {
		transform: scale(0, 0);
        opacity: 0;
	}
	50% {
		transform: scale(1, 1);

    }
    70%{
        opacity: 1;
    }
}
    @keyframes gradient {
        0% {
            background-position:0% 50%
        }
        50% {
            background-position:100% 50%
        }
        to {
        background-position:0% 50%
        }
    }
</style>