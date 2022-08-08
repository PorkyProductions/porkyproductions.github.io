<script>
    import '../app.css';
</script>
<section>
    <div class="blue-gradient">
        <div class="p-20">
            <h1 class="text-center font-semibold text-white font-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-6">
                Our Mission
            </h1>
            <p class="text-center text-white font-primary sm:text-sm md:text-md lg:text-lg xl:text-xl px-10 pb-10">
                Here at PorkyProductions© we are on a mission to create technology that can change the world.
                Whether it be a game, a model, or a software development, we are dedicated to positively impacting the world.
                We chose to do this because we believe that technology (when used in the right ways) can and will positively impact humanity.
                We believe that technology can be used to create a better world, and that we can use technology to help us do that.
                Join us as we create technology that can change the world! 
            </p>
        </div>
        
    </div>
</section>


<style>
.blue-gradient {
    border-radius: 13px;
    background: linear-gradient(90deg,hsl(240, 100%, 48%) 0%,hsl(169, 100%, 50%) 100%);
    background-size: auto;
    background-size: 400% 400%;
    -webkit-animation: gradient 25s ease infinite;
    animation: gradient 25s ease infinite;
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