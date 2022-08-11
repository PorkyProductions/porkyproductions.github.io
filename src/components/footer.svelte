<script>
    import '../app.css'
    import ppiologo from '../../images/PPio logo.png'
    import heart from '../../node_modules/bootstrap-icons/icons/suit-heart-fill.svg'
    import controller from '../../node_modules/bootstrap-icons/icons/controller.svg'
    import boxes from '../../node_modules/bootstrap-icons/icons/boxes.svg'
    import badge3d from '../../node_modules/bootstrap-icons/icons/badge-3d.svg'
    import codeSlash from '../../node_modules/bootstrap-icons/icons/code-slash.svg'
    import houseDoor from '../../node_modules/bootstrap-icons/icons/house-door.svg'

    // Audios
    import audio_airWooshUnderwater from '../../audio/audio_Air_Woosh_Underwater.mp3'
    import audio_alarmClock from '../../audio/audio_Alarm_Clock.mp3'
    import audio_beepShort from '../../audio/audio_Beep_Short.mp3'
    import audio_bigExplosionDistant from '../../audio/audio_Big_Explosion_Distant.mp3'
    import audio_cartoonBoing from '../../audio/audio_Cartoon_Boing.mp3'
    import audio_crash from '../../audio/audio_Crash.mp3'
    import audio_crunch from '../../audio/audio_Glass_Crunch.mp3'
    import audio_shatter from '../../audio/audio_Glass_Shatters_Into_Debris.mp3'

    const airWooshUnderwater = new Audio(audio_airWooshUnderwater)
    const alarmClock = new Audio(audio_alarmClock)
    const beepShort = new Audio(audio_beepShort)
    const bigExplosionDistant = new Audio(audio_bigExplosionDistant)
    const cartoonBoing = new Audio(audio_cartoonBoing)
    const crash = new Audio(audio_crash)
    const crunch = new Audio(audio_crunch)
    const shatter = new Audio(audio_shatter)


    let heartCount = 0
    const increment = () => {
        heartCount += 1
        console.log(`count is at ${heartCount}`);
        switch(heartCount){
            case 0:
                console.log(0);
                break;
            case 1:
                airWooshUnderwater.play()
                break;
            case 2:
                alarmClock.play();
                break;
            case 3:
                beepShort.play();
                break;
            case 4:
                bigExplosionDistant.play();
                break;
            case 5:
                cartoonBoing.play();
                break;
            case 6:
                crash.play();
                break;
            case 7:
                crunch.play();
                break;
            case 8:
                shatter.play();
                break;
            case 9:
                alert("Are you sure you want to keep clicking?");
            default:
                airWooshUnderwater.play();
                alarmClock.play();
                beepShort.play();
                bigExplosionDistant.play();
                cartoonBoing.play();
                crash.play();
                crunch.play();
                shatter.play();
        };
    }
    
</script>

<footer>

    <div class="flex justify-between content-center bg-slate-500 text-white pt-12 px-12">
        <img src={ppiologo} alt="the logo of the website">
        <div class="flex justify-between content-center"><a href="index.html">Home</a><img src={houseDoor} alt=""></div>
        <div class="flex justify-between content-center"><a href="games.html">Games</a><img src={controller} alt=""></div>
        <div class="flex justify-between content-center"><a href="threeDprints.html">3D Prints</a><img src={badge3d} alt=""></div>
        <div class="flex justify-between content-center"><a href="models.html">Models</a><img src={boxes} alt=""></div>
        <div class="flex justify-between content-center"><a href="developments.html">Developments</a><img src={codeSlash} alt=""></div>
    </div>
    <div class="bg-slate-500 text-white m-auto" on:click={increment}>
        <p class="text-center">Made With</p>
        <img src={heart} alt="" on:click={increment} class="m-auto">
        <p class="text-center">at PorkyProductions</p>
    </div>
</footer>

<style>
    img {
        width: 15%;
    }
</style>