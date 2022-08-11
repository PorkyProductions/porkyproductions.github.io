<script>
    import '../app.css'
    import impCredit from '../../images/imp_credit.jpg'
    import hedehog3D from '../../images/hedgehogs_3dprint.jpg'
</script>

<section>
    <h1 class="text-center font-primary font-semibold text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-6">
        3D Prints
    </h1>
    <div class="grid">
        <div class="tile">
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
        <div class="tile">
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

<style>
.grid {
    display:grid;
    grid-template-columns:1fr 1fr
}
.tile {
    padding:50px;
    margin:50px;
    border:5px solid hsl(240, 100%, 48%);
    border-radius:30px;
    text-align:left;
}

#imp {
    width: 35%;
}
</style>

