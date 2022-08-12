<script>
    import '../../app.css'
    let time = 15
    setInterval(() => {
        time--
        if (time === 0) {
            clearInterval()
            window.location.href="https://porkyproductions.github.io/"
        }
    }, 1000);
    import hedgehog from '../../../images/HedgehogIcon.png'
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
    <div>
        <img src={hedgehog} alt="hedgehog" class="spin">
        <img src={hedgehog} alt="hedgehog" class="spin2">
        <img src={hedgehog} alt="hedgehog" class="spin3">
        <img src={hedgehog} alt="hedgehog" class="spin4">
        <img src={hedgehog} alt="hedgehog" class="spin5">
    </div>
</div>
<style>
    .spin {
        animation: spin 3s infinite;
        margin: auto;
        padding-bottom: 400px;
    }
    @keyframes spin {
        0% {
            transform:rotate(0)
        }
        to {
            transform:rotate(360deg)
        }
    }
    .spin2 {
        animation: spin 3s infinite;
        margin: auto;
        padding-bottom: 300px;
    }
    @keyframes spin2 {
        0% {
            transform:rotate(5)
        }
        to {
            transform:rotate(360deg)
        }
    }
    .spin3 {
        animation: spin 3s infinite;
        margin: auto;
        padding-bottom: 200px;
    }
    @keyframes spin3 {
        0% {
            transform:rotate(15)
        }
        to {
            transform:rotate(360deg)
        }
    }
    .spin4 {
        animation: spin 3s infinite;
        margin: auto;
        padding-bottom: 100px;
    }
    @keyframes spin4 {
        0% {
            transform:rotate(25)
        }
        to {
            transform:rotate(360deg)
        }
    }
    .spin5 {
        animation: spin 3s infinite;
        margin: auto;
        padding-bottom: 0px;
    }
    @keyframes spin5 {
        0% {
            transform:rotate(40)
        }
        to {
            transform:rotate(360deg)
        }
    }
</style>