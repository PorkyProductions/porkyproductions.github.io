<script>
    import HedgehogSpinner from '../../components/hedgehogSpinner.svelte';

    import '../../app.css'
    let time = 15
    setInterval(() => {
        time--
        if (time === 0) {
            clearInterval()
            window.location.href="https://porkyproductions.github.io/"
        }
    }, 1000);
</script>

<div class="bg-white text-black dark:bg-black dark:text-white">
    <h1 class="font-primary text-center text-8xl font-bold">
        404
    </h1>
    <h2 class="font-primary text-center text-5xl font-bold">
        Page Not Found
    </h2>
    <h3 class="font-primary text-center text-4xl font-bold">
        You will be automatically redirected in {time} seconds
    </h3>
    <HedgehogSpinner />
</div>