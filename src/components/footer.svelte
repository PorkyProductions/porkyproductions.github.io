<script>
    import '../app.css'
    import ppiologo from '../../images/PPio logo.png'
    import heart from '../../node_modules/bootstrap-icons/icons/suit-heart-fill.svg'
    

    // Audios
    
    import audio_airWooshUnderwater from '../../audio/audio_Air_Woosh_Underwater.mp3';
    import audio_alarmClock from '../../audio/audio_Alarm_Clock.mp3';
    import audio_beepShort from '../../audio/audio_Beep_Short.mp3';
    import audio_bigExplosionDistant from '../../audio/audio_Big_Explosion_Distant.mp3';
    import audio_cartoonBoing from '../../audio/audio_Cartoon_Boing.mp3';
    import audio_crash from '../../audio/audio_Crash.mp3';
    import audio_crunch from '../../audio/audio_Glass_Crunch.mp3';
    import audio_shatter from '../../audio/audio_Glass_Shatters_Into_Debris.mp3';
    
    let heartCount = 0
    const increment = async () => {
    
        const airWooshUnderwater = new Audio(audio_airWooshUnderwater)
        const alarmClock = new Audio(audio_alarmClock)
        const beepShort = new Audio(audio_beepShort)
        const bigExplosionDistant = new Audio(audio_bigExplosionDistant)
        const cartoonBoing = new Audio(audio_cartoonBoing)
        const crash = new Audio(audio_crash)
        const crunch = new Audio(audio_crunch)
        const shatter = new Audio(audio_shatter)
        
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
    <div class="flex justify-between content-center bg-secondary-darkest text-slate-200 pt-12 px-12">
        <div class="columns">
            <div class="px-10">
                <img src={ppiologo} alt="">
            </div>
            <div class='px-10'>
                <p class='font-primary text-xl text-white'>Contact Us</p><br>
                <ul>
                    <li class="underline text-blue-300 hover:text-blue-100"><a href="mailto:tristankenshin@gmail.com">Tristan</a></li>
                    <li class="underline text-blue-300 hover:text-blue-100"><a href="mailto:rpmullin@comcast.net">Ryan</a></li>
                </ul>
            </div>
            <div class='px-10'>
                <p class='font-primary text-xl'>Issues</p><br>
                <a href='https://github.com/PorkyProductions/porkyproductions.github.io/issues' class='underline text-blue-300 hover:text-blue-100'>Report on Github</a>
            </div>
            <div class='px-10'>
                <p class='font-primary text-xl'>Socials</p><br>
                None
            </div>
        </div>
    </div>
    <div class= 'text-white m-auto' on:click={increment} on:keypress={increment}>
        <div class='bg-secondary-darkest'> 
            <p class="text-center">Made With</p>
            <img src={heart} alt="" on:click={increment} on:keypress={increment} class="m-auto h-12 w-1/12">
            <p class="text-center">at PorkyProductions</p>
         </div>
    </div>
</footer>

<style>
    .columns{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    
    img {
        width: 75%;
    }
</style>