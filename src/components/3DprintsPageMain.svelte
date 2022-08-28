<script>
    import '../app.css'
    import impCredit from '../../images/imp_credit.jpg'
    import hedehog3D from '../../images/hedgehogs_3dprint.jpg'
    import { deviceType } from 'uadetect'
</script>


{#if deviceType === "mobile"}
    <section class="bg-gradient-to-b  from-UADGreen to-green-600 text-black dark:text-white dark:bg-black">
        <h1 class="text-center font-primary font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-6">
            3D Prints
        </h1>
        <div class="gridMobile">
            <div class="tileMobile">
                <h2 class="font-semibold font-primary text-center sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    The Imperial Credit
                </h2>
                <div class="m-auto">
                    <img src={impCredit} id="imp" alt="">
                </div>
                <p class="font-light font-secondary sm:text-sm md:text-md lg:text-md xl:text-lg">
                    The Imperial Credit is a replacement for the existing monetary standard. It can eaisly be mass-produced due to it's 3D printed nature. Instead of relying on cryptography like cryptocurrency, it is a simple, easy to use, and secure payment system. It is the first currency to be created using 3D printing, and the first to be regulated by a company 
                </p>
            </div>
            <div class="tileMobile">
                    <h2 class="font-semibold font-primary text-center sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                        Hedgehog
                    </h2>
                    <div class="m-auto">
                        <img src={hedehog3D} id="imp" alt="">
                    </div>
                    <p class="font-light font-secondary sm:text-sm md:text-md lg:text-md xl:text-lg">
                        The Hedgehog is a 3D printed model of our mascot, Porky. It is a small, cute, and cute. It is a hedgehog, and it is a hedgehog.
                    </p>
            </div>
        </div>
    </section>
{:else}
    <section class="bg-gradient-to-b from-UADGreen to-green-600 text-black dark:text-white dark:bg-black">
        <h1 class="text-center font-primary font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-6">
            3D Prints
        </h1>
        <div class="grid">
            <div class="tile bg-slate-100 drop-shadow-2xl">
                <h2 class="font-semibold font-primary text-center sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    The Imperial Credit
                </h2>
                <div class="m-auto">
                    <img src={impCredit} class= "m-auto"id="imp" alt="">
                </div>
                <p class="font-light font-secondary sm:text-sm md:text-md lg:text-md xl:text-lg">
                    The Imperial Credit is a replacement for the existing monetary standard. It can eaisly be mass-produced due to it's 3D printed nature. Instead of relying on cryptography like cryptocurrency, it is a simple, easy to use, and secure payment system. It is the first currency to be created using 3D printing, and the first to be regulated by a company 
                </p>
            </div>
            <div class="tile bg-slate-100 drop-shadow-2xl">
                    <h2 class="font-semibold font-primary text-center sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                        Hedgehog
                    </h2>
                    <div class="m-auto">
                        <img src={hedehog3D}  class= "m-auto"id="imp" alt="">
                    </div>
                    <p class="font-light font-secondary sm:text-sm md:text-md lg:text-md xl:text-lg">
                        The Hedgehog is a 3D printed model of our mascot, Porky. It is a small, cute, and cute. It is a hedgehog, and it is a hedgehog.
                    </p>
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
        height: 800px;
        text-align: center;
        justify-content: center;
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
    #imp {
        width: 35%;
    }
    </style>

